import React from 'react';
import {MDBCard,MDBCardTitle, MDBCardText,MDBCardImage} from 'mdb-react-ui-kit'
import {FaInfo} from 'react-icons/fa'
import {ImUsers,ImCart} from 'react-icons/im'

const Services = () => {
    return (
        <div className='services pt-5' id='seviceSection'>
             <MDBCard className='py-5 px-0 m-0 col-12 d-flex align-items-center justify-content-center flex-column' style={{width:"100%",background:"transparent"}}>
             <MDBCardTitle className="mx-lg-4 mx-0 text-white" style={{fontSize:"46px",fontWeight:"700"}}>At Your Service</MDBCardTitle>
             <div className='mt-5 d-flex flex-wrap justify-content-center px-5 mx-5 col-12' style={{background:"transparent"}}>
                 <MDBCard className='d-flex align-items-center col-md-4 col-sm-8 col-12' style={{background:"transparent"}}>
                     <FaInfo className="mb-3 text-white" style={{fontSize:"32px",fontWeight:"900"}}/>
                 <MDBCardTitle className="text-white" style={{fontSize:"24px",fontWeight:"700"}}>Info Before Buying</MDBCardTitle>
                 <MDBCardTitle className="text-white" style={{fontSize:"14px",fontWeight:"300",lineHeight:"22px"}}>Purchasing health insurance can seem like a daunting (and often times confusing) process. Here are some tips to help you get the best policy that works for you.</MDBCardTitle>
                 </MDBCard>
                 <MDBCard className='d-flex align-items-center col-md-4 col-sm-8 col-12 mt-md-0 mt-4' style={{background:"transparent"}}>
                 <ImUsers className="mb-3 text-white" style={{fontSize:"32px",fontWeight:"900"}}/>
                 <MDBCardTitle className="text-white" style={{fontSize:"24px",fontWeight:"700"}}>Value Of An Agent</MDBCardTitle>
                 <MDBCardTitle className="text-white" style={{fontSize:"14px",fontWeight:"300",lineHeight:"22px"}}>USA Benefits Group agents have the knowledge and expertise to help you with your insurance needs. We are NOT a call center! Our agents are independent insurance consultants and they are licensed in the states where they conduct business.</MDBCardTitle>
                 </MDBCard>
                 <MDBCard className='d-flex align-items-center col-md-4 col-sm-8 col-12 mt-md-0 mt-4' style={{background:"transparent"}}>
                 <ImCart className="mb-3 text-white" style={{fontSize:"32px",fontWeight:"900"}}/>
                 <MDBCardTitle className="text-white" style={{fontSize:"24px",fontWeight:"700"}}>Product Info</MDBCardTitle>
                 <MDBCardTitle className="text-white" style={{fontSize:"14px",fontWeight:"300",lineHeight:"22px"}}>USA Benefits Group's producers have been providing affordable Health and Life insurance to individuals, the self employed and their families since 1988. We also offer Medicare Supplements, Annuities, Long Term Care, and many other benefits.</MDBCardTitle>
                 </MDBCard>
             </div>
             </MDBCard>
        </div>
    );
}

export default Services;
