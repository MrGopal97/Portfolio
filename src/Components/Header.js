import React from 'react'
import Button from './Button'
import ReactTypingEffect from 'react-typing-effect';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from 'react-router-dom';

function Header({data}) {
    return (
        <>
        <div className="header">
            <h1 className="big-h">
                Hello! <br /> I'm Gopal&nbsp;<br />
                <span className="span-text">
                    <ReactTypingEffect
                        text={["Full Stack Developer", "Freelancer", "UI/UX Developer", "MERN Stack Developer"]}
                    />
                </span>
                <br className="break" />Based in <span className="span-text">Tamil Nadu </span>
            </h1>
            <NavLink to="/contact">
            <Button text="Let's Chat" />
            </NavLink>
            <ul className="social flex">
                <li><a href="https://github.com/MrGopal97" target="_blank" rel="noreferrer"><GitHubIcon className="social__icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/mr-gopal-55250219a/" target="_blank" rel="noreferrer"><LinkedInIcon className="social__icon" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100011332176387" target="_blank" rel="noreferrer"><FacebookIcon className="social__icon" /></a></li>
                <li><a href="https://www.instagram.com/k_r_i_s_h_30_07/" target="_blank" rel="noreferrer"><InstagramIcon className="social__icon" /></a></li>
            </ul>
        </div>
        </>
    )
}

export default Header
