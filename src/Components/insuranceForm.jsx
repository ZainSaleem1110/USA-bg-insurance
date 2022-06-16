import React from 'react';
import {MDBCard,MDBCardTitle, MDBCardText,MDBCardImage,MDBBtn} from 'mdb-react-ui-kit'
import {FaInfo} from 'react-icons/fa'
import {ImUsers,ImCart} from 'react-icons/im'
import Captcha from '../images/Captcha.png'

const Insuranceform = () => {
    return (
        <div id="insuranceForm" className="insuranceForm d-flex justify-content-end formSection">
            <MDBCard className='col-lg-7 col-md-9 col-12 px-sm-5 px-2 py-5 ' style={{background:"transparent"}}>
                <MDBCard className='col-12 pt-5' style={{background:"transparent"}}>
                    <MDBCardTitle style={{fontSize:"40px",fontWeight:"700" ,color:"#1a237e"}}>Health Insurance Quote</MDBCardTitle>
                    <MDBCard className='mt-5' style={{background:"transparent"}}>
                    <MDBCardTitle style={{fontSize:"16px",fontWeight:"700" ,color:"#1a237e"}}>Personal information:</MDBCardTitle>
                    <div className='d-flex flex-wrap mt-2'>
                        <div className='col-lg-6 col-12 pl-0 pr-lg-3 pr-0'>
                    <select className="browser-default custom-select">
                        <option>Do You Smoke?</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                    </div>
                    <div className='col-lg-6 col-12 pl-lg-3 pl-0 pr-0 mt-lg-0 mt-4'>
                    <select className="browser-default custom-select">
                        <option>Your age</option>
                        <option value="1">18 - 20</option>
                        <option value="2">21 - 25</option>
                        <option value="3">26 - 36</option>
                        <option value="4">37 - 48</option>
                        <option value="5">49 - 55</option>
                        <option value="6">Over 55</option>
                    </select>
                    </div>
                    </div>
                    <select className="browser-default custom-select mt-4 helpInp">
                        <option>How can we help you?</option>
                        <option value="1">I have health insurance but don't like it</option>
                        <option value="2">I don't have any health insurance and need it</option>
                        <option value="2">I'm an agent interested in a career,Budget</option>
                    </select>
                    </MDBCard>
                    <MDBCard className='mt-5' style={{background:"transparent"}}>
                    <MDBCardTitle style={{fontSize:"16px",fontWeight:"700" ,color:"#1a237e"}}>Contact details:</MDBCardTitle>
                    <div className='d-flex flex-wrap mt-2'>
                        <div className='col-lg-6 col-12 pl-0 pr-lg-3 pr-0'>
                        <input type="name" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-lg-6 col-12 pr-0 pl-lg-3 pl-0 mt-lg-0 mt-4">
                        <input type="name" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="col-lg-6 col-12 pl-0 pr-lg-3 pr-0 mt-4">
                        <input type="name" className="form-control " placeholder="E-Mail" />
                        </div>
                        <div className="col-lg-6 col-12 pr-0 pl-lg-3 pl-0 mt-4">
                        <input type="name" className="form-control " placeholder="Zip" />
                        </div>
                    </div>
                    </MDBCard>
                    <div className='d-flex flex-wrap justify-content-center mt-4'>
                        <div className="col-sm-6 col-12 pl-0 pr-sm-3 pr-0 m-0">
                            <div className='col-12 aparcha border rounded d-flex align-items-center justify-content-between bg-white'>
                                <div className='d-flex align-items-center'>
                                <input type="checkbox" name="" id="" className='captchaInp'/>
                                <MDBCardText className='ml-3'>I'm not a robot</MDBCardText>
                                </div>
                            <div className='d-flex flex-column align-items-end'>
                                <MDBCardImage className='w-75 h-75' src={Captcha} waves />
                                <MDBCardText className='mt-1' style={{fontSize:"9px"}}>reCAPTCHA <span className='d-block' style={{fontSize:"8px"}}>Privacy . Terms</span></MDBCardText>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-12 pr-sm-1 pl-sm-2 pl-0 pr-0 mt-sm-0 mt-4'>
                        <button className="col-12 btn">Get a Quote {">"}</button>
                        </div>
                    </div>
                </MDBCard>
            </MDBCard>
        </div>
    );
}

export default Insuranceform;
