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
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []);


  function findDay(day) {
    const daysOfWeek = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4
    }
    return daysOfWeek[day]
  }






// Save interview to the database
function bookInterview(id, interview) {
  // console.log(id, interview);

  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };


  const dayOfWeek = findDay(state.day)

  let day = {
    ...state.days[dayOfWeek],
    spots: state.days[dayOfWeek]
  }

  if (!state.appointments[id].interview) {
    day = {
      ...state.days[dayOfWeek],
      spots: state.days[dayOfWeek].spots - 1
    } 
  } else {
    day = {
      ...state.days[dayOfWeek],
      spots: state.days[dayOfWeek].spots
    } 
  }

  let days = state.days
  days[dayOfWeek] = day;


  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  
  const url =`http://localhost:8001/api/appointments/${id}`;


  return axios.put(url, appointment).then(() => {
    setState({...state, appointments,days});
  })
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

  const dayOfWeek = findDay(state.day)

  const day = {
    ...state.days[dayOfWeek],
    spots: state.days[dayOfWeek].spots + 1
  }

  let days = state.days
  days[dayOfWeek] = day;



  let req={
    url,
    method: 'DELETE',
    data:appointment
  }
  return axios(req).then(() =>{
    setState({...state, appointments, days});
  })
}




  return {
    state, 
    setDay,
    bookInterview,
    cancelInterview
  }




}