import React from 'react';
import './index.css';
/*import cardPhoto from '../../AssetsImage/cardPhoto.jpg'*/
import cardPhoto from '../../AssetsImage/cardPhoto.jpg';
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
//import { TiTickOutline } from "react-icons/Ti";
//import { FiInbox } from "react-icons/fi";


const Card= (props) =>{
    let icon;
    //icon=props.status==="Published" ? "TiTickOutline" : "FiInbox" ;
    icon=props.status==="Published" ? "check" : "inbox" ;
    //console.log(icon);
    let ratings=[];let ratings2=[];
    for(let i=0; i< props.rating; i++){
        ratings.push(i);
       
    } console.log(ratings);
    for(let i=0; i< 5 - props.rating; i++){
        ratings2.push(i);
       
    }
    return(
        <div className="card-block">
            <div className="card-block1"><img src={cardPhoto} alt="jkjk"></img></div>
            <div className="card-block2">
                <div className="card-block2-1">
                    <div className="card-block2-1-first">{props.c_name}</div>
                    <div className="card-block2-1-second">{props.c_title}</div>
                </div>
                <div className="gray-marker"></div>
                <div className="card-block2-2">
                <div className="card-block2-2-first">
                    <div className="star">
                        <div> { ratings.map(e=>(<FaStar/>       ))}
                        { ratings2.map(e=>(<FiStar/>      ))}</div>
                        <span className="rating">{props.rating}</span>
                    </div>
                    <div className="eye">
                        <AiOutlineEye/>
                        <span id="no">{props.view}</span>
                    </div> 
                </div>
                <div className="card-block2-2-second">
                <div className={`last-icon-${props.no}`}><i className={`${icon} icon`}></i></div>
                    <div className="line">{props.status}</div>
                </div>
            </div> 
            </div>

        </div>
    );
};

export default Card;
/* <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />import { AiFillStar } from "react-icons/Ai"; import { GoCalendar } from "react-icons/go";
if(props.status==="Published"){
         icon="TiTickOutline";
        console.log(icon);
    }
    if(props.status==="Pending Approval"){
         icon="FiInbox";
        console.log(icon);
    }

<i className="inbox icon"></i>


*/