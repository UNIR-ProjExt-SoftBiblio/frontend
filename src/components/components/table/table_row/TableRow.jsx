import React from 'react';

const TableRow = ( {arquivo, link, status} ) => {
    return (
        <tr>
            <td>{arquivo}</td>
            <td><a href="">{status}</a></td>
        </tr>
    );
}
 
export default TableRow;