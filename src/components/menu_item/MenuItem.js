import React from "react";
import './menuItem.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = (props) => {
    const {title, imageUrl, size, history, linkURL, match} = props;
    return(
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkURL}`)}>
            <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

// withRouter give us excess to history,match,linkURL in props
export default withRouter(MenuItem);