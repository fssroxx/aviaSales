import "./segment.scss";

import moment from "moment";
import "moment/locale/ru";

const Segment = ({ segment }) => {
  const travelDurationHours = (segment.travelDuration / 60).toFixed(0);
  const travelDurationMinutes = segment.travelDuration % 60;
  const showTravelDurationHours =
    travelDurationHours === 0 ? null : travelDurationHours + " " + "ч";
  const showTravelDurationMinutes =
    travelDurationMinutes === 0 ? null : travelDurationMinutes + " " + "мин";
  let departureTime = moment(segment.departureDate).format("H:mm");
  let departureDate = moment(segment.departureDate)
    .format("DD MMM ddd")
    .toLowerCase();
  let arrivalTime = moment(segment.arrivalDate).format("H:mm");
  let arrivalDate = moment(segment.arrivalDate)
    .format("DD MMM ddd")
    .toLowerCase();

  const transfer = segment.starting ? (
    <div className="transfer__count">1 пересадка</div>
  ) : null;

  return (
    <div className="flightTo">
      <div className="firstLine">
        <span className="firstLine__from">
          {segment.departureCity?.caption}
        </span>
        <span className="firstLine__from">
          , {segment.departureAirport.caption}{" "}
        </span>
        <span className="firstLine__uid-from">
          ({segment.departureAirport.uid})
        </span>
        <i className="firstLine__arrow-icon"> &rarr; </i>
        <span className="firstLine__to">{segment.arrivalCity?.caption}</span>
        <span className="firstLine__to">
          , {segment.arrivalAirport.caption}{" "}
        </span>
        <span className="firstLine__uid-to">
          ({segment.arrivalAirport.uid})
        </span>
      </div>
      <div className="secondLine">
        <p className="flyFrom">
          <span className="time">{departureTime}</span>
          <span className="date">{departureDate}</span>
        </p>

        <p className="totalTime">
          {showTravelDurationHours} {showTravelDurationMinutes}
        </p>
        <p className="flyTo">
          <span className="date">{arrivalDate}</span>
          <span className="time">{arrivalTime}</span>
        </p>
      </div>
      <div className="transfer">
        <div className="transfer__line">{transfer}</div>
      </div>
      <div className="companyName">
        <p className="companyName__content">
          Рейс выполняет: {segment.airline.caption}
        </p>
      </div>
    </div>
  );
};
export default Segment;
