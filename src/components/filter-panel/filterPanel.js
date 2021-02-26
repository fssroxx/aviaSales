import './filter.css';

const FilterPanel = () => {
    return (
        <div className="filterBlock">
            <div className="sort">
                <p className="sort__name">Сортировать</p>
                <label>
                    <input type="radio" className="sort__high" />
                    <span>По возрастанию</span></label>
                <label>
                    <input type="radio" className="sort__low" />
                    <span>По убыванию</span>
                </label>
                <label>
                    <input type="radio" className="sort__timeInRoad" />
                    <span>По времени в пути</span>
                </label> 
            </div>
            <div className="filter">
                <p className="filter__name">Фильтровать</p>
                <label>
                    <input type="checkbox" className="filter__oneTransfer" />
                    <span>
                        - 1 пересадка
                    </span>
                </label>
                <label>
                    <input type="checkbox" className="filter__withoutTransfer" />
                    <span>
                        - без пересадок
                    </span>
                </label>

                
            </div>
            <div className="price">
                <p className="price__name">Цена</p>
                <label>
                    <span>От  </span>
                    <input type="search" placeholder="0" className="price__from" />
                </label>
                <label>
                    <span>До </span>
                    <input type="search" placeholder="1000000" className="price__to" />
                </label>
                
            </div>
            <div className="company">
                <p className="company__name">Авиакомпании</p>
                <input type="checkbox" className="company__LOT"></input>
                <input type="checkbox" className="company__AERO">
                </input>
            </div>
        </div>
    )
}
export default FilterPanel;