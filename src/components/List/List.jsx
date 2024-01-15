/* eslint-disable react/prop-types */
function List({ activities, onDeleteActivity }) {
  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.name}</p>
            <button onClick={() => onDeleteActivity(activity.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
