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
import {objCartelaJogo0} from './PageResult';


const Dashboard = () => {

  //const x = objCartelaJogo0();
  //document.write("X: " + x);


  const history = useNavigate();
  const RouteMakeGame = () =>{ 
    history("/MakeGame");}

    //const VnumSelecionados = numSelecionados;
    const TipoSelecao = {
      DIVbckgrdColor: '',
      H2bckgrdColor: ''
    };
  
    var TipoSelecaoDIVbckgrdColor = ['texto'];
    var TipoSelecaoH2bckgrdColor = ['texto'];
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  
    function RandomizarSelecao() {
      
      let total = 25; //cartelas*numeros na cartela
  
      TipoSelecaoDIVbckgrdColor = [];TipoSelecaoDIVbckgrdColor = ['texto'];
      TipoSelecaoH2bckgrdColor = [];TipoSelecaoH2bckgrdColor = ['texto'];
  
      for(let i = 0; i <= total; i++)
      {      
          var selecao = getRandomInt(1, 4);
          
          switch(selecao) 
          {
            case 1: // SEM SELEÇÃO (SELEÇÃO ROXA)
            TipoSelecaoDIVbckgrdColor.push('ball_nRR_Color');
            TipoSelecaoH2bckgrdColor.push('n_ballRR_Color');
              break;
            case 2: // COM SELEÇÃO (SELEÇÃO BRANCA)
            TipoSelecaoDIVbckgrdColor.push('ball_nRR_ColorRX');
            TipoSelecaoH2bckgrdColor.push('n_ballRR_ColorRX');
              break;
            case 3: // COM SELEÇÃO VERMELHA (SELEÇÃO BRANCA c/ CONTORNO VERMELHO)
            TipoSelecaoDIVbckgrdColor.push('ball_nRR_ColorWR');
            TipoSelecaoH2bckgrdColor.push('n_ballRR_ColorWR');
              break;
            default:
              // code block
          }
      }    
    }
  
    function VerificarSelecao(){
      var selecaoRoxa = 0;
      while(selecaoRoxa < 15){
        selecaoRoxa = 0;
        RandomizarSelecao();
        
        TipoSelecaoDIVbckgrdColor.forEach(element => {
          if(element == 'ball_nRR_Color'){
            selecaoRoxa++; 
          }
        }); 
      }
    }
  
  const title = React.createElement('h1', {}, 'My First React Code');
    
  const CartelaJogo = [
    {
      title: 'text',
      description: 'text',
    }
  ];
  
  const objCartelaJogo1 = CartelaJogo.map((item) => {
    VerificarSelecao();
  
    return(
      <>
      <div className="div_wrap_result">
                        <h5 className="tt_cartela">Palpite 1</h5>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[1]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[1]}>01</h2>
                          </div>                        
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[2]}>
                          <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[2]}>02</h2>
                          </div>
  
  
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[3]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[3]}>03</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[4]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[4]}>04</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[5]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[5]}>05</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[6]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[6]}>06</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[7]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[7]}>07</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[8]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[8]}>08</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[9]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[9]}>09</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[10]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[10]}>10</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[11]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[11]}>11</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[12]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[12]}>12</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[13]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[13]}>13</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[14]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[14]}>14</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[15]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[15]}>15</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[16]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[16]}>16</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[17]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[17]}>17</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[18]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[18]}>18</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[19]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[19]}>19</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[20]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[20]}>20</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[21]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[21]}>21</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[22]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[22]}>22</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[23]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[23]}>23</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[24]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[24]}>24</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[25]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[25]}>25</h2>
                          </div>
                        </div>
  
                        </div>
  
      </>
     )
  });
  
  const objCartelaJogo2 = CartelaJogo.map((item) => {
    VerificarSelecao();
  
    return(
      <>
      <div className="div_wrap_result">
                        <h5 className="tt_cartela">Palpite 2</h5>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[1]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[1]}>01</h2>
                          </div>                        
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[2]}>
                          <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[2]}>02</h2>
                          </div>
  
  
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[3]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[3]}>03</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[4]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[4]}>04</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[5]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[5]}>05</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[6]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[6]}>06</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[7]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[7]}>07</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[8]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[8]}>08</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[9]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[9]}>09</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[10]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[10]}>10</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[11]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[11]}>11</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[12]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[12]}>12</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[13]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[13]}>13</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[14]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[14]}>14</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[15]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[15]}>15</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[16]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[16]}>16</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[17]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[17]}>17</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[18]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[18]}>18</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[19]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[19]}>19</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[20]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[20]}>20</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[21]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[21]}>21</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[22]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[22]}>22</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[23]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[23]}>23</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[24]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[24]}>24</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[25]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[25]}>25</h2>
                          </div>
                        </div>
  
                        </div>
  
      </>
     )
  });
  
  const objCartelaJogo3 = CartelaJogo.map((item) => {
    VerificarSelecao();
  
    return(
      <>
      <div className="div_wrap_result">
                        <h5 className="tt_cartela">Palpite 3</h5>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[1]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[1]}>01</h2>
                          </div>                        
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[2]}>
                          <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[2]}>02</h2>
                          </div>
  
  
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[3]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[3]}>03</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[4]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[4]}>04</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[5]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[5]}>05</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[6]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[6]}>06</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[7]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[7]}>07</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[8]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[8]}>08</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[9]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[9]}>09</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[10]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[10]}>10</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[11]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[11]}>11</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[12]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[12]}>12</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[13]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[13]}>13</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[14]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[14]}>14</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[15]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[15]}>15</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[16]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[16]}>16</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[17]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[17]}>17</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[18]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[18]}>18</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[19]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[19]}>19</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[20]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[20]}>20</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[21]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[21]}>21</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[22]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[22]}>22</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[23]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[23]}>23</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[24]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[24]}>24</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[25]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[25]}>25</h2>
                          </div>
                        </div>
  
                        </div>
  
      </>
     )
  });
  
  const objCartelaJogo4 = CartelaJogo.map((item) => {
    VerificarSelecao();
  
    return(
      <>
      <div className="div_wrap_result">
                        <h5 className="tt_cartela">Palpite 4</h5>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[1]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[1]}>01</h2>
                          </div>                        
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[2]}>
                          <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[2]}>02</h2>
                          </div>
  
  
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[3]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[3]}>03</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[4]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[4]}>04</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[5]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[5]}>05</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[6]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[6]}>06</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[7]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[7]}>07</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[8]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[8]}>08</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[9]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[9]}>09</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[10]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[10]}>10</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[11]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[11]}>11</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[12]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[12]}>12</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[13]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[13]}>13</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[14]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[14]}>14</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[15]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[15]}>15</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[16]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[16]}>16</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[17]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[17]}>17</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[18]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[18]}>18</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[19]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[19]}>19</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[20]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[20]}>20</h2>
                          </div>
                        </div>
                        <div className="linha_bolas">
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[21]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[21]}>21</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[22]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[22]}>22</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[23]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[23]}>23</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[24]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[24]}>24</h2>
                          </div>
                          <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[25]}>
                            <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[25]}>25</h2>
                          </div>
                        </div>
  
                        </div>
  
      </>
     )
  });


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
     {/* <div className="row">
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
            </div>*/}

<div className="col-lg-12">
                <hr />
                <div className="row">
                  <div className="col">
                    <div className='App'>{objCartelaJogo0}</div> 
                  </div>
                  <div className="col">
                    <div className='App'>{objCartelaJogo2}</div> 
                  </div>
                  <div className="col">
                    <div className='App'>{objCartelaJogo3}</div> 
                  </div>
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