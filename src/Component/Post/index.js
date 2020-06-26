import React from 'react';
import './index.css';


const Post =(props) =>{
    return(
        <div className="block">
            <div className={`first-line-${ props.no }`}>{props.first}</div>
            <div className="trial">
            <div className={`second-line-${ props.no }`}>{props.second}</div>
            <div className="trial1">
            <div className={`third-line-${ props.no }`}>{props.third} {props.third} {props.third} {props.third} {props.forth}</div>
            <div className={`forth-line-${ props.no }`}>{props.fifth}</div>
            </div>
            </div>
           
        </div>





    );
};

export default Post ;

/* <div className={`fifth-line-${ props.no }`}>{props.third}</div> */