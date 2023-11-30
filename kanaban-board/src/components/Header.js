import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// import Button from

const Header = ({ title }) => {
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
          <button className="btn">+Add New Task</button>
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
