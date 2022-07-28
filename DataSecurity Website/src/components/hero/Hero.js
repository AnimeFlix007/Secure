import './hero.css';
import {Link} from 'react-router-dom'

const Hero = () => {
  
  return (
    <div className='hero'>
        <div className='container'>
            <div className='content'>
                <h1>Data</h1>
                <h1 className='blue'>Security</h1>
                <h1>Protection</h1>
                <div className='learn-more'>
                    <button><Link to='/security'>Learn More</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero