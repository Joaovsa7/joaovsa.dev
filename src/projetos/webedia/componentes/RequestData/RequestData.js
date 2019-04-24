import React, { useEffect, useState, Fragment } from 'react';
import Header from '../Header/Header';
import CardNews from './Card_News/Card_News';
import Footer from '../Footer/Footer';
import LoadingComponent from '../Loading/Loading';
import Container from '../Container/Container';
import ErrorComponent from '../Error/Error';

export default function RequestData(){

    //estado para guardar as noticias
    const [ArticlesNews, setArticlesNews] = useState([]);
    //estado para guardar as informacoes do usuario tais como: pais, pesquisa
    const [country, setCountry] = useState("");
    //estado inicial do loading
    const [loading, setLoading] = useState(false);
    //estado inicial do error component
    const [error, setError] = useState({error: false, msg:'', reload: false})
    //consumindo a api
    async function FetchNews(country_key = null, userText = null, signal){
        console.log(window.location.search)
        setLoading(true)
        //carregar as principais noticias do brasil no momento
        let url = `https://newsapi.org/v2/top-headlines?country=br&pageSize=100&apiKey=4712473a768541adbee8210942d58a42`
        if(country_key){
            url = `https://newsapi.org/v2/top-headlines?country=${country_key}&pageSize=100&apiKey=4712473a768541adbee8210942d58a42`
        }
        else if(userText){
            url = `https://newsapi.org/v2/everything?q=${userText}&pageSize=100&apiKey=4712473a768541adbee8210942d58a42`
        }

        const data = await fetch(url, {signal: signal})
        const News = await data.json()
        if(News.status === "ok"){
            setLoading(false)
            setArticlesNews(News.articles)
        }
        if(News.totalResults === 0){
            setLoading(false)
            setError({error: true, msg: `Lamentamos, mas a busca por ${userText} não encontrou resultados`, reload: true})
            return false
        }
        if(News.status !== "ok"){
            setError(true)
            return false
        }
    }

    useEffect(() => {

        const abortController = new AbortController()
        const signal = abortController.signal

        setError(false)

        FetchNews(null,null, signal);

        return function cleanup(){
            abortController.abort()
        }
    }, [])

    return ( 
            <Fragment>
                <Container>
                    <Header ChangeFetchParams={FetchNews} setCountry={setCountry} setError={setError} />
                    { loading ? ( 
                                <LoadingComponent /> 
                                ) : ( 
                                <CardNews News={ArticlesNews} searchError={error.error} country={country} /> 
                                )
                    }
                </Container>
                <Footer />
                {error.error && <ErrorComponent error={error.error} message={error.msg} reloadPage={error.reload}  /> }
            </Fragment>
    );
}
 
