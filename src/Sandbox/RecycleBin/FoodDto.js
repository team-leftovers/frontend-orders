import React from "react";
import {render} from "react-dom";

class FoodDto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClassName: 'btn btn-primary',
            buttonClassName2: 'btn btn-primary',
            buttonText: 'State A',
            buttonText2: 'State A',
            orderNumber: 'pending...',
            responseDump: 'empty',
        };
        render()
        {
            return 5;
        }
    }
}