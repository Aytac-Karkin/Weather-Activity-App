function List({ activities }) {
  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
