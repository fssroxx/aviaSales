import "./ticket.scss";
// import ticket from "../../flights_max.json";
import TicketContent from "../ticket-content";
import { useState } from "react";

const Ticket = ({ ticket }) => {
  
  const [counter, setCounter] = useState(2);
  const maxLength = ticket.length;
  const plusCounter = () => {
    const newCounter = Math.min(maxLength, counter + 2);
    setCounter(newCounter);
  };
  if (ticket.length === 0) {
    return <h4>Билетов нет</h4>;
  }

  return (
    <div className="ticket-list">
      {ticket.slice(0, counter).map((ticket, index) => {
        return (
          <TicketContent
            key={index}
            ticket={ticket}
          />
        );
      })}

      {maxLength <= counter ? null : (
        <button onClick={plusCounter}>add more</button>
      )}
    </div>
  );
};
export default Ticket;
