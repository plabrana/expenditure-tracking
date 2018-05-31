import React from 'react';
import './Transactions-table.css';


class Transactions extends React.Component{
    render() {
        return(
            <table className='table'>
                <tbody>
                    <tr>
                        <th className='t-date-th'>Date</th>
                        <th className='t-item-th'>Item</th>
                        <th className='t-price-th'>Price</th>
                        <th className='t-category-th'>Category</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Transactions;