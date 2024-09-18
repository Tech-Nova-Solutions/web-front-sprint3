import {Link,useParams,useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

const CadastrarUsuario = () => {
    let {id} = useParams();

    const [usuarios, setUsuarios] = useState({
        id,
        email:'',
        senha:''
    });

    const navigate = useNavigate();

    const handleChange =(e)=>{
        setUsuarios({...usuarios,[e.target.name]:e.target.value});
    }

    let metodo = "post";
    if(id){
        metodo = 'put';
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`http://localhost:5000/usuarios/${id ? id:``}`,{
            method: metodo,
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(usuarios),
        }).then(()=>{
            navigate("/login")
        })
        
    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:5000/usuarios/${id}`)
            .then((res)=>{
                return res.json();
            }).then((data) =>{
                setUsuarios(data);
            });

        }
    },[id])

  return (
    <section className="container-cadastro">
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar</h2>
            <label htmlFor="email">E-mail</label>
            <input 
            
            type="email" 
            name="email" 
            placeholder="Digite seu E-mail" 
            value={usuarios.email} 
            onChange={handleChange}
            
            />
            <label htmlFor="password"> Senha </label>
            <input type="password"
                name="senha"
                placeholder="Digite uma senha"
                value={usuarios.senha}
                onChange={handleChange}
            />
            <button type='submit'>Cadastrar</button>
        </form>
    </section>
  )
}

export default CadastrarUsuario