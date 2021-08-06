import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.scss'
import { Videocam, PhotoLibrary, InsertEmoticon} from '@material-ui/icons';

 export default function  MessageSender() {

    const handleSubmit = e => {
        e.preventDefault();
        setImage("");
        setInput("");
    }
    const [input , setInput] = useState('');
    const [image , setImage] = useState('');
    return (
        <div className = "message__sender">
            <div className="message__sender__top">
                <Avatar src = ""/>
                <form>
                    <input value = {input} onChange = {e => setInput(e.target.value)} className = "message__sender__top__input" placeholder = "What's in your mind, Ossama?" />   
                    <input value = {image} onChange = {e => setImage(e.target.value)}  placeholder = "image URL (optional )" />
                    <button type="submit" onClick = {handleSubmit}> Hidden submit </button>
                </form>
            </div>
            <div className="message__sender__bottom">
                <div className="message__sender__bottom__option">
                    <Videocam style = {{color :"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="message__sender__bottom__option">
                    <PhotoLibrary style = {{color :"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="message__sender__bottom__option">
                    <InsertEmoticon style = {{color :"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

