import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Greetings from './components/greetings/Greetings';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <Greetings />
            <Skills />
            <Works />
            <Contacts />
            <Footer />
        </div>
    );
}


export default App;
