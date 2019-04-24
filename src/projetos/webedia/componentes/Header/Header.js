import React, { useState, Fragment } from 'react';
import propTypes from 'prop-types';
import Logo from "../Logo/Logo";
import BurgerMobileMenu from './MobileMenuIcon/BurgerMobileMenu';
import SearchIconMenu from './SearchIcon/SearchIcon';
import SearchBar from './SearchBar/SearchBar';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import OverlayComponent from '../OverlayComponent/Overlay';

export default function Header({ ChangeFetchParams, setCountry }){
    
    const [SearchMobileActive, setSearchMobileActive] = useState(false);
    const [MobileMenuActive, setMobileMenuActive] = useState(false); 
    
    return (
        // A lógica aqui é, se a propriedade SearchMobileActive estiver true, alguns itens irão ter display: none
        <Fragment>
            <header>
                <BurgerMobileMenu searchActive={SearchMobileActive} MobileMenuActive={MobileMenuActive} clickMenu={() => setMobileMenuActive(true)} />
                <Logo logoPath={require("../../static/img/logo.png")} target={""} searchActive={SearchMobileActive} />
                <SearchIconMenu searchActive={SearchMobileActive} enableSearch={() => setSearchMobileActive(true)} MobileMenuActive={MobileMenuActive} />
                <SearchBar setCountry={setCountry} ChangeFetchParams={ChangeFetchParams} SearchActive={SearchMobileActive} setSearchActive={setSearchMobileActive} CloseSearchBar={() => setSearchMobileActive(false)} />
                { MobileMenuActive && <OverlayComponent /> }
            </header>
            <HeaderMenu setCountry={setCountry} MobileMenuActive={MobileMenuActive} ChangeFetchParams={ChangeFetchParams} CloseMenu={() => setMobileMenuActive(false)} />
        </Fragment>
        )
    }

Header.propTypes = {
    ChangeFetchParams: propTypes.func.isRequired,
    setCountry: propTypes.func.isRequired
}