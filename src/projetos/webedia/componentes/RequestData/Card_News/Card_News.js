import React, { Fragment, useState } from 'react';
import LoadMoreBtn from './LoadMoreOrLessBtn/LoadMoreOrLessBtn';

export default function NewsContainer({ News, country }){

    const [maxNews, setNewsNumber] = useState(7)

    function reduceDescription(description){
        //esta funcao vai reduzir a descricao da noticia quando encontrar o primeiro ponto final
        //caso nao haja nenhuma descricao vindo da api, ela vai sugerir que o usuario clique no titul da noticia para lê-la
        //ou se não houver ponto final, cortar a string até 120 caracteres
        if(description.length < 100){ 
            const findPoint = description.indexOf(".")
            if(findPoint !== -1){
                return description.slice(0, findPoint).concat(".")
            }
        }
        if(description.length <= 0){
            return description.concat("Esta notícia não contém uma descrição, clique no título para acessá-la por completo.")
        }
        else{
            return description.slice(0, 120).concat("...")
        }
        
    }
    
    //formatando a data para o padrao brasileiro, DD/MM/YYYY
    function formatPublishedAt(publishedAt){
        return publishedAt.split('T', 1).toString().split("-").reverse().toString().replace(/,/g, "/")
    }
    
    //informar para o usuario que a fonte de noticia
    function informCountryToUser(country){
        switch(country){
            case "":
            case "br": 
                return country = "do Brasil"
            case "us":
                return country = "dos Estados unidos"
            case "ar":
                return country = "da Argentina"
            case "fr":
                return country = "da França"
            case "search":
                return country = "baseadas em sua pesquisa"
            default:
        }
    }

    //infelizmente eu não pude fazer o componente de paginação como eu queria,
    //eu não queria simplesmente copiar codigos da internet e sim fazer o meu... 
    //portando como alternativa criei o botão de "carregar mais" sei que foge do escopo do projeto, mas espero que compreendam.

    //formatando a fonte, algumas pesquisas dão o site completo + outras informações, aqui estou recortando
    //o source caso haja .com.br (estou indentificando isso pelo o ponto final)
    //Como algumas notícias não possuem o autor no json, preciso verificar
    return ( 
            <Fragment>
                <h1>{`As principais notícias ${informCountryToUser(country)}`}</h1>
                <section className="News_container">
                    {
                        News.slice(0, maxNews).map(({ author, description, publishedAt, title, url, urlToImage }, index) => (
                            <a className={"News"} key={index} href={url} target="_blank" rel="noopener noreferrer">
                                <div className="imgBox">
                                    <img alt="Imagem da news" src={urlToImage} />
                                </div>
                                <div className="infos">
                                    {publishedAt ? ( <span>{formatPublishedAt(publishedAt)}</span> ) : 'Sem data'}
                                    <h3>{title}</h3>
                                    <p className="description">{description ? ( reduceDescription(description) ) : 'Esta matéria não possue uma descrição'}</p>
                                    <p className="author">{author ? ( `POR: ${author}` ) : 'POR: DESCONHECIDO'}</p>
                                </div>
                            </a>
                            ))    
                    } 
                    {maxNews > 7 && <LoadMoreBtn text={"Mostrar menos notícias"} onClick={() => setNewsNumber(maxNews - 7)} />}
                    <LoadMoreBtn onClick={() => setNewsNumber(maxNews + 7)} text={"Mostrar mais notícias"} />
                </section>
            </Fragment>
        );
}
        
// Dados que vou consumir da API
//author
//description
//publishedAt
//title
//url
//urlToImage