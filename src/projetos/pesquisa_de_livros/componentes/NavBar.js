import React, { useState} from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const [aberta, setAberta] = useState('off')

    return (   
        <aside className={`${aberta === 'off' ? '' : 'aparecer'}`}>
            <div className="menu" onClick={() => setAberta(aberta === 'off' ? 'on' : 'off')}>
                <div className={`${aberta === 'off' ? 'barra' : 'barra fechar'}` } ></div>
                <div className={`${aberta === 'off' ? 'barra' : 'barra fechar'}` } ></div>
                <div className={`${aberta === 'off' ? 'barra' : 'barra fechar'}` } ></div>
            </div>
        </aside>
     );
}
 
export default Nav;