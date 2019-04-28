import React from 'react';
import PropTypes from 'prop-types';

export default function CloseBtn({ onClick, MobileMenuActive }){
    return ( 
            <div className={"CloseBtn" + (MobileMenuActive ? ' Menu' : ' SearchBar')}>
                <button type="button" onClick={onClick}>X</button>
            </div>
     );
}

CloseBtn.propTypes = {
    onClick: PropTypes.func.isRequired
}