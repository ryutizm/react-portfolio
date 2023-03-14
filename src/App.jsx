import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
