import React from 'react';
import './Today-transactions.css'

class TodayTransactions extends React.Component{
    render() {
        return(
            <div>
                <h2 className="table-title">Today's Transactons</h2>
                <table className="transactions-table">
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                        <tr>
                            <td>Falopita</td>
                            <td>10</td>
                            <td>Gastos Aleatorios</td>
                        </tr>
                        <tr>
                            <td>Falopita</td>
                            <td>10</td>
                            <td>Gastos Aleatorios</td>
                        </tr>
                        <tr>
                            <td>Falopita</td>
                            <td>10</td>
                            <td>Gastos Aleatorios</td>
                        </tr>
                        <tr>
                            <td>Falopita</td>
                            <td>10</td>
                            <td>Gastos Aleatorios</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodayTransactions;