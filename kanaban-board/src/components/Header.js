import PropTypes from "prop-types";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="container ">
      <div className="headerFont">
        <h1>kanban</h1>
      </div>
      <div>
        <h2 className="boardName">Web Design</h2>
      </div>
      <Button color="green" text="+Add New Task" />
      <Button>
        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
      </Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Web Design",
};

Header.propTypes = {
  title: PropTypes,
};

export default Header;
