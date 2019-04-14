import React from 'react';

const Livro = (props) => {
        
        return ( 
                props.resultado.length ? (
                        <div className="livros_resultado">
                                { props.resultado.map((dados) => (
                                        dados !== undefined && (
                                                dados.map((livro, index) => (
                                                        <div id="livro">
                                                                <div id="conteudo">
                                                                        <img src={`${livro.volumeInfo.imageLinks === undefined ? false : livro.volumeInfo.imageLinks.thumbnail}`} alt={`${livro.volumeInfo.imageLinks === undefined ? 'Este livro não tem uma imagem de capa' : livro.volumeInfo.imageLinks.title}`} />
                                                                        <p>{livro.volumeInfo.title}</p>
                                                                        <p>{console.log(livro)}</p>
                                                                </div>
                                                                <div className="rodape">
                                                                        <a href={livro.volumeInfo.previewLink} target="_blank">Prévia do livro</a>
                                                                </div>
                                                        </div>
                                                )
                                        )
                                ))
                                ) }
                        </div>
        
                ) : false
        );
}

export default Livro;