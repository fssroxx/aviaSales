import "./filter.css";
import { useState } from "react";

const FilterPanel = ({
  high,
  low,
  flyTime,
  filterChange,
  aviaCompanyList = [],
}) => {
  const [filter, setFilter] = useState({
    priceFrom: "",
    priceTo: "",
    aviaList: [],
    oneTransfer: false,
    withoutTranfer: false,
  });
  const handleFilter = (key, value) => {
    const filterObj = { ...filter, [key]: value };
    setFilter(filterObj);
  };
  const handleTransfer = (key, value) => {
    const filterObj = { ...filter, [key]: value };
    setFilter(filterObj);
    filterChange(filterObj);
  };

  const handleSelectAvia = (name) => {
    let filterAviaList = filter.aviaList;
    if (filterAviaList.includes(name)) {
      filterAviaList = filterAviaList.filter((item) => item !== name);
    } else {
      filterAviaList.push(name);
    }
    const filterObj = { ...filter, aviaList: filterAviaList };
    setFilter(filterObj);
    filterChange(filterObj);
  };

  return (
    <div className="filterBlock">
      <div className="sort">
        <p className="sort__name">Сортировать</p>
        <label>
          <input name="sort" type="radio" value="toHighPrice" onClick={high} />
          <span>По возрастанию</span>
        </label>
        <label>
          <input name="sort" type="radio" value="toLowPrice" onClick={low} />
          <span>По убыванию</span>
        </label>
        <label>
          <input name="sort" type="radio" value="timeInFly" onClick={flyTime} />
          <span>По времени в пути</span>
        </label>
      </div>
      <div className="filter">
        <p className="filter__name">Фильтровать</p>
        <label>
          <input
            type="checkbox"
            className="filter__oneTransfer"
            checked={filter.oneTransfer}
            onChange={(e) => handleTransfer("oneTransfer", e.target.checked)}
          />
          <span>- 1 пересадка</span>
        </label>
        <label>
          <input
            type="checkbox"
            className="filter__withoutTransfer"
            checked={filter.withoutTransfer}
            onChange={(e) => handleTransfer("withoutTransfer", e.target.checked)}
          />
          <span>- без пересадок</span>
        </label>
      </div>
      <div className="price">
        <p className="price__name">Цена</p>
        <label>
          <span>От </span>
          <input
            type="search"
            placeholder="0"
            className="price__from"
            onChange={(e) => {
              handleFilter("priceFrom", e.target.value);
            }}
            onBlur={() => filterChange(filter)}
            value={filter.priceFrom}
          />
        </label>
        <label>
          <span>До </span>
          <input
            type="search"
            placeholder="1000000"
            className="price__to"
            onChange={(e) => {
              handleFilter("priceTo", e.target.value);
            }}
            onBlur={() => filterChange(filter)}
            value={filter.priceTo}
          />
        </label>
      </div>
      <div className="company">
        <p className="company__name">Авиакомпании</p>
        {aviaCompanyList.length !== 0 &&
          aviaCompanyList.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  className="company__input"
                  checked={filter.aviaList.includes(item.uid)}
                  onChange={() => handleSelectAvia(item.uid)}
                />
                {item.caption}
              </label>
            );
          })}
      </div>
    </div>
  );
};
export default FilterPanel;
