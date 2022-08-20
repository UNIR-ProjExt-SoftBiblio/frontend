import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <span></span>
            <p>© CopyRight 2022 - <a href="https://www.unir.br/homepage#"> UNIR </a> - Todos os Direitos reservados</p>
            <p>Created by <a href="http://pedrozle.github.io">Pedro Silveira</a></p>
        </footer>
     );
}
 
export default Footer;