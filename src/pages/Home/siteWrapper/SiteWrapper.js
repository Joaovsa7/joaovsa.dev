import React from 'react'

export default function SiteWrapper({ bgColor, children }){
    return (
            <div className="page-container" style={{backgroundColor: bgColor ? 'black' : 'black'}}>
                    {children}         
            </div>
    )
}