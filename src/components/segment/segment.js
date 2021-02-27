import './segment.scss';

const Segment = ({ segment }) => {
    
    const travelDurationHours = (segment.travelDuration / 60).toFixed(0)
    const travelDurationMinutes = (segment.travelDuration % 60);
    const showTravelDurationHours = (travelDurationHours === 0) ? null : (travelDurationHours + ' ' + 'ч')
    const showTravelDurationMinutes = (travelDurationMinutes === 0) ? null : (travelDurationMinutes + ' ' + 'мин');
  return (
    <div className="flightTo">
      <div className="firstLine">
        <span className="firstLine__from">{ segment.departureCity?.caption}</span>
        <span className="firstLine__from">
          , { segment.departureAirport.caption}{" "}
        </span>
        <span className="firstLine__uid-from">
          ({ segment.departureAirport.uid})
        </span>
        <i className="firstLine__arrow-icon">-></i>
        <span className="firstLine__to">{ segment.arrivalCity?.caption}</span>
        <span className="firstLine__to">, { segment.arrivalAirport.caption} </span>
        <span className="firstLine__uid-to">({ segment.arrivalAirport.uid})</span>
      </div>
      <div className="secondLine">
        <p className="flyFrom">
          <span className="time">18:10</span>
          <span className="date">19 aug, wen</span>
        </p>

        <p className="totalTime">{ showTravelDurationHours }  {showTravelDurationMinutes}</p>
        <p className="flyTo">
          <span className="date">20 aug, tur</span>
          <span className="time">19:45</span>
        </p>
      </div>
      <div className="transfer">
        <div className="transfer__line">
            <div className="transfer__count">1 transfer</div>
        </div>
        
        
      </div>
      <div className="companyName">
        <p className="companyName__content">
          Рейс выполняет: { segment.airline.caption}
        </p>
      </div>
    </div>
  );
};
export default Segment;
