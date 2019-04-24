import React from 'react';
import PropTypes from 'prop-types';

export default function SearchIconMenu({ searchActive, enableSearch, MobileMenuActive }){
    return ( 
        <div className={"SearchIconMenu" + (searchActive ? ' search_active' : '')} >
            <img className={"SearchIcon" + (MobileMenuActive ? ' noEvents' : null)} src={require("../../../static/img/search.png")} onClick={enableSearch} alt="Clique aqui para abrir a barra de pesquisa" />
        </div>
     );
}

SearchIconMenu.propTypes = {
    searchActive: PropTypes.bool.isRequired,
    enableSearch: PropTypes.func.isRequired
}