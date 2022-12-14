import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import Logo from "../Assets/logo.png";
import Mail from "../Assets/icon_mail.svg";
import Lock from "../Assets/icon_lock.svg";
import { Link } from "react-router-dom";


const sheetID = "1z3qKMIpJng82Krai2x2gWnUOGcxrgG8G8ROiARcCUiw";
const base = `https://docs.google.com/spreadsheets/d/1z3qKMIpJng82Krai2x2gWnUOGcxrgG8G8ROiARcCUiw/gviz/tq?`;
const sheetName = "users";
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
var Data = null;
document.addEventListener('DOMContentLoaded', JSONProcessing);


function JSONProcessing(){
  //console.log('ready');
  fetch(url)
  .then(res => res.text())
  .then(rep => {
    const js0 = JSON.parse(rep.substring(47).slice(0, -2));
    Data = JSON.parse(rep.substring(47).slice(0, -2));
    console.log(js0);
    js0.table.cols.forEach((heading) => {
      //console.log(heading);
    });
  })
}

const users = [
  {
    username: 'admin1',
    password: '12345678'
  },
  {
    username:'admin2',
    password:'012345678'
  }
];

var data = {
  username: '',
  password: ''
};


const Login = () => {
 
  const [message] = useState('');

  const history = useNavigate();

  const handleSubmit = () => {
    ///checkUser();
    checkUserAPI();
  }

  const routeChange = () =>{ 
    history("./Dashboard");}

  const checkUser = () => {
    const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
    if(usercheck) {
      console.log("Login successful");
      
      routeChange();

    }else {
      console.log("Wrong password or username");
      alert("Senha Incorreta!");
    }
    console.log(usercheck);
  }

  const checkUserAPI = () => {

    //Data.table.rows.forEach((row) => {
      //console.log(row.c);
      //console.log("EMAIL: " + row.c[1].v + "  EMAIL INPUTED: " + data.username); // email
      //console.log("SENHA: " + row.c[3].v + "  PSW INPUTED: " + data.password); // senha
      //var email = row.c[1].v.toString();
      //var psw = row.c[3].v.toString();
      //if(email === data.username && psw === data.password){
       // console.log("LOGGEEEEEED!!!!!!!!!"); 
      //}
    //});

    const usercheck = Data.table.rows.find(row => (row.c[1].v.toString() === data.username && row.c[3].v.toString() === data.password));
    if(usercheck) {
      console.log("Login successful");
      
      routeChange();
  
    }else {
      console.log("Wrong password or username");
      alert("Senha Incorreta!");
      console.log(data.username);
      console.log(data.password);
    }
    console.log(usercheck);
  }

  const handleEmailChange = event => {
    data.username = event.target.value;
    console.log("Valor Email Inputado");
    //console.log(data.username);
  }
  const handlePswChange = event => {
    data.password = event.target.value;
    console.log("Valor Psw Inputado");
    //console.log(data.password);
  }

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
          <form onSubmit={handleSubmit}>
            <div class="form-group mb-3" className="div_input">
              <input className="form-control input_form" type="text" placeholder="Email" onChange={handleEmailChange}/>
              <img src={Mail} alt="" />
            </div>
            <div class="form-group mb-3" className="div_input">
              <input className="form-control input_form" type="password" placeholder="Senha" onChange={handlePswChange}/>
              <img src={Lock} alt="" />
            </div>
            <button type="submit" class="btn btn-primary btn_cad">Logar</button>
              {/*<Link type="submit" to={"./Dashboard"} class="btn btn-primary btn_login">Login</Link>*/}
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
          {/*<button type="submit" class="btn btn-primary btn_cad">Quero me cadastrar</button>*/}
        </div>
      </div>
    </div>
    
   </>
  )
}

export default Login