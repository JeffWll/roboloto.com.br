import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Quest from '../Assets/quest.png';
import './MakeGame.css';



const MakeGame = () => {

  
 const mudaCor1 = (a) =>{
   a = 1;
    if (a === 1) {
      console.log(a);
    }
   document.querySelector(".div_bola1").style.backgroundColor = "red";
 }
  const mudaCor2 = (a) =>{
    a = 3;
    if (a === 3) {
      console.log(a);
    }
    document.querySelector(".div_bola2").style.backgroundColor = "red";
  }
  const mudaCor3 = (a) =>{
    a = 5;
    if (a === 5) {
      console.log(a);
    }
    document.querySelector(".div_bola3").style.backgroundColor = "red";
  }
  const mudaCor4 = (a) =>{
    a = 7;
    if (a === 7) {
      console.log(a);
    }
    document.querySelector(".div_bola4").style.backgroundColor = "red";
  }
  const mudaCor5 = (a) =>{
    a = 9;
    if (a === 9) {
      console.log(a);
    }
    document.querySelector(".div_bola5").style.backgroundColor = "red";
  }
  const mudaCor6 = (a) =>{
    a = 11;
    if (a === 11) {
      console.log(a);
    }
    document.querySelector(".div_bola6").style.backgroundColor = "red";
  }
  const mudaCor7 = (a) =>{
    a = 13;
    if (a === 13) {
      console.log(a);
    }
    document.querySelector(".div_bola7").style.backgroundColor = "red";
  }
  const mudaCor8 = (a) =>{
    a = 15;
    if (a === 15) {
      console.log(a);
    }
    document.querySelector(".div_bola8").style.backgroundColor = "red";
  }
  const mudaCor9 = (a) =>{
    a = 17;
    if (a === 17) {
      console.log(a);
    }
    document.querySelector(".div_bola9").style.backgroundColor = "red";
  }
  const mudaCor10 = (a) =>{
    a = 19;
    if (a === 19) {
      console.log(a);
    }
    document.querySelector(".div_bola10").style.backgroundColor = "red";
  }
  const mudaCor11 = (a) =>{
    a = 21;
    if (a === 21) {
      console.log(a);
    }
    document.querySelector(".div_bola11").style.backgroundColor = "red";
  }
  const mudaCor12 = (a) =>{
    a = 23;
    if (a === 23) {
      console.log(a);
    }
    document.querySelector(".div_bola12").style.backgroundColor = "red";
  }
  const mudaCor13 = (a) =>{
    a = 25;
    if (a === 25) {
      console.log(a);
    }
    document.querySelector(".div_bola13").style.backgroundColor = "red";
  }
  const history = useNavigate();
  const RoutePageResult = () =>{ 
    history("/PageResult");}

  return (
    <>
       <Navbar/>
       <div className='div_wrap_Make'>
        <div className='div_fundo_wrap'>
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <p>Criar um jogo Err4</p>  
              </div>
              <div className="col text-right col_help">
                <a href="" className='link_help'>Como jogar</a> <img src={Quest} alt="" />
              </div>
            </div>
            <div className="row">
              <hr />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h3>Resultado da LotoFácil</h3>
                {/*<p>Último concurso <b>2616</b> de 17/09/2022 </p> */}
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col col_ball_n">
                    <div className="ball_n" >
                      <h2 className="n_ball">1</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">2</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">3</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">4</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">5</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">6</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">7</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">8</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">9</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">10</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">11</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">12</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">13</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">14</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">15</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">16</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">17</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">18</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">19</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">20</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">21</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">22</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">23</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">24</h2>
                    </div>
                    <div className="ball_n">
                      <h2 className="n_ball">25</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col">
              <div className="col-lg-12">
                <h3>Rastreador de tendências</h3>
                <p>Numeros com base nos últimos 100 concursos </p>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col_ball_n2">
                {/*<div className="ball_n2l">
                  <h2 className="n_ball2">25</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">16</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">18</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">12</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">24</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">21</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">5</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">15</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">20</h2>
                </div>
                <div className="ball_n2l">
                  <h2 className="n_ball2">2</h2>
                </div>
                <div className="ball_n2w">
                  <h2 className="n_ball2w">1</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">7</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">11</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">10</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">14</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">9</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">22</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">23</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">3</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">17</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">6</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">20</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">8</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">4</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">13</h2>
                </div>
                <div className="ball_n2B">
                  <h2 className="n_ball2">19</h2>
  </div>*/}
  <p>Em Breve </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <br />
                <hr />
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="div_pass">
                      Passo 1
                    </div>
                  </div>
                </div>

                {/*###################### NUMEROS ALEATORIOS CARTELA #####################*/}

                <div className="div_wrap_cartel">
                  <div className="row">
                    <div className="col-lg-12">
                      <p>escolha <b>4 números ímpares</b> que você deseja <b>excluir</b> em suas apostas:</p>
                    </div>
                    <hr />
                    <div className="col-lg-12">
                      <div className="div_wrap_bolas">
                        <div className="div_bola1" onClick={mudaCor1}>
                          <span>01</span>
                        </div>
                        <div className="div_bola2" onClick={mudaCor2}>
                          <span>03</span>
                        </div>
                        <div className="div_bola3" onClick={mudaCor3}>
                          <span>05</span>
                        </div>
                        <div className="div_bola4" onClick={mudaCor4}>
                          <span>07</span>
                        </div>
                        <div className="div_bola5" onClick={mudaCor5}>
                          <span>09</span>
                        </div>
                        <div className="div_bola6" onClick={mudaCor6}>
                          <span>11</span>
                        </div>
                        <div className="div_bola7" onClick={mudaCor7}>
                          <span>13</span>
                        </div>
                      </div>
                      <br />
                      <div className="div_wrap_bolas">
                        <div className="div_bola8" onClick={mudaCor8}>
                          <span>15</span>
                        </div>
                        <div className="div_bola9" onClick={mudaCor9}>
                          <span>17</span>
                        </div>
                        <div className="div_bola10" onClick={mudaCor10}>
                          <span>19</span>
                        </div>
                        <div className="div_bola11" onClick={mudaCor11}>
                          <span>21</span>
                        </div>
                        <div className="div_bola12" onClick={mudaCor12}>
                          <span>23</span>
                        </div>
                        <div className="div_bola13" onClick={mudaCor13}>
                          <span>25</span>
                        </div>
                      </div>
                      <br />
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <button className="btn btn-success" style={{width:"100%"}} onClick={RoutePageResult}>Gerar apostas</button>
                        </div>
                        <div className="col-lg-6">
                        <button className="btn btn btn-secondary" style={{width:"100%"}}>Limpar selecão</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default MakeGame