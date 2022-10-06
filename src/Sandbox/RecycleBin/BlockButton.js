import Button from 'react-bootstrap/Button';
import React from 'react';
import '../../App.css';


//function BlockButton() {
import React from "react";
import Button from "react-bootstrap/Button";

class BlockButton extends React.Component {
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
    }

    render() {
        return (
            <div className="d-grid gap-2">

                <Button
                    style={{width : "col-6" }}
                    // containerViewStyle={{width: '100%'}}
                >
                    Block level button should be wide
                </Button>
            </div>
        );
    }
}

export default BlockButton