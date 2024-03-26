import { useState } from "react";
import Search from "./Search";

export default function Taks({ tasks }) {
  const [showCompleted, setShowCompleted] = useState(false);
  const [searchText, setSearchText] = useState("");

  function handleCheckboxChange() {
    setShowCompleted(!showCompleted);
  }
  const handleInputTextChange = (inputedText) => {
    setSearchText(inputedText);
  };
  const filteredTasks = tasks.filter((task) => {
    return task.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  });

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => handleInputTextChange(e.target.value)}
        />
        <label>
          <input type="checkbox" onClick={handleCheckboxChange} />
          Show completed tasks
        </label>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.name}>
                <td>
                  {task.completed ? (
                    <span
                      className="completed-task"
                      style={{ textDecoration: "line-through" }}
                    >
                      {task.name}
                    </span>
                  ) : (
                    task.name
                  )}
                </td>
                <td>{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
