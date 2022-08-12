import React from 'react'
import "components/Appointment/styles.scss";
import Empty from "./Empty";
import Header from './Header';
import Show from "./Show";
import useVisualMode from 'hooks/useVisualMode';
import Form from "./Form";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  const onAdd = () => {
    transition(SHOW);
  }
  const onCancel = () => {
    back();
  }
  const onConfirm = () => {
    transition(EMPTY);
  }



  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={props.onSave}
          onCancel={() => back(EMPTY)}

         />
         
      )}


    </article>
  );
}