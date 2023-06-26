import { Route, Routes } from "react-router-dom";
import 'react-redux';


import "./styles/App.scss";
import Home from "./pages/Home/Home";
import Header from './components/Header'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
