import { useState } from "react";

function Form({ onAddActivity }) {
  const [activity, setActivity] = useState({
    name: "",
    isForGoodWeather: false,
  });
  function handleChange(event) {
    setActivity({ ...activity, name: event.target.value }); //greift auf den Wert im inputfeld zu
  }

  function handleCheck(event) {
    setActivity({ ...activity, isForGoodWeather: event.target.checked });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddActivity(activity);
    setActivity({ name: "", isForGoodWeather: false });
  }

  // console.log(activity);

  return (
    <>
      <h1>Add new Activity</h1>
      <form>
        <div>
          <label htmlFor="activityName">Name: </label>
          <input
            type="text"
            id="activityName"
            name="name"
            onChange={handleChange}
            value={activity.name}
            required
          />
        </div>
        <div>
          <label htmlFor="goodWeatherActivity">Good-weather activity: </label>
          <input
            type="checkbox"
            id="goodWeatherActivity"
            name="isForGoodWeather"
            onChange={handleCheck}
            checked={activity.isForGoodWeather}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
