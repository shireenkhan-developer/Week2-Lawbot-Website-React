import "./App.css";
import Navbar from "./Components/navbar";
import About from "./Components/AboutSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Users from "./Components/UsersList";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <h1 className="display-3 text-center" id="sec2">
        USERS
      </h1>
      <Users />
      <hr></hr>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
