import React,{useState} from 'react';
import {MDBCard,MDBCardTitle,MDBCardImage} from 'mdb-react-ui-kit'
import Team02 from '../images/team (2).jpg'
import Team03 from '../images/team (3).jpg'
import Team04 from '../images/team (4).jpg'
import Team06 from '../images/team (6).jpg'
import Team01 from '../images/team (1).jpg'
import Team05 from '../images/team (5).jpg'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {FaUserAlt} from 'react-icons/fa'

const Ourteam = () => {
    const teamMember=[
        {Img:Team06,Name:"Rick Banville",Post:"Agency Owner & CEO",Phone:"(352) 835-7405",Mail:"rick@usabg.com"},
        {Img:Team02,Name:"Jessica Banville",Post:"Agency Owner and President",Phone:"(352) 835-7405",Mail:"jessica@usabg.com"},
        {Img:Team03,Name:"John Ruhlman",Post:"Agency Builder",Phone:"(352) 835-7405",Mail:"john@usabg.com"},
        {Img:Team04,Name:"Keith Stockett",Post:"Agency Builder",Phone:"(352) 835-7405",Mail:"keith@theproducersgroup.org"},
        {Img:Team01,Name:"Doug Frankel",Post:"Agency Builder",Phone:"(352) 835-7405",Mail:"doug@usabg.com"},
        {Img:Team05,Name:"Shane Ring",Post:"Agency Builder",Phone:"(352) 835-7405",Mail:"jsring@ringbenefits.com"},
    ]
    const [team,useTeam]=useState(teamMember)
    return (
        <div className='bg-white pt-5 teamSection'>
         <MDBCard className='py-5 px-0 m-0 col-12 d-flex align-items-center justify-content-center flex-column' style={{width:"100%",background:"transparent"}}>
             <MDBCardTitle className="px-lg-4 px-2 mx-0 mx-0" style={{fontSize:"46px",fontWeight:"700",color:"#0f4295"}}>Meet Our Executive Team</MDBCardTitle>
             <div className='mt-5 mx-0 px-2 col-12 d-flex flex-wrap justify-content-sm-start justify-content-center' style={{background:"transparent",width:"100%"}}>
                 {
                     team.map(e=>{
                         return <MDBCard className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 d-flex align-items-center" style={{height:"300px"}}>
                             <MDBCard className='teamCard position-relative col-12 p-0' style={{height:"300px"}}>
                         <MDBCardImage className="img-fluid w-100 h-100 border border-dark" src={e.Img} waves />
                         <MDBCard className="position-absolute teamDetail d-flex justify-content-center align-items-center w-100 h-100 " style={{top:"0px",left:"0px"}}>
                             <MDBCardTitle className="teamTitle pb-3" style={{borderBottom:"2px solid white"}}>{e.Name}</MDBCardTitle>
                             <MDBCardTitle className="teamTitle mb-5">{e.Post}</MDBCardTitle>
                             <MDBCardTitle className="teamTitle" style={{fontSize:"14px"}}><BsFillTelephoneFill className="mr-3"/>{e.Phone}</MDBCardTitle>
                             <MDBCardTitle className="teamTitle" style={{fontSize:"14px"}}><GrMail className="mr-3"/>{e.Mail}</MDBCardTitle>
                             <MDBCardTitle className="teamTitle" style={{fontSize:"14px"}}><FaUserAlt className="mr-3"/>Bio</MDBCardTitle>
                         </MDBCard>
                         </MDBCard>
                     </MDBCard>
                     })
                 }
            </div>
        </MDBCard>
        </div>
    );
}

export default Ourteam;
