import React, {useEffect, useState} from 'react';
import useCollapse from 'react-collapsed';
import '../App.css';



function MutableOrderItem(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [buttonData, setButtonData] = useState('Update');
    // const [orderItem, setOrderItem] = useState(props.orderItem);
    const [formQuantity, setQuantity] = useState(props.orderItem.quantity);
    // const itemFood = props.orderItem.food;
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});
    //let orderItem = orderItemState;

    function handleOnClick() {
        // Do more stuff with the click event!
        // Or don't!
        setExpanded(!isExpanded);
        //upData();
    }
    function handleButtonClick(){
        // setButtonData(buttonData === 'State A' ? 'State B' : 'State A')
        //setQuantity(event.target.value);
        // let myOrder = orderItem;
        // myOrder.quantity = formQuantity;
        // setOrderItem(myOrder);
        // props.onItemUpdate(props.itemArrayElement, orderItem, formQuantity);
        props.onItemUpdate(props.itemArrayElement, formQuantity);
    };

    // function handleSubmit(event) {
    //     let myItem = orderItem;
    //     myItem.quantity = event.target.value;    //get the "value" from the thing that triggered the event, and store it to orderItem.quantity
    //     // orderItem.quantity = 12;    //get the "value" from the thing that triggered the event, and store it to orderItem.quantity
    //     setOrderItem(myItem);
    // }
    // handleSubmit(event) {
    //     alert('Some text was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }
    //setQuantity(e.target.value)

    function handleChange(event) {
        setQuantity(event.target.value);
        // let myItem = orderItem;
        // myItem.quantity = event.target.value;
        // setOrderItem(myItem);
        // console.log("orderItem", orderItem);
        // props.onItemUpdate(props.itemArrayElement, orderItem);
    }
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }
    // <div className="row">
    //                         <div className="bg-l-buffer col-2"></div>
    //                         <div className="bg-l-order-pane col-8 px-5">
    //                             New Test Space <br/>
    //                             {/*<FoodDataBox/>*/}
    //                         </div>
    //                         <div className="bg-l-buffer col-2"></div>
    //                     </div>
    //


    //            <form onSubmit={this.handleSubmit}>
    //                 <label>
    //                     ManyWords:
    //                     <input type="number" value={this.state.value} onChange={this.handleChange} />
    //                     {/*<textarea value={this.state.value} onChange={this.handleChange} />*/}
    //                     {/*<select value = {this.state.value} onChange={this.handleChange}>*/}
    //                     {/*    <option value="grapefruit">Grapefruit</option>*/}
    //                     {/*    <option value="lime">Lime</option>*/}
    //                     {/*    <option value="poison">Coconut</option>*/}
    //                     {/*    <option value="mango">Mango</option>*/}
    //                     {/*</select>*/}
    //
    //                 </label>
    //                 <input type="submit" value="Submit" />
    //             </form>


    return(
    <div className="collapsible" >
        <div className="row">
            <div className="card-header col-2" {...getToggleProps({onClick: handleOnClick})}>
                <h4>
                    {props.orderItem.food.name}
                    </h4>
            </div>
            <div className="card-header col-3" {...getToggleProps({onClick: handleOnClick})}>
                <h4>Quantity:{props.orderItem.quantity}</h4>
            </div>
            <div className="card-header col-4">
                <form className="form-inline">
                    <label>
                        {/*<h4>Quantity:{orderItem.quantity}</h4>*/}
                        <input
                            type = "number"
                            value = {formQuantity}
                            // value = {orderItem.quantity}
                            // onChange={(e) => setQuantity(e.target.value)}
                            onChange={handleChange}
                        />

                        {/*<input type="number" value={formQuantity} onChange={handleChange} />*/}
                    </label>
                    {/*<input type="submit" value="Update" />*/}
                </form>
            </div>
            <div className="card-header col-2">
                <button
                    className={'btn btn-secondary'}
                    onClick={handleButtonClick}
                >
                    {buttonData}
                </button>
            </div>
            <div className="card-header col-1">
                <h4>
                    ${props.orderItem.quantity * props.orderItem.food.price}
                </h4>
            </div>

        </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {showFood(props.orderItem)}
                </div>
            </div>
        </div>
    );


}

function showFood(orderItem) {
    return (
        <div>
            id: {orderItem.id} <br/>
            name: {orderItem.food.name} <br/>
            quantity: {orderItem.quantity} <br/>
            price: {orderItem.food.price} <br/>
            description: {orderItem.food.description} <br/>
            restaurant Id: {orderItem.food.restaurantId} <br/>
            Additional Instructions: {orderItem.additionalInstructions}<br/>
            restaurant: {orderItem.food.restaurant} <br/>
        </div>
    )
}

export default MutableOrderItem;
