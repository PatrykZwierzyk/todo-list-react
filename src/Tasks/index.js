import "./style.css";

const Tasks = (props) => (
    <ul className="list tasks">
        {props.tasks.map(task => (
            <li
                className={`list__item ${task.done && props.hideDoneTasks ? "list__item--hidden" : ""}`}
            >
                {task.content}
            </li>
        ))}
    </ul>
);

export default Tasks;