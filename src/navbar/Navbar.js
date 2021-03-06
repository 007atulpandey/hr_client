import React , { useEffect, useContext }from 'react' ;
import M from 'materialize-css'
import "./Nav.css"
import { Link , useHistory  } from 'react-router-dom'; 
import {UserContext} from '../App' 
// import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
const Navbar =()=>{
   
  const { state ,dispatch } = useContext ( UserContext) ;
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,'left');
  }); 
   
  useEffect( ( ) => {
    nav_data( localStorage.getItem('handle'));
    main_data(localStorage.getItem( 'handle'));  
  },[]);
  const history = useHistory (); 

  const nav_data = (flag )=>{ 
      console.log( " this is flag " + flag );
     if( ! flag  || flag == null ) {
       return ( 
         
              <li><Link to="/signin" style={{ "text-decoration" : "none " , "right" :"10px"}}> <i class="material-icons">fingerprint</i> SignIn</Link></li>
        
       );
      }

    if( localStorage.getItem('login') == 'hr'){
      return (
        <>
        <li> <Link to ="/dashboard" ><i class="material-icons">beenhere</i> Dashboard </Link>  </li>
     <li>  <Link to="/addemployee" > <i class="material-icons">add_box</i> Add Employee  </ Link > </li>     
     <li>  <Link to="/search" > <i class="material-icons">add_box</i> search  </ Link > </li>     
     <li><Link to ="/leaves" >  <i class="material-icons">chat_bubble</i>  Leaves </Link></li>
     <li><Link to ="/loan" >  <i class="material-icons">chat_bubble</i>  Loan </Link></li>
        <li><Link to ="/bonus" > <i class="material-icons">attach_money</i>Bonus </Link></li>            
     {/* <li><Link to ="/leaves" >  <i class="material-icons">chat_bubble</i>  Attendance </Link></li> */}
        <li><Link to ="/payroll" > <i class="material-icons">attach_money</i> Payroll </Link></li>
        <li><Link to="/candidates"><i class="material-icons">account_circle</i> Candidates</Link></li>
        <li><Link to="/open-attendance"><i class="material-icons">account_circle</i> open attendance</Link></li>
        <li><button onClick = { ()=>{ localStorage.clear() ; history.push('/signin') ; dispatch({type:"CLEAR"})} }>     Logout</button></li>        </>

      );
    }
     return ( 
      <div >
     <li> <Link to ="/dashboard" ><i class="material-icons">beenhere</i> Dashboard </Link>  </li>
     <li>  <Link to="/:empId/create-leave-req" > <i class="material-icons">attach_money</i> Leave Req.  </ Link > </li>     
     <li>  <Link to="/:empId/create-loan-req" > <i class="material-icons">attach_money</i> Loan Req.  </ Link > </li>     
     <li>  <Link to="/:empId/create-bonus-req" > <i class="material-icons">attach_money</i> Bonus Req.  </ Link > </li>     
     <li><Link to ="/attendance" >  <i class="material-icons">chat_bubble</i>  Attendance </Link></li>
     {/* <li><Link to="badges.html"> <i class="material-icons">do_not_disturb</i> Generate Report</Link></li> */}
     <li><button onClick = { ()=>{ localStorage.clear() ; history.push('/signin') ; dispatch({type:"CLEAR"})} }>  Logout</button></li>
     
     
     </ div >
    );
  }
    
  const main_data= (flag ) =>{

    if ( flag == false || flag == null ) {
      return ( 
        
            <li style  ={ {  "display":"inline"} }><Link to="/signin" style={{ "text-decoration" : "none " , "right" :"10px"}}>  SignIn</Link></li>
        
      )
    }
     return (
         <div > 
           <li><Link style={{ "text-decoration" : "none " , "right" :"10px"}}>{ localStorage.getItem('handle')}</Link></li>
     
           </div > 
     )
   }

    return (
        <div className = "nav-div" > 
          
  <nav className = "navbars">
    <div class="nav-wrapper">
      <Link to ="/" class="" style={{ "text-decoration" : "none "}}>HR_Management</Link>
      <Link style={{ "text-decoration" : "none "}}  data-target="mobile-demo" class="sidenav-trigger">
      <i className="material-icons">menu</i>
     </ Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      {main_data(localStorage.getItem('handle')) }
      </ul>
    </div>
  </nav>

  <ul class="sidenav side-nav" id="mobile-demo">
    {nav_data(localStorage.getItem('handle')) }
  </ul>
          

        </div >

    );

}

export default Navbar 


