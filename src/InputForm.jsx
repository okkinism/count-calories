import React from "react";
import RadioButton from "./RadioButton";
import CalculateButton from "./CalculateButton";

class InputForm extends React.Component {
  render() {
    const {
      gender,
      age,
      height,
      weight,
      activity,
      onInputChange,
      onCalculate,
    } = this.props;

    return (
      <>
        <h2>Input your information to calculate your TDEE</h2>
        <div>
          <label>
            Gender:
            <RadioButton
              label="Male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={onInputChange}
            />
            <RadioButton
              label="Female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={onInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={age}
              onChange={onInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Height:
            <input
              type="number"
              name="height"
              value={height}
              onChange={onInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Weight:
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={onInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Activity:
            <select name="activity" value={activity} onChange={onInputChange}>
              <option value="sedentary">Sedentary</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
            </select>
          </label>
        </div>

        <CalculateButton onClick={onCalculate} />
      </>
    );
  }
}

export default InputForm;
