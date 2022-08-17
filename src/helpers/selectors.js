export function getAppointmentsForDay(state, dayS) {
    const filteredDays = state.days.filter(x => x.name === dayS); // returns an array of appointments for that day
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


  // get interview information for the appointment
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
  // get interviewers availble for the day to display in the form
  export function getInterviewersForDay(state, day) {
    let daysInterviewerIDs = [];

    for (let d of state.days) {
      if (d.name === day) {
        daysInterviewerIDs = d.interviewers;
      }
    };

    if (daysInterviewerIDs.length === 0) {
      return [];
    };

    let daysInterviewerDets = [];

    for (let itv of daysInterviewerIDs) {
      daysInterviewerDets.push(state.interviewers[itv]);
    };
    
    return daysInterviewerDets;
  };