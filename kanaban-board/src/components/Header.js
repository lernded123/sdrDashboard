import PropTypes from "prop-types";
import Button from "./Button";

// import Button from

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header>
      <div className="header">
        <div>
          <div>
            <h1>Kanban</h1>
          </div>
          <div>
            <h2>{title}</h2>
          </div>
        </div>
        <div>
          <Button color="black" text="+Add New task" onClick={onClick} />
        </div>
      </div>
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
