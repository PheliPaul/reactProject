import React from 'react';
import './index.css';

import pikachu from '../../AssetsImage/pikachu.jpg'; 
import ReactTooltip from 'react-tooltip';

const Author =() =>{
    return(
        <div className="second-block">
           
            <div className="photo"><img src={pikachu} alt="pika"></img></div>
            <div className="intro">
                <div className="name">Alison Becker</div>
                <div className="designation"><span id="author-top-gap" data-tip data-for="intro">Author</span></div>
                <ReactTooltip className="intro_design"  data="dark"  id="intro" effect="solid"><span>The Author was born in 1920 in China</span></ReactTooltip>
            </div>
        </div>
    );
};

export default Author;