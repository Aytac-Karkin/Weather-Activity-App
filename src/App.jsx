import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import { uid } from "uid";
import List from "./components/List/List.jsx";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }
  console.log(activities);

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
