export function getAppointmentsForDay(state, dayS) {
    const filteredDays = state.days.filter(x => x.name === dayS); //... returns an array of appointments for that day
    if(state.days.length===0 || filteredDays.length===0){
      return [];
    }

    //get the appointments
    const appointmentsFromDays = filteredDays[0].appointments;
    
    let filteredAppointments = [];
   
    for(let appointment of appointmentsFromDays) {
      filteredAppointments.push(state.appointments[appointment]);
    }

    return filteredAppointments;
  }


  export function getInterview(state, interview) {
    if (!interview) {
      return null;
    }
  
    const interviewerInfo = state.interviewers[interview.interviewer];
    return {
      student: interview.student,
      interviewer: interviewerInfo
    }
  }