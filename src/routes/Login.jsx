import {useRef, useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const email = useRef();
  const senha = useRef();

  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  function validar(){
    for(let i=0;i<usuarios.length;i++){
      if(
        usuarios[i].email == email.current.value &&
        usuarios[i].senha == senha.current.value
      ){
        return true;
      }
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(validar()){
      let token =
        Math.random().toString(16).substring(2)+
        Math.random().toString(16).substring(2)
        sessionStorage.setItem("email", email.current.value);
        sessionStorage.setItem("senha", token);
        //CHAMAR PÁGINA LOGADA
        navigate('/')
    }else{
      alert("E-mail/senha inválidos")
    }

  }


  useEffect(()=>{
    fetch("http://localhost:5000/usuarios/")

    .then((res)=>{
      return res.json();
    })

    .then((res)=>{
      setUsuarios(res);
    })

},[])

  return (
    <section className='container-login'>
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="email">E-mail</label>
        <input 

          type="email"
          id="email"
          ref = {email}
          placeholder='Digite seu E-mail'

         />
      </div>
      <div className='form-group'>
        <label htmlFor="senha">Senha</label>
        <input 

          type="password"
          id="senha"
          ref = {senha}
          placeholder='Digite sua Senha'

         />
      </div>

      <div className='login-btn'>
        <button type='submit' className='login-form-btn'>Login</button>
      </div>

      <ul className='utilidades'>
        <li>
          <span className='text1'>Esqueceu sua senha?</span>
        </li>
        <li>
          <span className='text1'>Não tem conta?</span>
          <Link to='/cadastro' className='text2'>Criar</Link>
        </li>

      </ul>
    </form>

    </section>
  )
}

export default Login