import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Save from '../Assets/save.png';
import docTop from '../Assets/docTop.png';
import './PageResult.css';
import {numSelecionados} from './MakeGame';



const PageResult = () => {

  const VnumSelecionados = numSelecionados;
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
      console.log("selecaoRoxa: " + selecaoRoxa);
    }
  }
  
  //const carregarSelecao = RandomizarSelecao();
  const verificarSelecao = VerificarSelecao();
    
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
                    <h2 className="n_ballR">{numSelecionados[0]}</h2>
                  </div>
                  <div className="ball_nR">
                    <h2 className="n_ballR">{numSelecionados[1]}</h2>
                  </div>
                  <div className="ball_nR">
                    <h2 className="n_ballR">{numSelecionados[2]}</h2>
                  </div>
                  <div className="ball_nR">
                    <h2 className="n_ballR">{numSelecionados[3]}</h2>
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
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 2</h5>
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
                        <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[9]}>
                          <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[9]}>08</h2>
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
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 3</h5>
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
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 4</h5>
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
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 5</h5>
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
                        <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[9]}>
                          <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[9]}>08</h2>
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
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 6</h5>
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
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 7</h5>
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
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 8</h5>
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
                        <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[9]}>
                          <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[9]}>08</h2>
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
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 9</h5>
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
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 10</h5>
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
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 11</h5>
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
                        <div className={'wrapper searchDiv ' + TipoSelecaoDIVbckgrdColor[9]}>
                          <h2 className={'wrapper searchDiv ' + TipoSelecaoH2bckgrdColor[9]}>08</h2>
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
                  </div>
                  <div className="col">
                    <div className="div_wrap_result">
                      <h5 className="tt_cartela">Aposta 12</h5>
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