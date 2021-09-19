import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);
  return (
    <div className={s.btns}>
      {buttons.map((btn, index) => (
        <button
          key={index}
          type="button"
          className={s.btn}
          onClick={() => onLeaveFeedback(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
