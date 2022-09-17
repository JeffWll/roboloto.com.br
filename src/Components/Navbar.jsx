import React from 'react'
import { Link } from "react-router-dom";
import Logo2 from '../Assets/logo2.jpg';
import Home from '../Assets/icon_home.svg';
import User from '../Assets/icon_user.svg';
import Youtube from '../Assets/icon_tube.svg';
import List from '../Assets/icon_list.svg';
import Bell from '../Assets/icon_bell.svg';
import Trevo from '../Assets/icon_trevo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="barra_nav">
			<div class="container">
			      <img data-aos="fade-right" data-aos-delay="50" src={Logo2} className="logo2"  />
						<div className="nt_mobile">
							<img src={Bell} alt="" />
						</div>
					<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
			      <span class="navbar-toggler-icon"></span>
			    </button>
			    <div class="collapse navbar-collapse div_links" id="navbarCollapse">
						<div class="navbar-nav">
							<Link data-aos="fade-up"  data-aos-delay="100" to=""  href="#" className="nav-item nav-link"> <img src={Home} alt="" /> Home</Link>
							<Link data-aos="fade-up"  data-aos-delay="200" to="" href="#" className="nav-item nav-link"> <img src={User} alt="" /> Minha Conta</Link>
							<Link data-aos="fade-up"  data-aos-delay="400" to=""  href="#" className="nav-item nav-link"> <img src={Youtube} alt="" /> Tutoriais</Link>
							<Link data-aos="fade-up"  data-aos-delay="600" to="" href="#" className="nav-item nav-link"> <img src={List} alt="" /> Termos de uso</Link>
				<a class="nav-link dropdown-toggle side_mobile" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Side Menu
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#"><img src={Trevo} alt="" /> Item Menu</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#"><img src={Trevo} alt="" /> Item Menu</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#"><img src={Trevo} alt="" /> Item Menu</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#"><img src={Trevo} alt="" /> Item Menu</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#"><img src={Trevo} alt="" /> Item Menu</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#"><img src={Trevo} alt="" /> Item Menu</a>
        </div>
						</div>
			    </div>
					<div className="nt_desktop">
					<button className="btn_bell"><img src={Bell} alt="" /></button>	
					</div>
	    </div>
		</nav>
    </>
  )
}

export default Navbar