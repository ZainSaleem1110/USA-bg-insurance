import React from 'react';
import {MDBCard,MDBCardTitle, MDBCardText,MDBCardImage} from 'mdb-react-ui-kit'
import {FaInfo} from 'react-icons/fa'
import {ImUsers,ImCart} from 'react-icons/im'


const Testimonial = () => {
    return (
        <div className='testimonial py-5 testSection'>
             <MDBCard className='py-5 px-0 m-0 col-12 d-flex align-items-center justify-content-center flex-column' style={{width:"100%",background:"transparent"}}>
             <MDBCardTitle className="mx-lg-4 mx-0 text-white" style={{fontSize:"46px",fontWeight:"700"}}>Testimonials</MDBCardTitle>
             <div className='mt-5 d-flex flex-wrap justify-content-center px-5 mx-md-5 mx-sm-2 mx-0 col-12' style={{background:"transparent"}}>
                <MDBCard className="col-md-10 col-12 px-0 mt-md-5 mt-2 text-white d-flex flex-row" style={{background:"transparent"}}>
                    <div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-mdb-interval="2000">
    <MDBCardTitle className='col-12 px-0' style={{fontSize:"24px",fontWeight:"300",lineHeight:"30px"}}>
                    “Seriously, these Ladies went to bat for me from the minute we got the terrible news about non coverage Thursday night at the 11th hour before my mastectomy. Their relentless calls and emails went up the chain of command at my insurance company and I have no doubt that their drive to help me is part of why things have had a dramatic turnaround this afternoon.
                    So shout out to USA benefits and Jessica Banville Rick Banville and their Team!! Highly recommend!”
                    – Shannon Gunn
                    </MDBCardTitle>
    </div>
    <div class="carousel-item" data-mdb-interval="2000">
    <MDBCardTitle className='col-12 px-0' style={{fontSize:"24px",fontWeight:"300",lineHeight:"30px"}}>
                    “They found us the best coverage at the best price. I highly recommend them!”
                    – Dan B in Spring Hill, FL
                    </MDBCardTitle>
    </div>
    <div class="carousel-item">
    <MDBCardTitle className='col-12 px-0' style={{fontSize:"24px",fontWeight:"300",lineHeight:"30px"}}>
                    “Thank you for making Medicare simple.”
                    – Ron P in Hobbs, NM
                    </MDBCardTitle>
    </div>
  </div>
</div>
                </MDBCard>
             </div>
             </MDBCard>
        </div>
    );
}

export default Testimonial;
