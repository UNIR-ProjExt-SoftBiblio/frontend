import React from 'react';

import styles from './Header.module.css';

const Header = () => {
    return (
        
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <a href="http://www.unir.br/">
                    <img src="https://www.unir.br/uploads/13579246/banner/LOGO_40_ANOS_01_01_2034875835.jpg"/>
                </a>
                <ul>
                    <li><a href="/">Página Inicial</a></li>
                    <li><a href="/resultado">Resultados</a></li>
                </ul>
            </nav>
        </header>

    );
}
 
export default Header;