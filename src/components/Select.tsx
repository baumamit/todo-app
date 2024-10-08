export const Select = () => {
    return (
        <div className="flex flex-row">
        <label htmlFor="priorityToDo">Priority:
            <input type="range" list="markers" name="priorityToDo" id="priorityToDo" min="0" max="2" step="1" />
        </label>


        <select name="pets" id="priorityToDo">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>

        {/* <datalist id="markers" className="slider-vertical">
            <option value="0" label="Low"></option>
            <option value="1" label="Medium"></option>
            <option value="2" label="High"></option>
        </datalist> */}
    </div>
    )
}