import React from 'react';
import CloseBtn from '../CloseBtn/CloseBtn';

export default function HeaderMenu({ MobileMenuActive, CloseMenu, ChangeFetchParams, setCountry }){

    function getReqCountryId(e){
        e.preventDefault();
        ChangeFetchParams(e.target.id, false)
        setCountry(e.target.id)
        MobileMenuActive && CloseMenu()
    }

    return ( 
        <nav className={MobileMenuActive ? 'enter' : ''}>
            <ul>
                {
                    MenuItems.map(({id, req_country_id, name}) => (
                        <li key={id} id={req_country_id} onClick={getReqCountryId}>{name}</li>
                    ))
                }
            </ul>
           {MobileMenuActive ? <CloseBtn MobileMenuActive={MobileMenuActive} style={{display:"none"}} onClick={CloseMenu} /> : ''}
        </nav>
    );
}

const MenuItems = [
    {
        id: 1 + Math.random().toString(36).substring(7),
        req_country_id: "",
        name: 'Notícias em Destaque'
    },
    {
        id: 2 + Math.random().toString(36).substring(7),
        req_country_id: 'br',
        name: 'Notícias do Brasil'
    },
    {
        id: 3 + Math.random().toString(36).substring(7),
        req_country_id: 'us',
        name: 'Notícias dos EUA'
    },
    {
        id: 4 + Math.random().toString(36).substring(7),
        req_country_id: 'ar',
        name: 'Notícias da Argentina'
    },
    {
        id: 5 + Math.random().toString(36).substring(7),
        req_country_id: 'fr',
        name: 'Notícias da França'
    }

]
