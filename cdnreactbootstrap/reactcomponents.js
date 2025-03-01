// standard IIFE
(function () {

    const useState = React.useState;
    var Form = ReactBootstrap.Form;
    //   const e = React.createElement;

    function SelectBasicExample({ onChange, options }) {
        return (
            <Form.Select
                aria-label="Default select example"
                className="m-1"
                onChange={onChange}    >

                       
                <option>Open this select menu</option>
                {options.map(item => {
                    return <option value={item.id}>{item.label}</option>
                })}

            </Form.Select>
        );
    }

    function AddTask({ onAddTask }) {
        const [text, setText] = useState('');
        return (
            <>
                <input
                    placeholder="Add task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={() => {
                        setText('');
                        onAddTask(text);
                    }}>
                    Add
                </button>
            </>
        );
    }

    window.AddTask = AddTask;
    window.SelectBasicExample = SelectBasicExample
})();