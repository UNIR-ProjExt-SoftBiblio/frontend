import React from 'react';

import FileItem from './file/FileItem';

import styles from './FileList.module.css';

const FileList = () => {
    return (
        <div className={styles.fileListContainer}>
            <FileItem/>
            <FileItem/>
            <FileItem/>
            <FileItem/>
            <FileItem/>
            <FileItem/>
        </div>
    );
}
 
export default FileList;