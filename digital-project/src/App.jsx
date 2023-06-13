import React from 'react';
import ProfileImage from './images/profile-image.png';
import mail from './images/Mail.png'
import linked from './images/linkedin.png'
import twitter from './images/Twitter Icon.png'
import facebook from './images/Facebook Icon.png'
import instagram from './images/Instagram Icon.png'
import github from './images/GitHub Icon.png'
import './App.css'

export default function App() {
    return (

        <div className="main-container" >
            <div className='main-card'> 
                <div className="image-card">
                    <img className="image-profile" src={ProfileImage} />
                </div>

                <div className="profile-info">
                    <div className="name">Laura Smith</div>
                    <div className="job-description">Frontend Developer</div>
                    <div className="info-link"><a href="#">laurasmith.website</a></div>

                    <div className="buttons">
                        <button className='email-button'>  <img src={mail} alt="" /><span>Email</span> </button>
                        <button className='linkedin-button' > <img src={linked} alt="" /> <span>LinkedIn</span> </button>
                    </div>

                    <div className="info-other">
                        <h3>About</h3>
                        <p>
                            I'm a frontend developer with a particular interest in making things simple and
                            automating daily tasks. I try to keep up with security and best practises, and
                            I'm always looking for new things to learn.
                        </p>
                        <h3>Interests</h3>
                        <p>
                            Food expert. Music scholar. Internet fanatic.
                            Bacon Buff. Enterpreneur. Travel geek. Pop culture ninja.
                            Coffee fanatic.
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <div className="image-icons">
                        <img className='image-icons' src={twitter} />
                        <img className='image-icons' src={facebook} />
                        <img className='image-icons' src={instagram} />
                        <img className='image-icons' src={github} />
                    </div>
                </div>
            </div>



         </div>
    )
}