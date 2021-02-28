import FilterPanel from "../filter-panel";
import Ticket from "../ticket";
import ticket from "../../flights_max.json";
import { useState, useEffect } from "react";
import "./app.css";

const App = () => {
  const [sortItems, setSortItems] = useState(ticket.result.flights);
  const [aviaCompanyList, setAviaCompanyList] = useState([]);

  const high = () => {
    const toHighPrice = [...sortItems].sort((prev, next) => {
      return +prev.flight.price.total.amount - +next.flight.price.total.amount;
    });
    setSortItems(toHighPrice);
  };

  const low = () => {
    const toLowPrice = [...sortItems].sort((prev, next) => {
      return +next.flight.price.total.amount - +prev.flight.price.total.amount;
    });
    setSortItems(toLowPrice);
  };

  const flyTime = () => {
    const timeInFly = [...sortItems].sort((prev, next) => {
      return (
        prev.flight.legs.reduce((a, b) => a + b.duration, 0) -
        next.flight.legs.reduce((a, b) => a + b.duration, 0)
      );
    });
    setSortItems(timeInFly);
  };

  useEffect(() => {
    const aviaCompanyList = [];
    ticket.result.flights.forEach((element) => {
      if (
        !aviaCompanyList.find((item) => item.uid === element.flight.carrier.uid)
      ) {
        aviaCompanyList.push(element.flight.carrier);
      }
    });

    setAviaCompanyList(aviaCompanyList);
  }, [ticket]);

  const filterChange = (filter) => {
    console.log(filter);
    let newArr = ticket.result.flights;
    if (filter.priceFrom !== "") {
      newArr = newArr.filter(
        (item) => +item.flight.price.total.amount > +filter.priceFrom
      );
    }
    if (filter.priceTo !== "") {
      newArr = newArr.filter(
        (item) => +item.flight.price.total.amount < +filter.priceTo
      );
    }
    if (filter.aviaList.length !== 0) {
      newArr = newArr.filter((item) =>
        filter.aviaList.includes(item.flight.carrier.uid)
      );
    }
    if (filter.oneTransfer) {
      newArr = newArr.filter((item) =>
        item.flight.legs.some((item) =>
          item.segments.some((segment) => segment.starting)
        )
      );
    }
    if (filter.withoutTransfer) {
      newArr = newArr.filter((item) =>
        item.flight.legs.every((item) =>
          item.segments.every((segment) => segment.starting === false)
        )
      );
    }
    setSortItems(newArr);
  };

  return (
    <div className="app__block">
      <FilterPanel
        className="filterBlock"
        high={high}
        low={low}
        flyTime={flyTime}
        filterChange={filterChange}
        aviaCompanyList={aviaCompanyList}
      />
      <Ticket ticket={sortItems} />
    </div>
  );
};

export default App;
