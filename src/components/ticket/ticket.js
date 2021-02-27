import "./ticket.scss";
import ticket from "../../flights_max.json";
import TicketContent from "../ticket-content";
import { useState } from "react";

const Ticket = () => {
  const [counter, setCounter] = useState(2);
  const maxLength = ticket.result.flights.length;
  const plusCounter = () => {
    const newCounter = Math.min(maxLength, counter + 2)
    setCounter(newCounter);
  };
  
  return (
    <div className="ticket-list">
      {ticket.result.flights.slice(0, counter).map((ticket) => {
        return <TicketContent key={ticket.flightToken.slice(0,30)} ticket={ticket} />;
      })}

      {(maxLength <= counter) ? null : <button onClick={plusCounter}>add more</button>}
    </div>
  );
};
export default Ticket;
