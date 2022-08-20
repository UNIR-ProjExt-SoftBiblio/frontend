import React from 'react';

import styles from './Spinner.module.css';


const Spinner = ( {label, width} ) => {


    return (
        <div className={`${styles[width.toLowerCase()]}`}>
            <p>{label}</p>
            
            <select name="curso" id="">

                <option>Ciencia da Computação</option>
                <option>Ciencia da Computação</option>
                <option>Ciencia da Computação</option>
                <option>Ciencia da Computação</option>
                <option>Ciencia da Computação</option>
                <option>Ciencia da Computação</option>
            </select>
        </div>
    );
}
 
export default Spinner;