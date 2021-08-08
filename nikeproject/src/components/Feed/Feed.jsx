import React , {useState , useEffect , useContext} from 'react';
import axios from 'axios';
import './Feed.scss';
import ReelStory from './ReelStory/ReelStory';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import { DataContext } from '../../API/context';

export default function Feed(){

    const {posts}  = useContext(DataContext);


    return (
        <div className = "feed">
            <ReelStory />
            <MessageSender />
            {posts.map((post => {
                return(
                <Post 
                    profilePic = 'https://picsum.photos/202'
                    message = {post.message}
                    username = {post.user__fullname}
                    image = {post.image}
                />
                )
            }))} 
        </div>
    );
}
