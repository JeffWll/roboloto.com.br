import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Quest from '../Assets/quest.png';
import './MakeGame.css';

export const numSelecionados = [];

const MakeGame = () => {


  
 const mudaCor1 = (a) =>{
   console.log(1);
   if(document.querySelector(".div_bola1").style.backgroundColor == "red"){
      document.querySelector(".div_bola1").style.backgroundColor = "blue";
      numSelecionados.splice(numSelecionados.indexOf(1), 1); // remove o valor do vetor
   }else{
    numSelecionados.push(1);
    document.querySelector(".div_bola1").style.backgroundColor = "red";
   }
   console.log(numSelecionados);
 }
  const mudaCor3 = (a) =>{
    console.log(3);
    if(document.querySelector(".div_bola3").style.backgroundColor == "red"){
       document.querySelector(".div_bola3").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(3), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(3);
     document.querySelector(".div_bola3").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor5 = (a) =>{
    console.log(5);
    if(document.querySelector(".div_bola5").style.backgroundColor == "red"){
       document.querySelector(".div_bola5").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(5), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(5);
     document.querySelector(".div_bola5").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor7 = (a) =>{
    console.log(7);
    if(document.querySelector(".div_bola7").style.backgroundColor == "red"){
       document.querySelector(".div_bola7").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(7), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(7);
     document.querySelector(".div_bola7").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor9 = (a) =>{
    console.log(9);
    if(document.querySelector(".div_bola9").style.backgroundColor == "red"){
       document.querySelector(".div_bola9").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(9), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(9);
     document.querySelector(".div_bola9").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor11 = (a) =>{
    console.log(11);
    if(document.querySelector(".div_bola11").style.backgroundColor == "red"){
       document.querySelector(".div_bola11").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(11), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(11);
     document.querySelector(".div_bola11").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor13 = (a) =>{
    console.log(13);
    if(document.querySelector(".div_bola13").style.backgroundColor == "red"){
       document.querySelector(".div_bola13").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(13), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(13);
     document.querySelector(".div_bola13").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor15 = (a) =>{
    console.log(15);
    if(document.querySelector(".div_bola15").style.backgroundColor == "red"){
       document.querySelector(".div_bola15").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(15), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(15);
     document.querySelector(".div_bola15").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor17 = (a) =>{
    console.log(17);
    if(document.querySelector(".div_bola17").style.backgroundColor == "red"){
       document.querySelector(".div_bola17").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(17), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(17);
     document.querySelector(".div_bola17").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor19 = (a) =>{
    console.log(19);
    if(document.querySelector(".div_bola19").style.backgroundColor == "red"){
       document.querySelector(".div_bola19").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(19), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(19);
     document.querySelector(".div_bola19").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor21 = (a) =>{
    console.log(21);
    if(document.querySelector(".div_bola21").style.backgroundColor == "red"){
       document.querySelector(".div_bola21").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(21), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(21);
     document.querySelector(".div_bola21").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor23 = (a) =>{
    console.log(23);
    if(document.querySelector(".div_bola23").style.backgroundColor == "red"){
       document.querySelector(".div_bola23").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(23), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(23);
     document.querySelector(".div_bola23").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const mudaCor25 = (a) =>{
    console.log(25);
    if(document.querySelector(".div_bola25").style.backgroundColor == "red"){
       document.querySelector(".div_bola25").style.backgroundColor = "blue";
       numSelecionados.splice(numSelecionados.indexOf(25), 1); // remove o valor do vetor
    }else{
     numSelecionados.push(25);
     document.querySelector(".div_bola25").style.backgroundColor = "red";
    }
    console.log(numSelecionados);
  }
  const history = useNavigate();
  const RoutePageResult = () =>{ 
    if(numSelecionados.length >= 4){
      history("/PageResult");
    }else{
      alert("Selecione pelo menos 4 números");
    }
    }

  const LimparSelecao = () =>{ 
    document.querySelector(".div_bola1").style.backgroundColor = "red"; mudaCor1();
    document.querySelector(".div_bola3").style.backgroundColor = "red"; mudaCor3();
    document.querySelector(".div_bola5").style.backgroundColor = "red"; mudaCor5();
    document.querySelector(".div_bola7").style.backgroundColor = "red"; mudaCor7();
    document.querySelector(".div_bola9").style.backgroundColor = "red"; mudaCor9();
    document.querySelector(".div_bola11").style.backgroundColor = "red"; mudaCor11();
    document.querySelector(".div_bola13").style.backgroundColor = "red"; mudaCor13();
    document.querySelector(".div_bola15").style.backgroundColor = "red"; mudaCor15();
    document.querySelector(".div_bola17").style.backgroundColor = "red"; mudaCor17();
    document.querySelector(".div_bola19").style.backgroundColor = "red"; mudaCor19();
    document.querySelector(".div_bola21").style.backgroundColor = "red"; mudaCor21();
    document.querySelector(".div_bola23").style.backgroundColor = "red"; mudaCor23();
    document.querySelector(".div_bola25").style.backgroundColor = "red"; mudaCor25();
  }
  

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
                        <div className="div_bola3" onClick={mudaCor3}>
                          <span>03</span>
                        </div>
                        <div className="div_bola5" onClick={mudaCor5}>
                          <span>05</span>
                        </div>
                        <div className="div_bola7" onClick={mudaCor7}>
                          <span>07</span>
                        </div>
                        <div className="div_bola9" onClick={mudaCor9}>
                          <span>09</span>
                        </div>
                        <div className="div_bola11" onClick={mudaCor11}>
                          <span>11</span>
                        </div>
                        <div className="div_bola13" onClick={mudaCor13}>
                          <span>13</span>
                        </div>
                      </div>
                      <br />
                      <div className="div_wrap_bolas">
                        <div className="div_bola15" onClick={mudaCor15}>
                          <span>15</span>
                        </div>
                        <div className="div_bola17" onClick={mudaCor17}>
                          <span>17</span>
                        </div>
                        <div className="div_bola19" onClick={mudaCor19}>
                          <span>19</span>
                        </div>
                        <div className="div_bola21" onClick={mudaCor21}>
                          <span>21</span>
                        </div>
                        <div className="div_bola23" onClick={mudaCor23}>
                          <span>23</span>
                        </div>
                        <div className="div_bola25" onClick={mudaCor25}>
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
                        <button className="btn btn btn-secondary" style={{width:"100%"}} onClick={LimparSelecao}>Limpar selecão</button>
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