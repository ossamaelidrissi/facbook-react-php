import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import axios from 'axios'
import './MessageSender.scss'
import { Videocam, PhotoLibrary, InsertEmoticon, FormatListNumbered} from '@material-ui/icons';
import {useForm} from 'react-hook-form';

 export default function  MessageSender() {

    const { register , handleSubmit ,  formState:{errors}  } = useForm();


    async function submit(data) {
        
        await axios.post("http://localhost:7882/Facebook-data/Controllers/API/addpost.php",data).then(result => console.log(result.data))
        document.querySelector(".message__sender__top__input").value = ""
        document.querySelector(".url").value = ""
    }

    const [input , setInput] = useState([]);
    const [image , setImage] = useState([]);

    return (
        <div className = "message__sender">
            <div className="message__sender__top">
                <Avatar src = ""/>
                <form onSubmit = {handleSubmit(submit)} method = "post">
                    <input  className = "message__sender__top__input" 
                        placeholder = "What's in your mind, Ossama?" {...register('message',{required:true,maxLength:2000})} />
                    <input placeholder = "image URL (optional )"  {...register('url',{required:true,maxLength:2000})} 
                    className = "url"  />
                    <button type="submit"> Hidden submit </button>
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

