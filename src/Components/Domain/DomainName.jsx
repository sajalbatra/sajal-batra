import React from 'react'
import "./domainName.css"
import  Domain  from "./Domain"
import uiux from "../../Styles/Domainassests/uiux.svg"
import webdev from "../../Styles/Domainassests/webdev.svg"
import iot from "../../Styles/Domainassests/iot.svg"
const DomainName = () => {
  return (
    <div className='DomainName-main-div'>
      <h1 className='DomainName-main-div-heading'>Domains</h1>
      <div className='DomainName-all-domains'>
      <Domain 
      image={uiux}
      name="UI/UX"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
      <Domain 
      image={webdev}
      name="Web Development"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
      <Domain 
      image={iot}
      name="Internet Of Things"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
      </div>
    </div>
  )
}

export default DomainName