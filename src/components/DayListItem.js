import "components/DayListItem.scss";
import classNames from "classnames";
import React from "react";


export default function DayListItem(props) {
  let DayListItemClass = classNames( 'day-list__item', { 
    'day-list__item--selected': props.selected, 
    'day-list__item--full': !props.spots
 }); 

  // changes text to be displayed based on number of spots available
  const formatSpots = () => {
    if (props.spots === 0) {
      return "no spots remaining";
    } else if (props.spots === 1) {
      return "1 spot remaining";
    } 

    return `${props.spots} spots remaining`;
  }

  let spots = formatSpots();

  return (
    <li className={DayListItemClass} onClick={() => props.setDay(props.name)} data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spots}</h3>
    </li>
  );
}