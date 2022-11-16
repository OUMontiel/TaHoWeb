import Image from 'next/image';
import React from 'react';
import taho_logo from './taho_logo.png';

import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className='topnav'>
                <a href='#' data-toggle='modal' data-target='#myModal'>
                    INICIAR SESIÓN
                </a>
                <div className='topnav-centered'>
                    {/* <NavLink to='/'> */}
                    <Image
                        id='taho_logo'
                        src={taho_logo}
                        width={202}
                        height={88}
                    />
                    {/* </NavLink> */}
                </div>
                <div className='topnav-right'>
                    <a href='#' data-toggle='modal' data-target='#myModal3'>
                        TRABAJA CON NOSOTROS
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
