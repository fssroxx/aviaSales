import Segment from "../segment";
import './ticket-content.css';

const TicketContent = ({ ticket }) => {
  return (
    <div className="ticket">
      <div className="header">
        <div className="header__logo"></div>
        <h3 className="header__price">total price: {ticket.flight.price.total.amount}</h3>
      </div>
      <div className="content">
        {ticket.flight.legs.map((item) => {
          return item.segments.map((segment, index) => {
            return (
                <div key={index}>
                    <Segment segment={segment} />
                    <hr/>
                </div>
            );
          });
        })}
      </div>
      <button className="ticket__button">ВЫБРАТЬ</button>
    </div>
  );
};
export default TicketContent;
