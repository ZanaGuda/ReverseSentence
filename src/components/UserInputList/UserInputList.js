import "./UserInputList.css";
const UserInputList = (props) => {
  return (
    <div className="sentences">
      <ul className="sentence-list">
        {props.items.map((item) => (
          <li className="sentence-item" key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInputList;
