import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Save from '../Assets/save.png';
import docTop from '../Assets/docTop.png';
import './PageResult.css';



const PageResult = () => {

  
    
  return (
    <>
       <Navbar/>
       <div className='div_wrap_Make'>
        <div className='div_fundo_wrap'>
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <p>Criar uma Aposta</p>  
              </div>
              <div className="col text-right col_help">
               <div className="div_wrap_icons">
                 <div className="div_save">
                  <img src={Save} alt="" />
                 </div>
                 <div className="div_doc">
                  <img src={docTop} alt="" />
                 </div>
               </div> 
              </div>
            </div>
            <div className="row">
              <hr />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p>Com base nos números <b>excluidos</b> na etapa anterior, o sistema gerou as apostas abaixo. </p>
                <div style={{display:"flex"}}>
                  <div className="ball_nR">
                    <h2 className="n_ballR">1</h2>
                  </div>
                  <div className="ball_nR">
                    <h2 className="n_ballR">5</h2>
                  </div>
                  <div className="ball_nR">
                    <h2 className="n_ballR">19</h2>
                  </div>
                  <div className="ball_nR">
                    <h2 className="n_ballR">17</h2>
                  </div>
                </div>
                <br />
                <p><b>As dezenas em vermelho representam os números escolhidos e não devem ser utilizadas para formar seus jogos.</b></p>
                <p style={{color:"red"}}>Os jogos gerados nos sistemas devem ser apostados na casa lotérica e o prêmio resgatado na mesma, com excecão do bolão.</p>
              </div>
              <div className="col-lg-12">
                <hr />
                <div className="row">
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 1</h5>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">01</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">02</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">03</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">04</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">05</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">06</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">07</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">08</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">09</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">10</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">11</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">12</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">13</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">14</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">15</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">16</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">17</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">18</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">19</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">20</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">21</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">22</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">23</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">24</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">25</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 2</h5>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">01</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">02</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">03</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">04</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">05</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">06</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">07</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">08</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">09</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">10</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">11</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">12</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">13</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">14</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">15</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">16</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">17</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">18</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">19</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">20</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">21</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">22</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">23</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">24</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">25</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 3</h5>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">01</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">02</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">03</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">04</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">05</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">06</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">07</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">08</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">09</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">10</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">11</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">12</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">13</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">14</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">15</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">16</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">17</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">18</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">19</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">20</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">21</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">22</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">23</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">24</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">25</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 4</h5>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">01</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">02</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">03</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">04</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">05</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">06</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">07</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">08</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">09</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">10</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">11</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">12</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">13</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">14</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">15</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">16</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">17</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">18</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">19</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">20</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">21</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">22</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">23</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">24</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">25</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 5</h5>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">01</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">02</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">03</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">04</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">05</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">06</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">07</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">08</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">09</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">10</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">11</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">12</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">13</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">14</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">15</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">16</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">17</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">18</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">19</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">20</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">21</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">22</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">23</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">24</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">25</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 6</h5>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">01</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">02</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">03</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">04</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">05</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">06</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">07</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">08</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">09</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">10</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">11</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">12</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">13</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">14</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">15</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">16</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">17</h2>
                        </div>
                        <div className="ball_nRR_ColorRX">
                          <h2 className="n_ballRR_ColorRX">18</h2>
                        </div>
                        <div className="ball_nRR_ColorWR">
                          <h2 className="n_ballRR_ColorWR">19</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">20</h2>
                        </div>
                      </div>
                      <div className="linha_bolas">
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">21</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">22</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">23</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">24</h2>
                        </div>
                        <div className="ball_nRR_Color">
                          <h2 className="n_ballRR_Color">25</h2>
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

export default PageResult