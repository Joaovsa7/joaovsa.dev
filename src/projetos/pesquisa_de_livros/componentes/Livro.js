import React from 'react';

const Livro = (props) => {
        
        return ( 
                props.resultado.length > 0 ? (
                        <div className="livros_resultado">
                        { props.resultado.length > 0 !== false && (
                                props.resultado.map((dados) => (
                            dados.map((livro, index) => (
                                <div id="livro">
                                        <div id="conteudo">
                                                <img src={`${livro.volumeInfo.imageLinks.thumbnail === undefined ? '' : livro.volumeInfo.imageLinks.thumbnail} `} alt="livro" />
                                                <p>{livro.volumeInfo.title}</p>
                                        </div>
                                        <div className="rodape">
                                                <a href={livro.volumeInfo.previewLink} target="_blank">Prévia do livro</a>
                                        </div>
                                </div>
                            )))
                            )) }
                        </div>
        
                ) : false
        );
}

export default Livro;