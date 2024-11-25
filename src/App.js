import './App.css';
import FloatIsland from './components/FloatIsland.jsx';
import Header from './components/Header.jsx';
import Banner from './components/Banner/index.jsx';
function App() {
  return (
    <div className="App bg-black">
      <Header/>
      <Banner/>
      <FloatIsland/>
    </div>
  );
}

export default App;
