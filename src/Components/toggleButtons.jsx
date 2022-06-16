import React from 'react';

const Togglebuttons = () => {
    let handleVideoSection=()=>{
        var videoBanner=document.getElementById('videoBanner')
        videoBanner.classList.toggle('hide')
      }
      let handleCategorySection=()=>{
        var category=document.getElementById("categorySection")
        category.classList.toggle('hide')
      }
      let handleAboutSection=()=>{
        var aboutSec=document.querySelector(".aboutUsSection")
        aboutSec.classList.toggle('hide')
      }
      let handleServicesSection=()=>{
        var serviceSec=document.getElementById("seviceSection")
        serviceSec.classList.toggle('hide')
      }
      let handleTeamSection=()=>{
        var teamSec=document.querySelector(".teamSection")
        teamSec.classList.toggle('hide')
      }
      let handleTestSection=()=>{
        var testSec=document.querySelector(".testSection")
        testSec.classList.toggle('hide')
      }
      let handleFormSection=()=>{
        var formSec=document.querySelector(".formSection")
        formSec.classList.toggle('hide')
      }
      let handleStateSection=()=>{
        var StateSec=document.querySelector(".StateSection")
        StateSec.classList.toggle('hide')
      }
      let handleProductSection=()=>{
        var ProductSec=document.querySelector(".productSection")
        ProductSec.classList.toggle('hide')
      }
      let handleBlogSection=()=>{
        var BlogSec=document.querySelector(".BlogSection")
        BlogSec.classList.toggle('hide')
      }
      let handleFooterSection=()=>{
        var FooterSec=document.querySelector(".FooterSection")
        var Footer2Sec=document.querySelector(".Footer2Section")
        FooterSec.classList.toggle('hide')
        Footer2Sec.classList.toggle('hide')
      }
    return (
        <div className='bg-black p-3 d-flex flex-wrap'>
        <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches1'
          defaultChecked
          onClick={handleVideoSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches1'>
          Hide 1st Banner
        </label>
      </div>

      <div className='custom-control custom-switch ml-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches2'
          defaultChecked
          onClick={handleCategorySection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches2'>
          Hide 2nd section
        </label>
      </div>

      <div className='custom-control custom-switch ml-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches3'
          defaultChecked
          onClick={handleAboutSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches3'>
          Hide 3rd section
        </label>
      </div>

      <div className='custom-control custom-switch ml-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches4'
          defaultChecked
          onClick={handleServicesSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches4'>
          Hide 4th section
        </label>
      </div>

      <div className='custom-control custom-switch ml-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches5'
          defaultChecked
          onClick={handleTeamSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches5'>
          Hide 5th section
        </label>
      </div>

      <div className='custom-control custom-switch ml-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches6'
          defaultChecked
          onClick={handleTestSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches6'>
          Hide 6th section
        </label>
      </div>

      <div className='custom-control custom-switch ml-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches7'
          defaultChecked
          onClick={handleFormSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches7'>
          Hide 7th section
        </label>
      </div>

      <div className='custom-control custom-switch mt-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches8'
          defaultChecked
          onClick={handleStateSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches8'>
          Hide 8th section
        </label>
      </div>

      <div className='custom-control custom-switch ml-3 mt-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches9'
          defaultChecked
          onClick={handleProductSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches9'>
          Hide 9th section
        </label>
      </div>

      <div className='custom-control custom-switch ml-3 mt-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches10'
          defaultChecked
          onClick={handleBlogSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches10'>
          Hide 10th section
        </label>
      </div>

      <div className='custom-control custom-switch ml-3 mt-3'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches11'
          defaultChecked
          onClick={handleFooterSection}
        />
        <label className='custom-control-label text-white' htmlFor='customSwitches11'>
          Hide 11th section
        </label>
      </div>

       </div>
    );
}

export default Togglebuttons;
