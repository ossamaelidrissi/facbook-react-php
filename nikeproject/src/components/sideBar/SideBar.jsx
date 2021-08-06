import React from 'react';
import SideBarRow from './SideBarRow/SideBarRow';

import{ RestoreOutlined, EventNote , PlayCircleOutlineOutlined , LocalHospital , People , Chat , Storefront , VideoLibrary, EmojiFlags , ExpandMoreOutlined, ExpandMore, EmojiFlagsOutlined} from "@material-ui/icons"
import './SideBar.scss';

export default function SideBar(){
    return (
        <div className = "SideBar">
            <SideBarRow src = "#" title = "Ossama Elidrissi" />
            <SideBarRow Icon = {LocalHospital} title = "COVID-19 Information Center"/>
            <SideBarRow Icon = {EmojiFlags} title = "Pages"/>
            <SideBarRow Icon = {People} title = "Friends"/>
            <SideBarRow Icon = {Chat} title = "Messenger"/>
            <SideBarRow Icon = {Storefront} title = "Marketplace"/>
            <SideBarRow Icon = {PlayCircleOutlineOutlined} title = "Watch"/>
            <SideBarRow Icon = {VideoLibrary} title = "Videos"/>
            <SideBarRow Icon = {EventNote} title = "Events"/>
            <SideBarRow Icon = {RestoreOutlined} title = "Memories"/>
            <SideBarRow Icon = {ExpandMoreOutlined} title = "See more"/>
        </div>
    );
}
