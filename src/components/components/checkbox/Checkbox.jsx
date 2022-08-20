import React from 'react';

import styles from './Checkbox.module.css';

const Checkbox = () => {

    return (
        <div className={styles.checkboxContainer}>
            <input type="checkbox" itemID='' />
            <p>Preenchimento Automático</p>
        </div>
    );
}
 
export default Checkbox;