import React from 'react';
import {MDBCard,MDBCardTitle, MDBCardText,MDBCardImage} from 'mdb-react-ui-kit'
import {AiOutlineRight,AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'

const Footer = () => {
    return (
        <>
        <div className="footer d-flex flex-wrap justify-content-lg-center justify-content-md-start  justify-content-center px-lg-0 px-md-5 px-0 pb-5 FooterSection">
            <MDBCard className="col-lg-4 col-md-6 col-12 pt-5 pr-md-5 pr-0" style={{background:"transparent"}}>
                <MDBCardTitle className='text-white mt-4' style={{fontSize:"25px",fontWeight:"700"}}>
                    USABG
                </MDBCardTitle>
                <MDBCardText className='mt-4' style={{fontSize:"14px",color:"#57738F"}}>
                Our friends and family are our clients, and our clients become our friends and family for life.
                </MDBCardText>
            </MDBCard>
            <MDBCard className="col-lg-3 col-md-6 col-12 pt-5" style={{background:"transparent"}}>
            <MDBCardTitle className='text-white mt-4' style={{fontSize:"16px",fontWeight:"700"}}>
            QUICK LINKS
                </MDBCardTitle>
                <MDBCard className='d-flex flex-md-row flex-column mt-4' style={{background:"transparent"}}>
                    <MDBCard className='' style={{background:"transparent"}}>
                    <a href="" className='footerLinks py-1'><AiOutlineRight className='mr-2' style={{fontSize:"14px"}}/>Home</a>
                    <a href="" className='footerLinks py-1'><AiOutlineRight className='mr-2' style={{fontSize:"14px"}}/>About</a>
                    <a href="" className='footerLinks py-1 '><AiOutlineRight className='mr-2' style={{fontSize:"14px"}}/>Products</a>
                    </MDBCard>
                    <MDBCard className='ml-md-5 ml-0 pt-md-0 pt-3 pl-md-3 pl-0' style={{background:"transparent"}}>
                    <a href="" className='footerLinks py-1'><AiOutlineRight className='mr-2' style={{fontSize:"14px"}}/>Contact</a>
                    <a href="" className='footerLinks py-1'><AiOutlineRight className='mr-2' style={{fontSize:"14px"}}/>Login</a>
                    </MDBCard>
                </MDBCard>
            </MDBCard>
            <MDBCard className="col-lg-4 col-md-6 col-12 pt-5" style={{background:"transparent"}}>
            <MDBCardTitle className='text-white mt-4' style={{fontSize:"16px",fontWeight:"700"}}>
            CONTACT OUR CORPORATE OFFICE
                </MDBCardTitle>
                <a href="" className='footerLinks py-1 mt-4'><BsFillTelephoneFill className='mr-md-4 mr-2' style={{fontSize:"22px",color: "#060c3b"}}/>1 (888) 826-1966</a>
                <a href="" className='footerLinks py-1'><AiOutlineMail className='mr-md-4 mr-2' style={{fontSize:"22px",color: "#060c3b"}}/>support@Broker.com</a>
                <a href="" className='footerLinks py-1'><HiLocationMarker className='mr-md-4 mr-2' style={{fontSize:"22px",color: "#060c3b"}}/>404 Suzanne Dr Spring Hill, FL 34607</a>
            </MDBCard>
        </div>
        <div className='pt-5 px-md-5 px-1 footer Footer2Section'>
            <div className='border-top pb-5'>
            <MDBCardText className='footerLinks mt-4'>2022 © USABG. Privacy Policy</MDBCardText>
            </div>
        </div>
        </>
    );
}

export default Footer;
