import React, {useEffect, useState} from 'react';
import axios from 'axios';


function CreateOrderItem(props) {
    const [orderItem, setOrderItem] = useState('');

    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const orderId = props.orderId, foodId = props.foodId, quantity = props.quantity, additionalInstructions = props.additionalInstructions;
        const createOrderItemDto = {orderId, foodId, quantity, additionalInstructions};
        console.log(createOrderItemDto)
        axios.post('http://localhost:8080/orderitems', createOrderItemDto)
            .then(response =>
            {
                setOrderItem(response.data)
                console.log(response)
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {orderItem.additionalInstructions}
            </div>
        </div>
    );
}


class CreateOrderItem2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articleId: null
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using axios
        const article = {title: 'React POST Request Example'};
        axios.post('https://reqres.in/api/tests', article)
            .then(response =>
                {
                    this.setState({articleId: response.data.id})
                    console.log(response)
                }
            );
    }

    render() {
        const { articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Returned Id: {articleId}
                </div>
            </div>
        );
    }
}

// export default CreateOrderItem;

export {CreateOrderItem};
