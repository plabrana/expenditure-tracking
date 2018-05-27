import React from 'react';
import './Transactions-table.css';
import firebase from "firebase";


class Transactions extends React.Component{
    render() {
        return(
            <table className='table'>
                <tr>
                    <th className='date-th'>Date</th>
                    <th className='item-th'>Item</th>
                    <th className='price-th'>Price</th>
                    <th className='category-th'>Category</th>
                </tr>
                <tr>
                    <td>January</td>
                    <td>Falopita</td>
                    <td>10</td>
                    <td>Gastos Aleatorios</td>
                </tr>
                <tr>
                    <td>January</td>
                    <td>Falopita</td>
                    <td>10</td>
                    <td>Gastos Aleatorios</td>
                </tr>
                <tr>
                    <td>January</td>
                    <td>Falopita</td>
                    <td>10</td>
                    <td>Gastos Aleatorios</td>
                </tr>
                <tr>
                    <td>January</td>
                    <td>Falopita</td>
                    <td>10</td>
                    <td>Gastos Aleatorios</td>
                </tr>
            </table>
        )
    }
}

export default Transactions;