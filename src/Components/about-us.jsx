import React from 'react';
import {MDBCard,MDBCardTitle, MDBCardText,MDBCardImage} from 'mdb-react-ui-kit'
import AboutImg from '../images/about-us.jpg'

const AboutUs = () => {
    return (
      <div className='aboutUsSection'>
        <MDBCard id="about-us" className='w-100 mt-5 py-5 px-0 py-3 m-0 col-12 d-flex justify-content-center align-items-center bg-white'>
        <MDBCard className='py-5 px-0 m-0 col-10 d-flex align-items-center flex-lg-row flex-column' style={{width:"100%",}}>
            <MDBCard className="col-lg-6 col-12 px-0 my-5">
            <MDBCardImage className="img-fluid" src={AboutImg} waves />
            </MDBCard>
            <MDBCard className='col-lg-6 col-12 pl-lg-5 pl-0 pr-0 pr-lg-2 my-2 d-flex justify-content-center'>
            <MDBCardTitle className="mx-lg-4 mx-0" style={{fontSize:"40px",fontWeight:"700",color:"#0f4295"}}>About Us</MDBCardTitle>
          <MDBCardText className="mx-lg-4 mx-0 mt-2" style={{fontSize:"14px",fontWeight:"500",lineHeight:"24px"}}>
          USA Benefits Group is a nationwide network of independent health and life insurance professionals that have been serving individuals, small-business owners and the self-employed since 1988. We offer Health Insurance, Critical Illness, Accident Plans, GAP Plans, Dental Plans, Rx Drug Plans, Life Insurance, Medicare Supplements, Annuities and many other insurance products. USA Benefits Group provides a comprehensive and ongoing training program to it's agents so they are better prepared to serve their clients. Our agents represent you, the client, and they are committed to meeting your needs and matching you up with the most appropriate and affordable insurance solutions.
          </MDBCardText>
          <MDBCard className='d-flex flex-column mt-3'>
                <MDBCard className='d-flex flex-row'>
                <MDBCardTitle className="mr-5 mr-0 ml-lg-4 ml-0" style={{fontSize:"14px",fontWeight:"500",color:"#0f4295"}}> Affordable Prices.</MDBCardTitle>
                <MDBCardTitle className="mx-4" style={{fontSize:"14px",fontWeight:"500",color:"#0f4295"}}>Competent Professionals.</MDBCardTitle>
                </MDBCard>
                <MDBCard className='d-flex flex-row mt-3'>
                <MDBCardTitle className="mr-5 ml-lg-4 ml-0" style={{fontSize:"14px",fontWeight:"500",color:"#0f4295"}}>24/7 Friendly Support.</MDBCardTitle>
                <MDBCardTitle style={{fontSize:"14px",fontWeight:"500",color:"#0f4295"}}>Insurance Payment Without Delay.</MDBCardTitle>
                </MDBCard>
          </MDBCard>
          <a href="#insuranceForm" className="Category-btn d-flex align-items-center justify-content-center rounded mt-md-4 mt-2 py-2 mx-4">Get a Quote {">"}</a>
            </MDBCard>
            </MDBCard>
    </MDBCard>
    </div>
    );
}

export default AboutUs;
