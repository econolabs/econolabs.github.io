'use strict';

//https://daily.dev/blog/form-on-react-best-practices

const e = React.createElement;
const useState = React.useState;

const Button = ReactBootstrap.Button;
const Form = ReactBootstrap.Form;
const Container = ReactBootstrap.Container;
const Pagination = ReactBootstrap.Pagination;
//https://www.testkarts.com/blog/post/implementing-pagination-in-react-js-using-react-bootstrap-without-using-library
const Alert = ReactBootstrap.Alert;

var parser = new formulaParser.Parser();

var data = [
    [1, 2],
    [6, 7],
    [11, 12,],
    [16, 17],
    [18, 26],
    [21, 20],
    [24, 28],
    [27, 35],
];

//https://support.microsoft.com/en-us/office/statistical-functions-reference-624dac86-a375-4435-bc25-76d659719ffd
let pages = [
    {
        id: 1, formula: "AVERAGE",
        html: `
     Returns the average (arithmetic mean) of the arguments. For example, if the range A1:A20 contains numbers, the formula =AVERAGE(A1:A20) returns the average of those numbers.<br><hr>
     Возвращает среднее (среднее арифметическое) аргументов. Например, если диапазон A1:A20 содержит числа, формула =AVERAGE(A1:A20) возвращает среднее значение этих чисел.
     `},

     {
        id: 2, formula: "AVEDEV",
        html: `
     Returns the average of the absolute deviations of data points from their mean.<br><hr>
     Возвращает среднее абсолютных значений отклонений точек данных от среднего. СРОТКЛ является мерой разброса множества данных.<br>
     Уравнение для среднего отклонения<br>
     <img src='https://cxcs.microsoft.net/static/public/office/ru-ru/2c328fff-b4af-4e42-bb34-4f7bf5e2e85c/ee16ba75f4d39db65ad8550c92983268af136c0b.gif' />
     `},
]


function BasicExample() {
    const [formData, setFormData] = useState({
        theme: '',
        title: '',
        hint: ''
    });
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = number => {
        if (currentPage === number) return;
        setCurrentPage(number);
        // scrollToTop();
    };

    const onPreviousPageClick = () => {
        if (currentPage <= 1) {
            return (changePage(currentPage => currentPage = 1));
        } else {
            changePage(currentPage => currentPage - 1);
        }

    };

    const onNextPageClick = () => {
        changePage(currentPage => currentPage + 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    let itemsPerPage = 1;
    let itemsCount = pages.length;
    const pagesCount = Math.ceil(itemsCount / itemsPerPage);

    let isPageNumberOutOfRange;

    const pageNumbers = [...new Array(pages)].map((_, index) => {
        const pageNumber = index + 1;
        const isPageNumberFirst = pageNumber === 1;
        const isPageNumberLast = pageNumber === pagesCount;
        const isCurrentPageWithinTwoPageNumbers =
            Math.abs(pageNumber - currentPage) <= 2;

        if (
            isPageNumberFirst ||
            isPageNumberLast ||
            isCurrentPageWithinTwoPageNumbers
        ) {
            isPageNumberOutOfRange = false;
            return (
                <Pagination.Item
                    activeLabel=""
                    key={pageNumber}
                    onClick={() => onPageNumberClick(pageNumber)}
                    active={pageNumber === currentPage}
                >
                    {pageNumber}
                </Pagination.Item>
            );
        }

        if (!isPageNumberOutOfRange) {
            isPageNumberOutOfRange = true;
            return <Pagination.Ellipsis key={pageNumber} className="muted" />;
        }

        return null;
    });

    console.log(pages.find(item => item.id === currentPage))

    return (
        <Container>
            <div style={{ display: 'block', width: 700, padding: 30 }}>
                <h4>React-Bootstrap Pagination Component {currentPage}</h4>
                <Pagination>
                    <Pagination.Prev onClick={onPreviousPageClick} />
                    {pageNumbers}
                    <Pagination.Next onClick={onNextPageClick} />
                </Pagination>
            </div>

            <div dangerouslySetInnerHTML={{ __html: pages.find(item => item.id === currentPage)?.html }
                // pages.find(item => item.id === currentPage)?.html
            }
            >
            </div>


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

//export default BasicExample;

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
document.querySelectorAll('.root')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(BasicExample, { commentID: commentID })
        );
    });