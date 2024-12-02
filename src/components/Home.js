import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux-toolkit/cart-slice";
import { Typewriter } from "react-simple-typewriter";

const products = [
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve V Neck T Shirt",
    price: 9.85,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  {
    id: 19,
    title: "Open Women's Short Sleeve Moisture",
    price: 7.95,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
];

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="landing">
        <div className="intro-text">
          <h1>
            <Typewriter
              cursorColor="#657c58"
              cursorStyle={{}}
              delaySpeed={3000}
              deleteSpeed={80}
              loop={0}
              typeSpeed={120}
              words={["Welcome There!"]}
            />
          </h1>
        </div>
      </div>
      <Container className="my-5">
        <Link to="Products" className="main-title">
          Products
        </Link>
        <Row className="row py-2">
          {products.map((product) => (
            <Col key={product.id} className="flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Link to={`Details/${product.id}`}>
                  <Card.Img
                    className="product-img"
                    variant="top"
                    src={product.image}
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="title">{product.title}</Card.Title>
                  <Card.Text>{product.price} $</Card.Text>
                  <Button
                    variant="success"
                    onClick={() => dispatch(addCart(product))}
                  >
                    Add To Card
                  </Button>
                  <Link
                    to={`Details/${product.id}`}
                    className="ms-2 btn btn-primary"
                  >
                    Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <footer>
        <p>
          Copyright Samir Elanany. All rights reserved.
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/samir-elanany/"
            className="btn btn-primary"
            target="_blank"
          >
            Linked in
          </a>
          <a
            rel="noreferrer"
            href="https://wa.me/+0201211672995"
            target="_blank"
            className="btn btn-success"
          >
            Whatsapp
          </a>
        </p>
      </footer>
    </>
  );
}
export default Home;
