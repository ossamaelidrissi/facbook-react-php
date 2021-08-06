import React from 'react'
import './app.scss'
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'

export default function App() {
    return (
        <div className = "app">
            <Header image = "http://localhost:7882/Nike/logo.svg"/>
            
            <div className="app__body">
                <SideBar />
                <Feed /> {/* Stories and Posts */}
                <Widgets />
            </div>

        </div>
    )
}
