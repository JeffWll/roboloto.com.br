import React from 'react';
import './Login.css';
import Logo from "../Assets/logo.jpg";
import Mail from "../Assets/icon_mail.svg";
import Lock from "../Assets/icon_lock.svg";
import { Link } from "react-router-dom";

var pessoa1 = 'Joao da silva'
var psw = '1234'

var pessoa1 = 'Lara da silva'
var psw = '1234'

var pessoa1 = 'Felipe da silva'
var psw = '1234'


const Login = () => {
  return (
   <>
    <div className="container text-center mt-5 corpo_login">
      <div className="row">
        <div className="col-lg-12">
          <img src={Logo} alt=""  className="img_logo"/>
        </div>
        <div className="col-lg-12 mt-3">
          <h3>Bem vindo(a) novamente.</h3>
          <p>Informe seu Email e Senha</p>
        </div>
        <div className="col-lg-12">
          <form>
            <div class="form-group mb-3" className="div_input">
              <input className="form-control input_form" type="text" placeholder="Email"/>
              <img src={Mail} alt="" />
            </div>
            <div class="form-group mb-3" className="div_input">
              <input className="form-control input_form" type="text" placeholder="Senha"/>
              <img src={Lock} alt="" />
            </div>
            <Link to={"./Dashboard"} class="btn btn-primary btn_login">Login</Link>
          </form>
        </div>
        <div className="col-lg-12 mt-3">
          <div className="row mt-3 mb-4">
            <div className="col">
              <a href="" style={{fontWeight:"bold",fontSize:15}}>[Esqueci a senha]</a>
            </div>
            <div className="col">
            <a href="" style={{fontWeight:"bold",fontSize:15}}>[Primeiro acesso]</a>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn_cad">Quero me cadastrar</button>
        </div>
      </div>
    </div>
    
   </>
  )
}

export default Login