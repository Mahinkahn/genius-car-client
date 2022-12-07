import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrder] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email])

    return (
        <div>
            <h2 className="text-5xl">You have {orders.length} Orders</h2>
        </div>
    );
};

export default Orders;