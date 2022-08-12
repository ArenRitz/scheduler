import React from 'react'
import "components/Appointment/styles.scss";
import Empty from "./Empty";
import Header from './Header';
import Show from "./Show";
import useVisualMode from 'hooks/useVisualMode';




export default function Appointment (props) {


  return (
    <article className="appointment">
      <Header  time={props.time} />
      { props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty/>  }


    </article>
  );
}