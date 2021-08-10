import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Tasklist from "./Tasklist";

interface IProps {
  error: string | null;
}
export const PureInboxScreen: React.FC<IProps> = ({ error }) => {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span><br />
          <h5 className="title-wrapper">By Taimoor khan</h5>
        </h1>
      </nav>
      <Tasklist loading={false} />
    </div>
  );
}

PureInboxScreen.defaultProps = {
  error: null,
};


export default connect((state: IProps) => ({error: state.error}))(PureInboxScreen)
