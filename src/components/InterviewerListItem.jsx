import "components/InterviewerListItem.scss";
import classNames from "classnames";
import React from "react";

export default function InterviewerListItem (props) {

  let InterviewerItemClass = classNames( 'interviewers__item', { 
    'interviewers__item--selected': props.selected
 }); 

  return (
<li className={InterviewerItemClass} onClick={props.setInterviewer}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li>

  );
}