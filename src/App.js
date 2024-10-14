import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import BookingPage from "./components/BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
