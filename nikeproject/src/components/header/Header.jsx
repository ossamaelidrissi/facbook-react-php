import React from 'react';
import { Search , Home, Flag , SubscriptionsOutlined , StorefrontOutlined , SupervisedUserCircle , Add , Forum , NotificationsActive , ExpandMore} from '@material-ui/icons';
import { Avatar, IconButton  } from '@material-ui/core';

import './Header.scss'

export default function Header(props){
    return (
        <div className = "header">
            <div className="header__left">
                <img src={props.image} alt="" />
                <div className="header__left__input">   
                    <Search />
                    <input type="text" name="" id="" placeholder = "Search Facbook" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__middle__option header__option__active">
                    <Home fontSize ="large" />
                </div>
                <div className="header__middle__option">
                    <Flag fontSize ="large" />
                </div>
                <div className="header__middle__option">
                    <SubscriptionsOutlined fontSize ="large" />
                </div>
                <div className="header__middle__option">
                    <StorefrontOutlined fontSize ="large" />
                </div>
                <div className="header__middle__option">
                    <SupervisedUserCircle fontSize ="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__right__info">
                    <IconButton>
                        <Avatar />
                        <h5>Ossama</h5>
                    </IconButton>
                </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>

        </div>
    );
}
