import React from "react";

class Result extends React.Component {
    render() {
        const { calories } = this.props;

        return (
            <div>
                <h2>Your TDEE is:</h2>
                <p>{Math.round(calories)}</p>
            </div>
        )
    }
}


export default Result;
