import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './pages/Home/Home';
import { Teams } from './pages/Teams/Teams';
import { Tournaments } from './pages/Tournaments/Tournaments';
import { Rankings } from './pages/Rankings/Rankings';
import { Games } from './pages/Games/Games';
import { News } from './pages/News/News';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { NotFound } from './pages/NotFound/NotFound';
import './styles/global.css';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/games" element={<Games />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
