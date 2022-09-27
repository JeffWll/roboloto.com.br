import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
//import Img from '../Assets/img.jpg';
import ImgDiamond from '../Assets/diamond.png';
import Img from '../Assets/Cartela1.jpg';
import Slide1 from '../Assets/slide1img.jpg';
import Slide2 from '../Assets/slide2img.jpg';
import Slide3 from '../Assets/slide2img.jpg';
import './Dashboard.css';
import { useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from "swiper";

const Dashboard = () => {

  const history = useNavigate();
  const RouteMakeGame = () =>{ 
    history("/MakeGame");}

  return (
    <>
     <Navbar/>
     <Sidebar/>
     <section className="corpo_container_Dashboard">
     <div className="container mt-3">
       <div className="row">
         <div className="col-lg-12">
         <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1366: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                  360: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              modules={[Autoplay]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src={Slide1} alt="" style={{width:"100%"}}/></SwiperSlide>
            <SwiperSlide><img src={Slide2} alt="" style={{width:"100%"}}/></SwiperSlide>
            <SwiperSlide><img src={Slide3} alt="" style={{width:"100%"}}/></SwiperSlide>
          </Swiper>
         </div>
       </div>
       <div className="row mt-3">
         <div className="col-lg-3">
          <div className="quadro_btn text-right" style={{backgroundImage: "url(/Assets/erre4.jpg)" }}>
            {/*<h4>Erre 4</h4>*/}
            <button className="btn btn-success btn_acesso_quadro" onClick={RouteMakeGame}>Gerar Jogos</button>
          </div>
         </div>
         <div className="col-lg-3">
         <div className="quadro_btn text-center">
         <h4>Erre 5</h4>
            <button className="btn btn-success btn_acesso_quadro">Em breve</button>
          </div>
         </div>
         <div className="col-lg-3">
         <div className="quadro_btn text-center">
         <h4>Erre 7</h4>
            <button className="btn btn-success btn_acesso_quadro">Em breve</button>
          </div>
         </div>
       </div>
       
       <div className="row linha_2_cards">
         <div className="col-lg-3">
          <div className="quadro_btn text-center">
            <h4>Bolões</h4>
            <button className="btn btn-success btn_acesso_quadro">Em breve</button>
          </div>
         </div>
         <div className="col-lg-3">
         <div className="quadro_btn text-center">
         <h4>Erre 9</h4>
            <button className="btn btn-success btn_acesso_quadro">Em breve</button>
          </div>
         </div>
         <div className="col-lg-3">
         <div className="quadro_btn text-center">
         <h4>3 X 3</h4>
            <button className="btn btn-success btn_acesso_quadro">Em breve</button>
          </div>
         </div>

       </div>
     </div>

    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-3">
          <img src={Img} alt="" className="img_imagem"/>
        </div>
        <div className="col-lg-3">
          <img src={Img} alt="" className="img_imagem"/>
        </div>
        <div className="col-lg-3">
          <img src={Img} alt="" className="img_imagem"/>
        </div>
        <div className="col-lg-3">
          <img src={Img} alt="" className="img_imagem"/>
        </div>
      </div>
    </div>

    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="box_btns">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="row">
                  <div className="col-lg-12">
                    
                  
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                    <button className="btn btn-success btn_circ">btn</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-lg-6 col_table_dash">
          <div className="box_table">


        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">Nº</th>
              <th scope="col">Valor 1</th>
              <th scope="col">Valor 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">15</th>
              <td>0</td>
              <td>R$ 0,00</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>342</td>
              <td>R$ 0,00</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>11637</td>
              <td>R$ 0,00</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>160515</td>
              <td>R$ 0,00</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>915371</td>
              <td>R$ 0,00</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>0</td>
              <td>R$ 0,00</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>342</td>
              <td>R$ 0,00</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>11637</td>
              <td>R$ 0,00</td>
            </tr>
          </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
    

     </section>
    </>
  )
}

export default Dashboard