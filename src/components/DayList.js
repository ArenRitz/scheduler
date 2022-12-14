import DayListItem from "./DayListItem";
import React from "react";

export default function DayList(props) {
  let days = props.days.map(day => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    );
  });


 
  return(
    <ul>
     {days}
    </ul>
  )
}