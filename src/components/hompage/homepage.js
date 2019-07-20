import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Link } from 'react-router-dom'
import * as styles from './homepage.module.scss'
 
class Homepage extends Component {

    onUpdate(id) {
        this.props.firestore.update({collection: 'orders', doc: id}, { delivered: true })
    }

    render() {
        const { orders } = this.props
        const newOrders = orders ? orders.filter(order => !order.delivered) : []
        return (
            <div className={styles[`homepage`]}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th width='30%'>Contact Info</th>
                            <th>Order</th>
                            <th>Total</th>
                            <th>Delivered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newOrders && newOrders.length > 0 && newOrders.map((order, idx) => (
                            <tr key={order.id} className={styles[`order-item`]}>
                                <th>{idx}</th>
                                <th width='30%' style={{textAlign: 'start'}} className={styles[`order-item-idx`]}>
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
                                <th className={styles[`order-item-idx`]}>
                                    <input onClick={() => this.onUpdate(order.id)} type='checkbox'></input>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link style={{display: 'inline-block', marginTop: '10px', borderBottom: '1px solid #000'}} to='/history'>History</Link>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        firestore: state.firestore,
        orders: state.firestore.ordered.orders
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'orders'}
    ])
)(Homepage)