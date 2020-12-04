import React from 'react';

import MainJumbotron from "./subComponents/home/jumbotron"

import VendorListSection from "./subComponents/home/vendorListSection"


function Home() {
  return (
      <div style = {{width:'90%', margin:'120px 5%'}}>
    
    <MainJumbotron/>
    <hr class="solid"/>
    <VendorListSection/>
    <hr class="solid"/>

    </div>
  );
}

export default Home;