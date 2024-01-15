import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import { uid } from "uid";
import List from "./components/List/List.jsx";

function App() {
  const [activities, setActivities] = useState([]);
  const [data, setData] = useState(null);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === data.isGoodWeather
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        if (!response.ok) {
          throw new Error("Network error");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <p>
          {data?.condition} {data?.temperature} °C
        </p>
      </div>
      <List activities={filteredActivities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
