
import './App.css';
import PropEx from './components/PropEx';
import Linked from './Linked'

import Navbar from './Navbar';

function App() {
  const example = [
    {
      id : 1,
      name : 'Abhishek D',
    },
  ];
  return (
    <div>
      <Navbar />
      <Linked />
      <PropEx name = {example[0].name}></PropEx>
    </div>
  );
}

export default App;
