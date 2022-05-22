import logo from './logo.svg';
import './App.css';
import Data from './componets/Data';
import data from "./data/item.json"
function App() {
  return (
    <div className='main'>
      <Data data={data}/>
    </div>
  );
}

export default App;
