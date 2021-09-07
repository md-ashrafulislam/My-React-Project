import React from 'react';
import './footer.css';

const Footer = props => {
    return(
        <div className="footerSection">
            <div className="buttonfooter">
                <p>Tweet “Prototype and build apps with React and Swift. New courses by @MengTo”</p>
            
                <button className="buttonfooter">Tweet</button>
            </div>
            <div className="linklist">
                <a className="extralink" href="" >Main</a>
                <a className="extralink" href="" >Downloads</a>
                <a className="extralink" href="" >Community</a>     
                <a className="extralink" href="" >Home</a>
                <a href="" >Angle Mockups</a>
                <a href="" >Workshops</a>
                <a href="" >Courses</a>
                <a href="" >iOS UI Kit</a>
                <a href="" >Meetups</a>
                <a href="" >Licenses</a>
                <a href="" >iPhone X Wallpapers</a>
                <a href="" >Learn Resources</a>
                <a href="" >Jobs</a>
                <a href="" >5K Wallpapers</a>
                <a href="" >Made by Readers</a>
                <a href="" >About</a>
                <a href="" >Video Files</a>
                <a href="" >Medium</a>
            </div>
            <p>Backgrounds made in Cinema 4D, iOS app in Swift, site in React. Email us to ask anything. © 2018 - Terms of Service - Privacy Policy</p>
        </div>
    )
}

export default Footer;