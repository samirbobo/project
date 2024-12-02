import { Button } from "react-bootstrap";
import { FaChevronUp } from "react-icons/fa";

function ButtonTop(props) {
  return (
    <>
      <Button
        variant="primary"
        className="ButtonTop pt-0 px-2 pb-1"
        id={props.top}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <FaChevronUp />
      </Button>
    </>
  );
}

export default ButtonTop;
