/* eslint-disable */
//@ts-nocheck

import { Component } from "react";
import { SvgIcon } from "app/domains/Common/components/svg-icon";
import "./error-boundary.scss";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="eb-container">
          <section className="er-section">
            <div>
              <SvgIcon icon="Error404Icon" />
            </div>
            <h1>
              <strong>Oops !</strong>
              <br /> Something went wrong
            </h1>
          </section>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
