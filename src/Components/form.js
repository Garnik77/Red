import React from "react";

class Form extends React.Component {
    render() {
        return(
            <div>
                <form onSubmit = {this.props.weatherMethod} >
                     <button>sa</button>
                </form>
            </div>
        );
    }
}
export default Form;