import PropTypes from "prop-types";
const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
