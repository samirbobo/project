import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCart,
  addCart,
  clear,
  deleteCart,
} from "../redux-toolkit/cart-slice";
import ButtonTop from "./button-top";
import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Swal from "sweetalert2";

function Cart() {
  var carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [top, setTop] = useState("");
  const totalPrice = carts.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  window.onscroll = () => {
    if (window.scrollY > 100) {
      setTop("show");
    } else {
      setTop("");
    }
  };

  const findProduct = (ele, action) => {
    const parent =
      ele.target.parentElement.parentElement.parentElement
        .previousElementSibling;
    const product = carts.find((cart) => cart.price === +parent.innerHTML);
    if (product) {
      dispatch(action(product));
    }
  };

  return (
    <section style={{ padding: "5rem 0" }}>
      <Container>
        <h1 className="py-2">Welcome to Cart</h1>
        <Button
          className="mb-3"
          variant="danger"
          onClick={() => {
            if (carts.length > 0) {
              Swal.fire({
                title: `Are You Sure To Clear All Products`,
                showCancelButton: true,
                confirmButtonText: "Clear",
                showCloseButton: true,
                width: 600,
                padding: "3em",
              }).then((data) => {
                if (data.isConfirmed) {
                  dispatch(clear());
                }
              });
            }
          }}
        >
          Clear All
        </Button>
        <Button
          className="mb-3 ms-3"
          variant="success"
          onClick={() => {
            if (carts.length > 0) {
              Swal.fire({
                // position: "top-end",
                width: 600,
                icon: "success",
                padding: "3em",
                title:
                  "We are happy to work with you and your order will arrive as soon as possible",
                showConfirmButton: false,
                timer: 3000,
              });
              dispatch(clear());
            }
          }}
        >
          Check Out
        </Button>
        <h5>Total Price: {totalPrice.toFixed(2)} $</h5>
        <div className="responsive-table">
          <Table striped bordered hover size="sm" className="table-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart.id}>
                  <td className="text-center">{cart.id}</td>
                  <td>{cart.title}</td>
                  <td className="text-center">
                    <img
                      style={{ width: "40px" }}
                      src={cart.image}
                      alt="cart-img"
                    />
                  </td>
                  <td>{cart.price}</td>
                  <td className="text-center">
                    <div>
                      <button
                        className="increase-btn"
                        onClick={(e) => {
                          if (e.target.classList.contains("btn-up")) {
                            findProduct(e, addCart);
                          }
                        }}
                      >
                        <FaChevronUp className="icon btn-up" />
                      </button>
                      <p className="amount">{cart.quantity}</p>
                      <button
                        className="decrease-btn"
                        onClick={(e) => {
                          if (e.target.classList.contains("btn-down")) {
                            findProduct(e, decreaseCart);
                          }
                        }}
                      >
                        <FaChevronDown className="icon btn-down" />
                      </button>
                    </div>
                  </td>
                  <td className="text-center">
                    <Button
                      variant="danger"
                      onClick={() => {
                        Swal.fire({
                          title: `Are you sure To Delete product`,
                          showCancelButton: true,
                          confirmButtonText: "Delete",
                          showCloseButton: true,
                          width: 600,
                          padding: "3em",
                        }).then((data) => {
                          if (data.isConfirmed) {
                            dispatch(deleteCart(cart));
                          }
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <ButtonTop top={top} />
      </Container>
    </section>
  );
}

export default Cart;
