import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import TinderFooterActions from './components/TinderFooterActions';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards/>
      <TinderFooterActions/>
    </div>
  );
}

export default App;
