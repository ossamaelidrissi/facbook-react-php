import React from 'react';
import './Feed.scss';
import ReelStory from './ReelStory/ReelStory';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

export default function Feed(){
    return (
        <div className = "feed">
            <ReelStory />
            <MessageSender />
            <Post 
                profilePic = 'https://picsum.photos/202'
                message = 'Wow this work'
                username = 'Ossama'
                image = 'https://picsum.photos/200'
            />
            <Post 
            profilePic = 'https://picsum.photos/201'
            message = 'Wow this work'
            username = 'Mohamed'
            image = 'https://picsum.photos/205'
            />
            <Post 
            profilePic = 'https://picsum.photos/203'
            message = 'Wow this work'
            username = 'Amine'
            image = 'https://picsum.photos/209'
            />
        </div>
    );
}
