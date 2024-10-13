import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p> EcoCharm is an e-commerce website which is an online platform that facilitates the
          buying and selling of skincare products over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. </p>
          <p>
          EcoCharm typically display products along with
          detailed descriptions, images, prices, and any available variations
          . Each product usually has its own dedicated page
          with relevant information.
          </p>
      </div>
    </div>
  )
}

export default DescriptionBox
