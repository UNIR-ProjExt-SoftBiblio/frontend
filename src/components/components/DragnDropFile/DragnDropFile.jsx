import React, { useState } from 'react';

import styles from './DragnDropFile.module.css';

const DragnDropFile = ( {isMultipleAllowed} ) => {

    const [dragActive, setDragActive] = useState(false);
    const inputRef = React.useRef(null);
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
          setDragActive(true);
        } else if (e.type === "dragleave") {
          setDragActive(false);
        }
        console.log(dragActive)
    };

    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) { //ENVIAR PARA O BACK
        }
    };

    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            // at least one file has been selected so do something
            // handleFiles(e.target.files);
        }
    };

    const onButtonClick = () => {
        inputRef.current.click();
      };

    return (
        <form className={styles.form_file_upload} onDragEnter={handleDrag} onClick={onButtonClick} onSubmit={(e) => e.preventDefault()}>
            <input ref={inputRef} type="file" className={styles.input_file_upload} multiple={isMultipleAllowed} onChange={handleChange} />
            <label className={dragActive ? styles.label_file_upload + ' ' + styles.drag_active : styles.label_file_upload} htmlFor="input-file-upload">
                <div>
                    <p>Selecione ou Arraste um arquivo!</p>
                    <button className={styles.upload_button} onClick={onButtonClick}></button>
                </div> 
            </label>
            { dragActive && 
                <div className={styles.drag_file_element} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>
            }
        </form>
    );
}
 
export default DragnDropFile;
