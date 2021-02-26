import FilterPanel from '../filter-panel';
import Ticket from '../ticket';
import './app.css';

const App = () => {
  return (
    <div className="app__block">
      <FilterPanel className="filterBlock"/>
      <Ticket/>
    </div>
  )
}

export default App;
