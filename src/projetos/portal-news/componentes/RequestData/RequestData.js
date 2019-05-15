import React, { useEffect, useState, Fragment } from 'react';
import Header from '../Header/Header';
import CardNews from './Card_News/Card_News';
import Footer from '../Footer/Footer';
import LoadingComponent from '../Loading/Loading';
import Container from '../Container/Container';
import ErrorComponent from '../Error/Error';

export default function RequestData(){
    
    //estado para a url, a url precisa de um estado para eu fazer a paginação
    const [fetchParams, setFetchParams]= useState({
        url: '',
        country: '',
        userText: '',
        pageNumber: 1
    })
    //estado para guardar as noticias
    const [ArticlesNews, setArticlesNews] = useState([]);
    //estado para guardar as paginas
    const [pages, setPages] = useState()
    //estado para guardar as informacoes do usuario tais como: pais, pesquisa
    const [country, setCountry] = useState("");
    //estado inicial do loading
    const [loading, setLoading] = useState(false);
    //estado inicial do error component
    const [error, setError] = useState({error: false, msg:'', reload: false})
    
    //consumindo api
    async function FetchNews(country_key = 'br', userText = null, signal, page = 1){

        //LOADING
        setLoading(true)
        let url;
        //carregar as principais noticias do brasil no momento
        url = `https://newsapi.org/v2/top-headlines?country=br&page=${page}&pageSize=7&apiKey=4712473a768541adbee8210942d58a42`
        
        if(country_key){
            url = `https://newsapi.org/v2/top-headlines?country=${country_key}&page=${page}&pageSize=7&apiKey=4712473a768541adbee8210942d58a42`
        }
        else if(userText){
            url = `https://newsapi.org/v2/everything?q=${userText}&page=${page}&pageSize=7&apiKey=4712473a768541adbee8210942d58a42`
        }
        const data = await fetch(url, {signal: signal})
        const News = await data.json()
        //calculando as paginas
        const totalPage = Math.round(News.totalResults / 7)
        setPages(totalPage)
        
        if(News.status === "ok"){
            setLoading(false)
            setArticlesNews(News.articles)
            setFetchParams({ url: url, country: country_key, userText: userText, pageNumber: page })
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
        //quando o usuario solicitar uma nova pagina, o scroll volta para 0
        window.scroll(0,0)
    }
    
    useEffect(() => {
        
        const abortController = new AbortController()
        const signal = abortController.signal
        
        setError(false)
        
        FetchNews('br',null, signal, 1);
        
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
                            <CardNews News={ArticlesNews} searchError={error.error} requestPagination={FetchNews} fetchParams={fetchParams} country={country} totalPage={pages} /> 
                            )
                        }
                </Container>
                <Footer />
                {error.error && <ErrorComponent error={error.error} message={error.msg} reloadPage={error.reload}  /> } 
            </Fragment>
            );
        }