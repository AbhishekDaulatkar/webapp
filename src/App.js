
import './App.css';
import PropEx from './components/PropEx';
import Linked from './Linked'

import Navbar from './Navbar';

function App() {
  const example = [
    {
      id : 1,
      name : 'Abhishek D',
      date : new Date(2022,3,7),
    },
  ];
  return (
    <div>
      <Navbar />
      <Linked />
      <PropEx name = {example[0].name}
              date = {example[0].date}/>
    </div>
  );
}

export default App;
