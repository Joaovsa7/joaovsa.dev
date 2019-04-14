import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Pesquisa_de_Livros = () => {
    const [valor, setValor] = useState('')
    const [url, setUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=${valor}`)
    const [resultado, setResultado] = useState({ Livros: [] })
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(url);
          setResultado([result.data.items]);
        };
    
        fetchData();
      }, [url]);

    return ( 
        <div id="book_container">
            <div>
                <input type="text" onChange={(event) => setValor(event.target.value)} placeholder="Pesquise um livro no Google Books" />
                <button type="submit" onClick={() => setUrl(`https://www.googleapis.com/books/v1/volumes?q=${valor}`)}>Pesquisar</button>
            </div>
            { resultado.length > 0 && (
                resultado.map((dados) => (
                    dados.map((livro, index) => (
                        <div>{livro.volumeInfo.title}</div>
                    ))
                ))
            ) }
        </div>
     );
}
 
export default Pesquisa_de_Livros;