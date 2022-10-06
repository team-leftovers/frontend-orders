import * as React from "react";

function NavigationBar(props){

    function handleButtonClick(e){
        props.navigation.navigate(e, {customerId: props.customerId})
    };

    function handleLogout(){
        props.navigation.navigate('Login')
    };
     return(
         <div className="btn-group" role="group" aria-label="Basic example">
             <button
                 type="button"
                 className="btn btn-primary"
                 onClick={e => handleButtonClick("Home")}
             >
                 Home
             </button>
             <button
                 type="button"
                 className="btn btn-secondary"
                 onClick={e => handleButtonClick("CustomerOrders")}
             >
                 Your Orders
             </button>
             <button
                 type="button"
                 className="btn btn-secondary"
                 onClick={e => handleButtonClick("Cart")}
             >
                 Cart
             </button>
             <button
                 type="button"
                 className="btn btn-secondary"
                 // onClick={e => handleButtonClick(e.target.value)}
                 onClick={e => handleButtonClick("Sandbox")}
             >
                 Sandbox
             </button>
             <button
                 type="button"
                 className="btn btn-secondary"
                 // onClick={e => handleButtonClick(e.target.value)}
                 onClick={e => handleLogout()}
             >
                 Log Out
             </button>
         </div>
     );
}
export default NavigationBar