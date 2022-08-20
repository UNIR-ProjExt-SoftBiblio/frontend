import React from 'react';

import styles from './Table.module.css';
import TableRow from './table_row/TableRow';

const Table = () => {
    return (
        <div className={styles.tableContainer}>
            <p>Últimas Ementas Enviadas</p>
            <div className={styles.table_header}>
                <table>
                    <thead>
                        <tr>
                            <th>ARQUIVO</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className={styles.table_scroll}>
                <table>
                    <tbody>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                        <TableRow arquivo="Ementa_CComp_ihc.pdf" link="" status="PROCESSANDO"/>
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}
 
export default Table;