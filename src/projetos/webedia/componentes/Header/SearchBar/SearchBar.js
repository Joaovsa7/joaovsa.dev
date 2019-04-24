import React, { useEffect, useRef, useState } from 'react';
import CloseBtn from '../CloseBtn/CloseBtn';

export default function SearchBar({ CloseSearchBar, ChangeFetchParams, SearchActive, setCountry }){

    const [query, setQuery] = useState("")

    //deixando o campos com focus de uma maneira melhor e sem warnings
    const searchBar = useRef(null)
    useEffect(() => {
        if(window.innerWidth > 768){
            searchBar.current.focus()
        }
    }, [])

    function onSubmit(e){
        e.preventDefault();
        if(query === ""){
            alert("O campo não pode estar vazio")
            return false;
        }
        ChangeFetchParams(false, query)
        setCountry("search")
        setQuery("")
        CloseSearchBar()
    }

    function handleChange(e){
        setQuery(e.target.value)
    }

    return (
            <div className={"formBox" + (SearchActive ? ' showing' : '')}>
                <form id="searchForm" onSubmit={onSubmit}>
                    <input type="text" className="inputMobile" value={query} onChange={handleChange} placeholder="Pesquisa" ref={searchBar} />
                    <button type="submit" className="searchSubmitIcon">
                        <img src={require("../../../static/img/search.png")} alt="Ícone de busca" />
                    </button>
                </form>
                <CloseBtn onClick={CloseSearchBar} />
            </div>
     );
}
