import React, { useState, useEffect } from 'react';

function PaginationComponent({ totalPage, fetchParams, requestPagination }){

    const [pages, setPagesArray] = useState([]);
    const array = []

    function calculatePage(totalPage){
        //é necessária esta verificacao pq se o usuario pesquisar alguma coisa, a api dá mais de 4mil resultados
        if(totalPage > 10){
            totalPage = 10;
        }
        for(let i = 0; i < totalPage; i++){
            array.push(i + 1)
            setPagesArray(array)
       }
    }

    useEffect(() => {
        if(typeof totalPage !== undefined){
            calculatePage(totalPage)
        }
        console.log(array)
    }, [])

    //destructuring para pegar os valores
    const { country, userText, pageNumber } = fetchParams

    console.log(pageNumber)
    console.log(totalPage)

    return (
        <React.Fragment>
            <div className="pagination">
                <div id="items">
                        <span className={pageNumber == 1 ? "item hide" : "item"} style={{transform: "matrix(-1, 0, 0, 1, 0, 0)"}} onClick={pageNumber == 1 ? null : () => requestPagination(country, userText ,null, pageNumber - 1)}>>></span>
                        {
                            pages.map((pagina, index) => (
                                //para deixar o item ativo, usei a logica se o index do numero for o mesmo que o page number,
                                //ele ficará atvo
                                <span key={index} className={index + 1 === pageNumber ? 'item active-page' : 'item'} onClick={() => requestPagination(country, userText ,null, index + 1)}>{pagina}</span>
                            ))
                        }
                        <span className={pageNumber == totalPage || pageNumber == 10 ? "item hide" : "item"} onClick={pageNumber < totalPage ? () => requestPagination(country, userText ,null, pageNumber + 1) : null}>>></span>
                </div>
            </div>
        </React.Fragment>
    )
    
}

export default React.memo(PaginationComponent)