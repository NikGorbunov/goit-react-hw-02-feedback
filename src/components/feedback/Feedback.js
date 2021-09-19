import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "../statistics/Statistics";
import Section from "../section/Section";
import Notification from "../notification/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonIncrement = (e) => {
    this.setState((prevState) => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    return stateValues.reduce((total, value) => total + value);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.floor((this.state.good * 100) / total) || 0;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.buttonIncrement}
        />
        <Section />
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
