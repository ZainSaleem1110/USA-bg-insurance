import React from 'react';
import { MDBBtn, MDBCard, MDBCardImage, MDBCol } from 'mdb-react-ui-kit';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBRow
  } from 'mdb-react-ui-kit';
  import Logo from '../images/logo.jpg'
  import BBBImg from '../images/BBB.jpg'
  import BadgeImg from '../images/badge.jpg'
  import Video from '../images/usabg4.mp4'
  import Sponsor from '../images/sponsor.jpeg'
  import Category from './category'
  import AboutUs from './about-us'
  import Services from './services';
  import OurTeam from './ourTeam'
  import Testimonial from './testimonial'
  import InsuranceForm from './insuranceForm'
  import Statement from './statement'
  import BlogSection from './blog'
  import Footer from './footer'
  import VideoBanner from './VideoBanner'
  import ToogleBtn from './toggleButtons'

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Togglebuttons from './toggleButtons';
const Page = () => {
    return (
        <div style={{height:"auto"}}>
            <MDBNavbar expand='lg' light bgColor='white' style={{position:"fixed",top:"0px",left:"0px",zIndex:"10",width:"100%"}}>
      <MDBContainer fluid style={{height:"70px"}}>
        <MDBNavbarBrand href='#'>
            <img
              src={Logo}
              height='50'
              alt=''
              loading='lazy'
            />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar>
          <MDBNavbarNav className='mx-auto mb-2 mb-lg-0 w-auto'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' className="mr-4" href='#'>
                Home
              </MDBNavbarLink>
              <div className='activeBarHome'></div>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbarLinks'>
              <MDBNavbarLink href='#about-us' className="mr-4">About Us</MDBNavbarLink>
              <div className='activeBar'></div>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbarLinks'>
              <MDBNavbarLink href='#products' className="mr-4">Products</MDBNavbarLink>
              <div className='activeBar'></div>
            </MDBNavbarItem>

            <MDBNavbarItem className='navbarLinks'>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link mr-4'>
                  Carrers
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Learn More</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Opportunity Video</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Agent Testimonials</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <div className='activeBar'></div>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbarLinks'>
              <MDBNavbarLink  href='#' className="mr-4">
                Contact
              </MDBNavbarLink>
              <div className='activeBar'></div>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbarLinks'>
              <MDBNavbarLink  href='#' className="mr-4">
                Login
              </MDBNavbarLink>
              <div className='activeBar'></div>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarBrand href=''>
            <img
              src={BBBImg}
              height='50'
              alt=''
              loading='lazy'
            />
        </MDBNavbarBrand>
        <MDBNavbarBrand href=''>
            <img
              src={BadgeImg}
              height='50'
              alt=''
              loading='lazy'
            />
        </MDBNavbarBrand>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <MDBCol className='mt-5 px-0 pt-md-0 pt-4'>
    <div className='p-0 m-0' style={{background:"lightgray"}}>
    <VideoBanner/>
    <Category/>
    <AboutUs/>
    <Services/>
    <OurTeam/>
    <Testimonial/>
    <InsuranceForm/>
    <Statement/>
    <MDBCardImage id="products" className="img-fluid w-100 productSection" src={Sponsor} waves />
    <BlogSection/>
    <Footer/>
    <Togglebuttons/>
    </div>
    </MDBCol>
        </div>
    );
}

export default Page;
