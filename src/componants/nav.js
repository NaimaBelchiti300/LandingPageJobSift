import { useState, useEffect } from 'react';
import logo from '../images/image-removebg-preview (6).png';
import '../css/nav.css'
export default function Nav() {
  // fixe nav lors de scroll
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
	  const handleScroll = () => {
		const scrollPosition = window.scrollY;
    // console.log(scrollPosition);
		if (scrollPosition > 100) {
		  setIsScrolled(true);
		} else {
		  setIsScrolled(false);
		}
	  };
  
	  window.addEventListener('scroll', handleScroll);
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);

// scrolle into

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  };

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-white navbaar ${isScrolled ? 'scrolled' : ''}`} style={{ backgroundColor: 'white', color: 'black',paddingLeft:'15px' }}>
                <div className="container-fluid p-5 mt-3 ">
                    <a className="navbar-brand " href="#"><img src={logo} width={180} height={110} alt="Logo" /></a>
                    <div className="collapse navbar-collapse  " >
                        <div className="navbar-nav m-5 alignement"  >
                            <h3><a className="nav-link " aria-current="page" href="#home" style={{color:'#380927',marginRight:'15px'}}   smooth={true} offset={-100} duration={600} onClick={() => scrollToSection('home')}>Home</a></h3>
                            <h3><a className="nav-link  " href="#JobSift" style={{color:'#380927',marginRight:'15px'}} smooth={true} offset={-100} duration={600} onClick={() => scrollToSection('JobSift')}>JobSift</a></h3>
                            <h3><a className="nav-link  " href="#Category" style={{color:'#380927',marginLeft:'15px'}} smooth={true} offset={-100} duration={600} onClick={() => scrollToSection('Category')}>Brows  By Category</a></h3>
                            <h3><a className="nav-link  " href="#Job" style={{color:'#380927',marginLeft:'15px'}} smooth={true} offset={-100} duration={600} onClick={()=>scrollToSection('Job')}>Search Job </a></h3>
                        </div>
                        <button className="btn  mb-2" style={{ width: '150px', backgroundColor: '#DC6C5E', color: 'white', marginLeft: '100px' }} type="submit">Contact Us</button>
                    </div>
                </div>
            </nav>
        </>
    );
}
