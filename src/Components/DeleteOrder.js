import React, {useEffect, useState} from 'react';
import axios from 'axios';

function DeleteOrder(props) {
    const [order, setOrder] = useState('');


    useEffect(() => {
        // PUT request using axios inside useEffect React hook
        const orderId = props.orderId;
        axios.delete('http://localhost:8080/orders/' + orderId)
            .then(response =>
            {
                setOrder(response.data)
                console.log(response)
            })
            .catch(err=>{
                console.log(err);
                console.log('Error Code is: ', err.code);
                if(err.code === "ERR_NETWORK"){console.log('Did you remember to start the server?')};
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">Delete Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {order.id}
            </div>
        </div>
    );
}


export default DeleteOrder;