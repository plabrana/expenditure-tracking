import React from 'react'
import './Today-transactions.css'

class TodayTransactions extends React.Component{
    render() {
        return(
            <div>
                <h2 className="table-title">Today's Transactons</h2>
                <table className="transactions-table">
                    <tbody>
                        <tr className='tt-table'>
                            <th id="tt-table-header">Item</th>
                            <th id="tt-table-header">Price</th>
                            <th id="tt-table-header">Category</th>
                        </tr>
                        <tr>
                            <td id="tt-table-cell">Falopita</td>
                            <td id="tt-table-cell">10</td>
                            <td id="tt-table-cell">Gastos Aleatorios</td>
                        </tr>
                        <tr>
                            <td id="tt-table-cell">Falopita</td>
                            <td id="tt-table-cell">10</td>
                            <td id="tt-table-cell">Gastos Aleatorios</td>
                        </tr>
                        <tr>
                            <td id="tt-table-cell">Falopita</td>
                            <td id="tt-table-cell">10</td>
                            <td id="tt-table-cell">Gastos Aleatorios</td>
                        </tr>
                        <tr>
                            <td id="tt-table-cell">Falopita</td>
                            <td id="tt-table-cell">10</td>
                            <td id="tt-table-cell">Gastos Aleatorios</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodayTransactions;