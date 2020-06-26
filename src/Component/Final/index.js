import React from 'react';
import './index.css';
import Card from '../Card/index';
//import { FiInbox } from "react-icons/fi";
//import { TiTickOutline } from "react-icons/ti";

const Final= () =>{
    const course_data=[
        {
            course_name:"ASP.NET",
            course_title:"A Comparison of Microsoft Web Technologies0",
            rating:4,
            views:285,
            status:"Pending Approval"},
        {
            course_name:"ASP.NET",
            course_title:"A Comparison of Microsoft Web Technologies1",
            rating:4,
            views:285,
            status:"Draft"},

       {
            course_name:"ASP.NET",
            course_title:"A Comparison of Microsoft Web Technologies2",
            rating:4,
            views:285,
            status:"Published"},   
       {
            course_name:"ASP.NET",
            course_title:"A Comparison of Microsoft Web Technologies3",
            rating:4,
            views:285,
            status:"Published"},  
       {
            course_name:"ASP.NET",
            course_title:"A Comparison of Microsoft Web Technologies4",
            rating:4,
            views:285,
            status:"Published"},           
       {
             course_name:"ASP.NET",
             course_title:"A Comparison of Microsoft Web Technologies5",
             rating:3,
             views:285,
             status:"Published"},
       {
             course_name:"ASP.NET",
             course_title:"A Comparison of Microsoft Web Technologies6",
             rating:4,
             views:285,
             status:"Published"},  
             
       {
            course_name:"ASP.NET",
            course_title:"A Comparison of Microsoft Web Technologies7",
            rating:2,
            views:285,
            status:"Published"},     
    ]  
    return(
        <div className="final-block">
            { course_data.map((e,i) => ( <Card  no={i} c_name={e.course_name} c_title={e.course_title} rating={e.rating} view={e.views} status={e.status}/> ) ) }
        </div>
    );
};

export default Final;


/* {
        icon:<FiInbox/>,
        status:"Pending Approval" },
        {
        status:"Draft" },
        {
        icon:<TiTickOutline/>,
        status:"Pending Approval" }
 <Card  no='0' icon={data[0].icon}  status={data[0].status}/>
            <Card  no='1' icon={data[0].icon}  status={data[1].status}/>
            <Card  no='2' icon={data[2].icon}  status={data[2].status}/>
            <Card  no='3' icon={data[2].icon}  status={data[2].status}/>
            <Card  no='4' icon={data[2].icon}  status={data[2].status}/>
            <Card  no='5' icon={data[2].icon}  status={data[2].status}/>
            <Card  no='6' icon={data[2].icon}  status={data[2].status}/>
            <Card  no='7' icon={data[2].icon}  status={data[2].status}/>


  */      