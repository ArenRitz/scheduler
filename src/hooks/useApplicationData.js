import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });


  const setDay = day => setState({...state, day});

  useEffect(() => {    
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []);

// Save interview to the database
function bookInterview(id, interview) {
  // console.log(id, interview);

  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };

  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  
  const url =`http://localhost:8001/api/appointments/${id}`;

  let PutReq={
    url,
    method: 'PUT',
    data: appointment
  }
  return axios(PutReq).then(() => {
    setState({...state, appointments})
  });
}


// Delete interview from the database
function cancelInterview(id){
  const appointment = {
    ...state.appointments[id],
    interview: null
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };

  const url =`http://localhost:8001/api/appointments/${id}`;

  let req={
    url,
    method: 'DELETE',
    data:appointment
  }
  return axios(req).then(() =>{
    setState({...state, appointments});
  })
}




  return {
    state, 
    setDay,
    bookInterview,
    cancelInterview
  }




}