import React  from 'react';
import axios from 'axios';
import { Avatar } from '@material-ui/core'
import {ThumbUp , ChatBubbleOutline , NearMe , ExpandMoreOutlined, AccountCircle} from '@material-ui/icons';
import './Post.scss'

function Post({profilePic , image , username , timestamp , message}) {

    return (
                <div className = "post">
                    <div className="post__top">
                        <Avatar src = {profilePic} className = "post__avatar" />
                        <div className="post__topInfo">
                            <h3>{username}</h3>
                            <p>Time</p>
                        </div>
                    </div>
                    <div className="post__bottom">
                        <p>{message}</p>
                    </div>
                    <div className="post__img">
                        <img src={image} alt="" srcset="" />
                    </div>
                    <div className="post__options">
                        <div className="post__option">
                            <ThumbUp />
                            <p>Like</p>
                        </div>
                        <div className="post__option">
                            <ChatBubbleOutline />
                            <p>Comment</p>
                        </div>
                        <div className="post__option">
                            <NearMe />
                            <p>Share</p>
                        </div>
                        <div className="post__option">
                            <AccountCircle />
                            <ExpandMoreOutlined />
                        </div>
                    </div>
        </div>
    );
}
export default Post;
