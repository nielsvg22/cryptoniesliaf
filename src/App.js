import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Compenents/Header';
import Homepage from "./Pages/Homepage"
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/styles';

function App() {

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a", 
    color: "white", 
    minHeight: "100vh",
  }
}));

const classes = useStyles()

  return (
   <BrowserRouter>
   <div className={classes.App}>
     <Header />
     <Routes>
     <Route path="/" element={<Homepage />} exact />
     <Route path="/coins/:id" element={<CoinPage />} />
     </Routes>
   
   </div>
   </BrowserRouter>
  );
}

export default App;
