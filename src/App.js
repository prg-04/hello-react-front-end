import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Greetings from './components/Greetings';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/greetings" element={<Greetings />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
