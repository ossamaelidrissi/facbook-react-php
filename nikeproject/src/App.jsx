import React from 'react'
import './app.scss'
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'
import { Provider } from './API/context';

export default function App() {
    return (
    <Provider>
        <div className = "app">
            <Header image = "http://localhost:7882/Nike/logo.svg"/>
            
            <div className="app__body">
                <SideBar />
                <Feed /> {/* Stories and Posts */}
                <Widgets />
            </div>

        </div>
    </Provider> 
    )
}
