import React, {useEffect, useState} from 'react';
import axios from 'axios';

function UpdateOrder(props) {
    const [order, setOrder] = useState('');


    useEffect(() => {
        // PUT request using axios inside useEffect React hook
        const orderId = props.orderId,
            driverId = props.driverId,
            discountId = props.discountId,
            orderStatus = props.orderStatus,
            deliveryTime = props.deliveryTime,
            totalPrice = props.totalPrice,
            driverRating = props.driverRating;
        const updateOrderDto = {
            driverId,
            discountId,
            orderStatus,
            deliveryTime,
            totalPrice,
            driverRating}
        const headers = {
            // 'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Origin': 'origin',
            'Random-Experimental-Header': 'YES'
        }
        console.log(updateOrderDto)
        axios.put('http://localhost:8080/orders/' + orderId, updateOrderDto)
        // axios.put('https://reqres.in/api/articles/1', updateOrderDto, {headers})
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
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {order.id}
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


class Sandbox2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:2};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Some text was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    ManyWords:
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                    {/*<textarea value={this.state.value} onChange={this.handleChange} />*/}
                    {/*<select value = {this.state.value} onChange={this.handleChange}>*/}
                    {/*    <option value="grapefruit">Grapefruit</option>*/}
                    {/*    <option value="lime">Lime</option>*/}
                    {/*    <option value="poison">Coconut</option>*/}
                    {/*    <option value="mango">Mango</option>*/}
                    {/*</select>*/}

                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}



export default UpdateOrder;