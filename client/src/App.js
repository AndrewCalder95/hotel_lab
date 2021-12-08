import './App.css';
import { useState, useEffect} from "react";
import BookingContainer from './containers/BookingContainer';


function App() {

    return (
        <>
        <header>
            <h1>
            <i class="fas fa-bed"></i> Hotel Management System
            </h1>
        </header>
            <BookingContainer/>
        <footer>
            <p>Copyright &copy; Hotels'R'Us</p>
        </footer>
        </>
    )
}

export default App;
