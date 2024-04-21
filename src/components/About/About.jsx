import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="About Image" className='about-img' />
            <img src={play_icon} alt="About Image two" className='play-icon' onClick={()=> setPlayState(true)} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomrrow's Leader Today</h2>
            <p>Embark on a trasformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge,skills, and experience needed to excel in the dynamic field of education</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, incidunt nobis expedita laudantium pariatur labore officiis? Dolore adipisci tempore veritatis. Voluptate iste officiis quasi! Itaque!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae adipisci fugit consectetur aliquid voluptas pariatur perspiciatis voluptates! Blanditiis iste quidem inventore repellat eligendi natus eaque! Maiores quisquam earum doloremque neque modi, cum voluptatum perspiciatis in?</p>
        </div>
    </div>
  )
}

export default About