import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import * as styles from './homepage.module.scss'
 
class Homepage extends Component {

    render() {
        const { orders } = this.props
        console.log(orders)
        return (
            <div className={styles[`hompage`]}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Contact Info</th>
                            <th>Order</th>
                            <th>Total</th>
                            <th>Delivered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length > 0 && orders.map((order, idx) => (
                            <tr key={order.id} className={styles[`order-item`]}>
                                <th>{idx}</th>
                                <th className={styles[`order-item-idx`]}>
                                    <h5>Name: {order.name}</h5>
                                    <h5>Address: {order.address}</h5>
                                    <h5>Number: {order.contactNumber}</h5>
                                </th>
                                <th className={styles[`order-item-idx`]}>
                                    <div>
                                        {order.items && order.items.map((item, idx) => (
                                            <p key={idx}>{item.name} * {item.number}</p>
                                        ))}
                                    </div>
                                </th>
                                <th className={styles[`order-item-idx`]}>
                                    <h5>{order.total} €</h5>
                                </th>
                                <th className={styles[`order-item-idx`]}>{`${order.delivered}`}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        ) 
    }
    
}

const mapStateToProps = state => {
    return {
        orders: state.firestore.ordered.orders
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'orders'}
    ])
)(Homepage)