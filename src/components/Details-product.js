import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "../redux-toolkit/cart-slice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductDataById } from "../Apis";

const getProductId = async (DetailsId, setProduct, setLoading) => {
  setLoading(true);
  try {
    const data = await getProductDataById(DetailsId);
    setProduct(data);
  } catch (err) {
    console.log(err);
    setProduct(null);
  } finally {
    setLoading(false);
  }
};

function DetailsProduct() {
  const dispatch = useDispatch();
  let { DetailsId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductId(DetailsId, setProduct, setLoading);
  }, [DetailsId]);

  if (loading) {
    return (
      <section className="loader-center">
        <div class="loader"></div>
      </section>
    );
  }

  return (
    <section>
      <Container>
        <Row className="section-center">
          <Col className="text-center">
            <img
              src={product.image}
              className="single-product-img"
              alt={product.title}
            />
          </Col>
          <Col>
            <div>
              <h2 className="single-product-title">{product.title}</h2>
              <p className="single-product-catagore text-slanted">
                {product.category}
              </p>
              <p className="single-product-price">{product.price}$</p>
              <p className="single-product-desc">{product.description}</p>
              <div>
                <Button
                  variant="success"
                  data-id="id"
                  onClick={() => dispatch(addCart(product))}
                >
                  add to cart
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DetailsProduct;
