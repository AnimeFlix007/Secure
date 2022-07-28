import React from 'react'
import './cloud.css';
import {Link} from 'react-router-dom'

const Cloud = () => {
  return (
    <div className='cloud'>
            <div className="container">
                <div className="content">
                    <h2><span>Cloud</span> Security</h2>
                    <p>Cloud security is a collection of procedures and technology designed to address external and internal threats to business security. Organizations need cloud security as they move toward their digital transformation strategy and incorporate cloud-based tools and services as part of their infrastructure.</p>
                <div><button><Link to='/cloud'>Learn More</Link></button></div>
                </div>
            </div>
        </div>
  )
}

export default Cloud