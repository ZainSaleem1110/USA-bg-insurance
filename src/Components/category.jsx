import React,{useState} from 'react';
import {MDBCard,MDBCardTitle, MDBCardText,MDBCardImage} from 'mdb-react-ui-kit'
import { MDBBox } from 'mdbreact';
import HealthImg from '../images/health.jpg'
import LifeImg from '../images/lifeInsurance.jpeg'
import SeniorImg from '../images/seniorInsurance.jpeg'
import {FaBriefcaseMedical,FaHeartbeat,FaUserGraduate} from 'react-icons/fa'

const Category = () => {

const [data,setData]=useState(0)
let activeStatus=()=>{
    var list = document.querySelectorAll(".non-active")
    var ul=document.querySelector(".ul")
    list.forEach(el=>{
        el.addEventListener("click",()=>{
            ul.querySelector('.actives').classList.remove('actives')
            el.classList.add('actives')
        })
    })
}
activeStatus()
    return (
        <div id="categorySection">
        <MDBCard className='py-5 m-0 col-12 d-flex justify-content-center align-items-center categorySection' style={{background:"lightgray"}} >
        <MDBCard className='py-5 m-0 col-10 d-flex flex-md-row flex-column' style={{background:"white",}}>
            {data==0 &&(
            <MDBCard className="col-md-8 col-12 w-100 d-flex flex-lg-row flex-column order-md-1 order-2 px-lg-3 px-2 ">
            <MDBCard className='col-lg-6  my-5 d-flex justify-content-center px-lg-3 px-2'>
            <MDBCardTitle className="mx-4 title" style={{fontSize:"19px",fontWeight:"700",color:"#0f4295"}}>Health Insurance</MDBCardTitle>
          <MDBCardText className="mx-4 mt-3 detail" style={{fontSize:"14px",fontWeight:"500",lineHeight:"24px"}}>
          Helping you navigate the complex world of health insurance through experienced and Licensed Health Insurance Brokers! Fill out our quote form below to get started with your personalized quote from our elite team.
          </MDBCardText>
          <a href="#insuranceForm" className="Category-btn d-flex align-items-center justify-content-center rounded mt-md-4 mt-2 py-2 mx-4">Get a Quote {">"}</a>
            </MDBCard>
            <MDBCard className='col-lg-6  d-flex justify-content-center mx-lg-0 mx-3 pr-lg-0 pr-5'>
            <MDBCardImage className="img-fluid border p-3 col-9" src={HealthImg} waves />
            </MDBCard>
            </MDBCard>
            )}
            {data==1 &&(
            <MDBCard className="col-md-8 col-12 w-100 d-flex flex-lg-row flex-column order-md-1 order-2 px-lg-3 px-2 ">
            <MDBCard className='col-lg-6  my-5 d-flex justify-content-center px-lg-3 px-2'>
            <MDBCardTitle className="mx-4 title" style={{fontSize:"19px",fontWeight:"700",color:"#0f4295"}}>Life insurance</MDBCardTitle>
          <MDBCardText className="mx-4 mt-3 detail" style={{fontSize:"14px",fontWeight:"500",lineHeight:"24px"}}>
          When you want to provide financial security to those who matter most to you, life insurance services from USABG are a good place to start. Fill out the quote form below to have a Licensed agent reach out to you.
          </MDBCardText>
          <a href="#insuranceForm" className="Category-btn d-flex align-items-center justify-content-center rounded mt-md-4 mt-2 py-2 mx-4">Get a Quote {">"}</a>
            </MDBCard>
            <MDBCard className='col-lg-6  d-flex justify-content-center mx-lg-0 mx-3 pr-lg-0 pr-5'>
            <MDBCardImage className="img-fluid border p-3 col-9" src={LifeImg} waves />
            </MDBCard>
            </MDBCard>
            )}
            {data==2 &&(
            <MDBCard className="col-md-8 col-12 w-100 d-flex flex-lg-row flex-column order-md-1 order-2 px-lg-3 px-2 ">
            <MDBCard className='col-lg-6  my-5 d-flex justify-content-center px-lg-3 px-2'>
            <MDBCardTitle className="mx-4 title" style={{fontSize:"19px",fontWeight:"700",color:"#0f4295"}}>Senior insurance</MDBCardTitle>
          <MDBCardText className="mx-4 mt-3 detail" style={{fontSize:"14px",fontWeight:"500",lineHeight:"24px"}}>
          Confused by the alphabet soup of Medicare and all the extras that follow? Contact our team for the one-on-one attention that you deserve by completing the quote form below.
          </MDBCardText>
          <a href="#insuranceForm" className="Category-btn d-flex align-items-center justify-content-center rounded mt-md-4 mt-2 py-2 mx-4">Get a Quote {">"}</a>
            </MDBCard>
            <MDBCard className='col-lg-6  d-flex justify-content-center mx-lg-0 mx-3 pr-lg-0 pr-5'>
            <MDBCardImage className="img-fluid border p-3 col-9" src={SeniorImg} waves />
            </MDBCard>
            </MDBCard>
            )}
            <MDBCard className='col-4 d-flex justify-content-start  order-md-2 order-1 px-lg-3 px-2'>
                <MDBCard className='mx-4 mt-md-3 mt-0 pt-md-5 pt-0 ul'>
                    <MDBCard className=' pb-4 m-0 d-flex flex-row align-items-center actives non-active ' style={{borderBottom:"2px solid lightgray"}} onClick={()=>setData(0)}>
                        <FaBriefcaseMedical style={{fontSize:"40px",}}/>
                    <MDBCard className="ml-3 mt-2 option" style={{fontSize:"12px",fontWeight:"700",}}>HEALTH INSURANCE</MDBCard>
                    </MDBCard>
                    <MDBCard className=' py-4 m-0 d-flex flex-row align-items-center non-active ' style={{borderBottom:"2px solid lightgray"}} onClick={()=>setData(1)}>
                    <FaHeartbeat style={{fontSize:"40px"}}/>
                    <MDBCard className="ml-3 option" style={{fontSize:"12px",fontWeight:"700"}}>LIFE INSURANCE</MDBCard>
                    </MDBCard>
                    <MDBCard className=' py-4 m-0 d-flex flex-row align-items-center non-active ' style={{borderBottom:"2px solid lightgray"}} onClick={()=>setData(2)}>
                    <FaUserGraduate style={{fontSize:"40px"}}/>
                    <MDBCard className="ml-3 option" style={{fontSize:"12px",fontWeight:"700"}}>SENIOR INSURANCE</MDBCard>
                    </MDBCard>
                </MDBCard>
            </MDBCard>
            </MDBCard>
    </MDBCard>
    </div>
    );
}

export default Category;
