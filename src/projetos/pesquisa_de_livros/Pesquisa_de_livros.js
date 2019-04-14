import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Livro from './componentes/Livro';
import Nav from './componentes/NavBar';
import Mensagem from './componentes/Mensagem';

const Pesquisa_de_Livros = () => {
    const [valor, setValor] = useState('')
    const [url, setUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=${valor}`)
    const [resultado, setResultado] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState({erro: false, msg: ''})

    const handleSubmit = evento => {
      evento.preventDefault()
      if(valor === ""){
        handlingError("O campo não pode estar vazio")
        return false;
      }
    }
    const handleChange = event => {
      const valor = event.target.value
      setValor(valor)
    }

    function handlingError(msg){
     setErro({ erro: true , msg: msg})
      setTimeout(() => {setErro({erro: false})}, 3000)
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            setCarregando(true)
            const result = await axios(url);
            setResultado([result.data.items]);
            console.log(resultado)
            setValor("")
          } catch (err) {
            console.log(resultado)
            console.log(err)
          }
          setCarregando(false)
        };
        fetchData();
      }, [url]);

    return ( 
        <div id="book_container">
            <Nav />
            {erro.erro && (<Mensagem texto={erro.msg} /> )}
            { carregando && ( <Mensagem texto="Carregando..." /> )}
            <form id="pesquisa" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={valor} placeholder="Pesquise um livro no Google Books" />
                <button type="submit" onClick={() => setUrl(`https://www.googleapis.com/books/v1/volumes?q=${valor}`)} onTouchStart={() => setUrl(`https://www.googleapis.com/books/v1/volumes?q=${valor}`)}>Pesquisar</button>
            </form>
            <Livro resultado={resultado} />
        </div>
     );
}
 
export default Pesquisa_de_Livros;