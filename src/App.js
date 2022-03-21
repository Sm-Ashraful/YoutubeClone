import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import RecomendedVideo from "./RecomendedVideo";
import SearchPage from "./SearchPage";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
        
            <Route path="/search/:searchTerm" element={<div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>} />
            <Route
              path="/" 
              element={
                <div className="app__page">
                  <Sidebar />
                  <RecomendedVideo /> 
                </div> 
              } 
            />
        </Routes>
      </>
    </div>
  );
}

export default App;
