import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux-toolkit/products-slice";
import { addCart } from "../redux-toolkit/cart-slice";
import { Link } from "react-router-dom";
import ButtonTop from "./button-top";

function Products() {
  const { items: products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [top, setTop] = useState("");

  useEffect(() => {
    dispatch(getProducts());
    window.scroll(0, 0);
  }, [dispatch]);

  window.onscroll = () => {
    if (window.scrollY > 400) {
      setTop("show");
    } else {
      setTop("");
    }
  };

  if (loading) {
    return (
      <section className="loader-center">
        <div className="loader"></div>
      </section>
    );
  }

  return (
    <>
      <Container className="py-5">
        <Row className="row py-5">
          {products.map((product) => (
            <Col key={product.id}>
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
                  <Card.Text>{product.price}$</Card.Text>
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
      <ButtonTop top={top} />
    </>
  );
}

export default Products;
