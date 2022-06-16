import React from 'react';
import {MDBCard,MDBCardTitle, MDBCardText,MDBCardImage} from 'mdb-react-ui-kit'

const Statement = () => {
    return (
        <div className='text-white pb-5 d-flex justify-content-center StateSection' style={{background:"rgb(26, 35, 126)"}}>
            <MDBCard className='py-5 px-4 m-0 col-11 d-flex align-items-center justify-content-center flex-column' style={{width:"100%",background:"transparent"}}>
             <MDBCardTitle className="mx-lg-4 mx-0" style={{fontSize:"40px",fontWeight:"700"}}>Our Mission Statement</MDBCardTitle>
             <MDBCardTitle className="mt-4" style={{fontSize:"25px",fontWeight:"500",lineHeight:"42px"}}>
             USA Benefits Group is a nationwide insurance agency dedicated to the principles of service, integrity, professionalism and diversity. We provide an extensive range of insurance products and pledge to honor our commitment to our producers, clients and carriers by holding ourselves to the highest ethical standards. Everything that we do is designed to insure that our representatives present quality products with a Servant’s Heart and a goal of exceeding expectations.
             </MDBCardTitle>
             </MDBCard>
        </div>
    );
}

export default Statement;
