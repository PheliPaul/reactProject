import React from 'react';
import './index.css';
import Post from '../Post/index';
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";


const Bio =() =>{

       const data= [
            {      first_line:"COURSES AUTHORED",
                    second_line:"15" },
            {      first_line:"TOPICS AUTHORED",
                    second_line:"Software Development,IT OPS"},
            {      first_line:"TOTAL RATING",
                    second_line:"1480"},

            {      first_line:"AVG COURSE RATINGS",
                    second_line:"4.6",
                    third_line: <FaStar/>,
                    forth_line:<FiStar />,
                    fifth_line:"36 Reviews"}
                ];



              

  /*  var intro={
       biography: "John studied Software Development at UC Berkeley and has more than 15 years
       of experience in software quality assurance.He's been building software and 
       tooling,managing software engineer team many years. When he's not reading
       about the latest trends in computing he spends his time with his wife,
       snowbarding, or running.."};    {this.intro.biography}*/

    return(
        <div className="third-block">
             <div className="title">Bio</div>
            <div className="description">
                       <div className="left-des">John studied Software Development at UC Berkeley and has more than 15 years
       of experience in software quality assurance.He's been building software and 
       tooling,managing software engineer team many years. When he's not reading
       about the latest trends in computing he spends his time with his wife,
       snowbarding, or running..John studied Software Development at UC Berkeley and has more than 15 years
       of experience in software quality assurance.He's been building software and 
       tooling,managing software engineer team many years. When he's not reading
       about the latest trends in computing he spends his time with his wife,
       snowbarding, or running..
                        </div>
                        <div className="right-des">
                            <Post no='0' first={data[0].first_line} second={data[0].second_line}></Post>
                            <Post no='1' first={data[1].first_line} second={data[1].second_line}></Post>
                            <Post no='2' first={data[2].first_line} second={data[2].second_line}></Post>
                            <Post no='3' first={data[3].first_line} second={data[3].second_line} third={data[3].third_line} forth={data[3].forth_line} fifth={data[3].fifth_line}></Post>
                        </div>
            </div>
        </div>
    );
};

export default Bio;