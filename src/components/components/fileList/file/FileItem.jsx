import React from 'react';

import styles from './FileItem.module.css';

const FileItem = () => {
    return (
        <div className={styles.fileItemContainer}>
            <p>Icone</p>
            <p>Titulo</p>
            <p>progresso</p>
        </div>
    );
}
 
export default FileItem;