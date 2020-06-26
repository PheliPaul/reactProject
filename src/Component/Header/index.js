import React, { useState , useEffect} from 'react';
import './index.css';
import { MdTextsms } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import { FaUserAlt } from "react-icons/fa";
import gama from '../../AssetsImage/gama.png';
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoX } from "react-icons/go";
//import Course1 from '../../AddCourse/Course1';
import ReactTooltip from 'react-tooltip';
//import ModalLogout from "./ModalLogout";
import Modal from 'react-modal';
//import { Select } from 'semantic-ui-react';
import DropDown from "../../ToolTip";

 const dropDown =()=>{
   
    console.log("kikos")
      return <DropDown/>
        
     
};   

 const Header =() =>{
    const [show,setShow] = useState(false);
    const [course,setCourse] =useState('Courses');
   // const [view,setView] =useState(false);

    const[showDropDown,setShowDropDown]=useState(false);
console.log(course);
    
    return(
        <div className="header">
      

            <div className="logo"><img src={gama} alt="logo"/></div>
            <div className="search">
                        <button className="search-small">
    <span  id="nicon" onClick={()=>setShowDropDown(true)}><FaAngleDown /> </span>
                            <span id="nname">{course}</span>
                               
                            
          
                        </button>
                        <form className="search-big">
                            <FaSearch span id="micon"/>
                            <input id="mname" placeholder="Find a subject, courses, group..."></input>
                        </form>
                        
            </div>
            <div className="right-header">
                        <div className="message"><MdTextsms /></div>
                        <div className="bell"><MdNotifications /></div>
                        <div className="profile" onClick={()=>setShow(true)} data-tip data-for="profile"><FaUserAlt /></div>
                        <ReactTooltip id="profile">Click On Me</ReactTooltip>
                                    
             </div>   
                   <Modal className="lets_try" isOpen={show} onRequestClose={()=>setShow(false)} >
                       <div className="exit" onClick={()=>setShow(false)}><GoX/></div>
                        <div className="logout_text">
                            
                            <h1>Do you want to logout?</h1>
                            <div className="logout_option">
                                <button>Yes</button>
                                <button>No</button>
                            </div>
                          
                        </div>
                    </Modal>  

                     {showDropDown && <div className="testing">testing</div>}             
        </div>

       
    )
};

/*const LogOut= (p) =>{
    console.log(p);
    
    return (
    <div>
       
       hio
    </div>);
} */


export default Header;



/*<img src={gama} alt="logo"/>

<FaSearch span id="micon"/><span id="mname"></span>


 <ReactTooltip className="logout" id="profile" clickable="true"><div><div className="logout_text">do you want to log out?</div><div className="logout_option"><button>yes?</button><button>no?</button></div></div></ReactTooltip>
 onSelect={()=>setCourse('Short Term Course')}
 <ModalLogout x="show"/>
<button className="close_model_button" onClick={()=>setShow(false)}>close</button>



{showDropDown && <div className="ffromm">
        <select id="abg" name="op">         
            <option value="Long Term Course" onSelect={()=>setCourse('Long Term Course')}>Long Term Course</option>
            <option value="Short Term Course"onSelect={()=>setCourse('Short Term Course')}>Short Term Course</option>
            <option value="Monthly Course">Monthly Course</option>
            <option value="Quarterly Course">Quarterly Course</option>
            <option value="Daily Course">Daily Course</option>
        </select>
    </div> }








 <Modal className="fformm">
        <select>
                        
            <option>Long Term Course</option>
            <option>Short Term Course</option>
            <option>Monthly Course</option>
            <option>Quaterly Course</option>
            <option>Daily Course</option>
            </select>

            </Modal>



 {showDropDown && <div className="ffromm">
        <ul id="abg" name="op">         
            <li value="Long Term Course" onSelect={()=>setCourse('Long Term Course')}>Long Term Course</li>
            <li value="Short Term Course"onSelect={()=>setCourse('Short Term Course')}>Short Term Course</li>
            <li value="Monthly Course">Monthly Course</li>
            <li value="Quarterly Course">Quarterly Course</li>
            <li value="Daily Course">Daily Course</li>
        </ul>
    </div> }            


 {showDropDown && <div>
        <ul  className="ffromm">         
            <li value="Long Term Course" onSelect={()=>setCourse('Long Term Course')}>Long Term Course</li>
            <li value="Short Term Course"onSelect={()=>setCourse('Short Term Course')}>Short Term Course</li>
            <li value="Monthly Course">Monthly Course</li>
            <li value="Quarterly Course">Quarterly Course</li>
            <li value="Daily Course">Daily Course</li>
        </ul>
    </div> }


 */