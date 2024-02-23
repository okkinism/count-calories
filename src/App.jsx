import React, { Component } from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import Result from "./Result";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      age: 0,
      height: 0,
      weight: 0,
      activity: "sedentary",
      result: 0,
    };
  }

  handleCalculate = () => {
    const { gender, age, height, weight, activity } = this.state;
    let bmr;

    if (gender === "male") {
      bmr = 66.5 + 13.8 * weight + 5.0 * height - 6.8 * age;
    } else if (gender === "female") {
      bmr = 665.1 + 9.6 * weight + 1.9 * height - 4.7 * age;
    }

    const activityFactor = {
      sedentary: 1.2,
      moderate: 1.55,
      active: 1.725,
    };

    const tdee = bmr * activityFactor[activity];
    this.setState({ result: tdee });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { result, gender, age, height, weight, activity } = this.state;

    return (
      <div>
        <Header />
        <InputForm
          gender={gender}
          age={age}
          height={height}
          weight={weight}
          activity={activity}
          onInputChange={this.handleInputChange}
          onCalculate={this.handleCalculate}
        />
        <Result calories={result} />
      </div>
    );
  }
}

export default App;
