import React from "react";

class DataFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClassName:'btn btn-primary',
            buttonText: 'Ex-Square',
            responseDump: 'pending...',
        };
    }
    render() {
        const {state} = this;
        const {buttonClassName, buttonText, responseDump} = state;

        return(
            <button
                className={buttonClassName}
                onClick={this.getData}
            >
                {buttonText}
            </button>
        )
    }

    getData= () => {
        const { state } = this;
        const { buttonText, responseDump } = state;
        this.setState({ buttonText: 'Requested!'});
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load',
            () => {
                console.log(xhr.responseText)
                this.setState({ responseDump: xhr.responseText});
            });

        xhr.open('GET', 'http://localhost:8080/orders/1');
        xhr.send();
        this.setState({ buttonText: 'Done!'});
    }
}

export default DataFetch;