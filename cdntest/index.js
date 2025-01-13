'use strict';

const e = React.createElement;
const useState = React.useState;

const Button = ReactBootstrap.Button;
const Form = ReactBootstrap.Form;
const Container = ReactBootstrap.Container;

//https://daily.dev/blog/form-on-react-best-practices

function BasicExample() {
    const [formData, setFormData] = useState({
        theme: '',
        title: '',
        hint: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Theme</Form.Label>
                    <Form.Control type="text" placeholder="theme"
                        name="theme"
                        value={formData.theme}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Theme
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Title
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default BasicExample;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked comment number ' + this.props.commentID;
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(BasicExample, { commentID: commentID })
        );
    });