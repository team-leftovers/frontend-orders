//    return('{\"id\":3,\"name\":\"Skunk Cabbage\",\"price\":5.75,\"description\":\"It\'s supposed to smell that way. Really.\",\"restaurantId\":1,\"restaurant\":1}')


import React from "react";
import App from "../../App";

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'0',
            name:'default_name',
            price: '$42.01',
            description: 'default_desc',
            restaurantId: 'default_rest_id',
            restaurant: 'default_rest',
        };
    }
}

export default Food;