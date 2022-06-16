import React from 'react';
import { MDBBtn, MDBCard, MDBCardImage, MDBCol,MDBCardBody,MDBCardTitle ,MDBCardText} from 'mdb-react-ui-kit';
import Blog01 from '../images/blog (1).jpg'
import Blog02 from '../images/blog (2).jpg'

const Blog = () => {
    return (
        
        <div className="col-12 d-flex flex-lg-row flex-column justify-content-lg-around justify-content-start align-items-sm-center align-item-start px-md-5 px-2 my-5 py-5 BlogSection">
            <MDBCard className="col-lg-4 col-6 p-0" style={{background:"lightgray",}}>
            <MDBCard  style={{width:"400px",height:"270px"}}>
            <MDBCardImage className="img-fluid h-100 w-100" src={Blog02} waves />
            </MDBCard>
            <MDBCard className='pt-3 col-12 d-flex justify-content-center align-items-center' style={{background:"lightgray"}}>
                <MDBCardText>USABG Headquarters</MDBCardText>
                <MDBCard style={{fontSize:"14px",fontWeight:"500",color:"gray",background:"lightgray"}}>404 Suzanne Drive.<br/>Spring Hill, FL 34607<br/>Office: 1 (888) 826-1966</MDBCard>
            </MDBCard>
            </MDBCard>
            <MDBCard className="col-lg-4 col-6 mt-lg-0 mt-5 p-0" style={{background:"lightgray",}}>
            <MDBCard  style={{width:"400px",height:"270px"}}>
            <MDBCardImage className="img-fluid h-100 w-100" src={Blog01} waves />
            </MDBCard>
            <MDBCard className='pt-3 d-flex align-items-center justify-content-center' style={{background:"lightgray"}}>
                <MDBCardText style={{fontSize:"14px",fontWeight:"700"}}>USABG Ohio</MDBCardText>
                <MDBCard style={{fontSize:"14px",fontWeight:"500",color:"gray",background:"lightgray"}}>9373 Cincinnati Columbus Rd. <br/>West Chester Township, OH. 45069<br/>Office: 1 (937) 880-1040</MDBCard>
            </MDBCard>
            </MDBCard>
        </div>
    );
}

export default Blog;
