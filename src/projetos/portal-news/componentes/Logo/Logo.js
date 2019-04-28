import React from 'react';
import PropTypes from 'prop-types';
import LogoTipo from '../../../../pages/components/Logo/Logo'


export default function Logo({href,searchActive, logoPath, target, MobileMenuActive}){
    return ( 
            <a href={href} className={"portal-news" + (searchActive || MobileMenuActive ? ' search_active' : '')} target={target} 
            rel={`${target ? "noopener noreferrer" : false}`}>
                <LogoTipo link="/projetos/portal-news" />
            </a>
     );
}
 
Logo.propTypes = {
    href: PropTypes.string.isRequired,
    searchActive: PropTypes.bool.isRequired,
    logoPath: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired
}

Logo.defaultProps = {
    href: '/',
    searchActive: false
}