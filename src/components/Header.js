import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAddTask, showAddTask }) => {
  return (
    // <header style={{color:"red"}}>
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAddTask}
        color={showAddTask ? "black" : "green"}
        text={showAddTask ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string, // this is strongly typing the title to be a string
};

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
