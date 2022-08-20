import React from 'react';

import DragnDropFile from '../DragnDropFile/DragnDropFile';
import Checkbox from '../checkbox/Checkbox';
import Spinner from '../spinner/Spinner';
import FileList from '../fileList/FileList';

import styles from './Upload.module.css';

const Upload = () => {

    return ( 
        <div className={styles.uploadContainer}>
            
            <p>Enviar uma nova ementa</p>
            <div className={styles.experimental}>
                <div className={styles.experimental_titulo}>
                    <p>Experimental</p>
                </div>
                <form itemID='form_spinners'>
                    <Checkbox/>
                    <Spinner label="Curso" width="cem_width"/>
                    <div className={styles.form_row}>
                        <Spinner label="Disciplina" width="cinquenta_width"/>
                        <Spinner label="Período" width="cinquenta_width"/>
                    </div>
                </form>
            </div>
            <div className={styles.uploadContent}>
                <DragnDropFile/>
                <FileList />
            </div>
        </div>
    );
}
 
export default Upload;