import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Livro from './componentes/Livro';
import Nav from './componentes/NavBar';

const Pesquisa_de_Livros = () => {
    const [valor, setValor] = useState('')
    const [url, setUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=${valor}`)
    const [resultado, setResultado] = useState({ Livros: [] })
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await axios(url);
            setResultado([result.data.items]);
            setValor("")
            console.log(resultado)
          } catch (err) {
            console.log(resultado.Livros)
            console.log(err)
          }
        };
        fetchData();
      }, [url]);

    return ( 
        <div id="book_container">
            <Nav />
            <div id="pesquisa">
                <input type="text" onChange={(e) => setValor(e.target.value)} value={valor} placeholder="Pesquise um livro no Google Books" />
                <button type="submit" onClick={() => setUrl(`https://www.googleapis.com/books/v1/volumes?q=${valor}`)}>Pesquisar</button>
            </div>
            <Livro resultado={resultado} />
        </div>
     );
}
 
export default Pesquisa_de_Livros;