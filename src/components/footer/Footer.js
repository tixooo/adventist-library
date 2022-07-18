import "./Footer.css"
import Container from 'react-bootstrap/Container';
const Footer = () => {
    return (
        <footer id="footer" className="bg-dark width=100 fixed-bottom text-white">
            <Container className="d-flex justify-content-sm-around">
                <span>
                    Социални мрежи
                </span>
            </Container>
        </footer>
    )
}

export default Footer