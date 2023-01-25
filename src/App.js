import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };
  return (
    <Router>
      <Navbar
        title="TextUtility"
        AboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3"></div> {/* to add space between alert and heading*/}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TextForm
                showAlert={showAlert}
                heading="Enter the text below To Analyze.."
                mode={mode}
              />
            </>
          }
        />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
