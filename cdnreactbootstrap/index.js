'use strict'

const e = React.createElement;
const useState = React.useState;

var Alert = ReactBootstrap.Alert;
let AddTask = window.AddTask;
let SelectBasicExample = window.SelectBasicExample;

function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  function onAddTask(task) {
    console.log(task)
  }

  function onChange(e) {
    console.log(e.target.value)
  }
  return (
    <>
      <Alert>City quiz</Alert>
      <AddTask onAddTask={onAddTask}/>
      <SelectBasicExample
       options={[
        {id: "10.1", label:"10.1"},
        {id: "43", label:"43"},
        {id: "20", label:"20"},
        {id: "90.2", label:"90.2"},
       ]}
        onChange={onChange}/>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

// Find all DOM containers, and render our component into them.
var containers = document.querySelectorAll('.root')
containers.forEach(domContainer => {
    // Read the user ID from a data-* attribute.
 //   const userid = domContainer.dataset.userid
    // render the component into the DOM
    ReactDOM.render(
      e(Form
  //      , { userid: userid}
    ),
      domContainer
    )
});