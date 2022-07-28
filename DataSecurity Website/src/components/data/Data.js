import React from 'react'
import './data.css'
import {Link} from 'react-router-dom'

const Data = () => {
  return (
    <div className='data'>
            <div className="container">
                <div className="content">
                    <h2><span>Data</span> Recovery</h2>
                    <p>Data recovery is the process of restoring data that has been lost, accidentally deleted, corrupted or made inaccessible. In enterprise IT, data recovery typically refers to the restoration of data to a desktop, laptop, server or external storage system from a backup.</p>
                    <div>
                        <button><Link to='/recovery'>Learn More</Link></button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Data