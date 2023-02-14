import React from "react";
import "./App.css";
import HomeScreen from "./features/HomeScreen/HomeScreen";
import Login from "./features/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
