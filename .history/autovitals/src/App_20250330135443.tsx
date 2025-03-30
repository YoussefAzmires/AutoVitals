import { useState } from 'react'
import './App.css'
import Header from "./components/Header";


function App() {
  return (  // You need to return JSX inside the function
      <div>
          <Header />  {/* This is how you call your Navbar */}
          <p>Welcome to my website!</p>
      </div>
  );
}


export default App
