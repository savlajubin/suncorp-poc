import React from "react";
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a href="https://google.com">Service</a>
              </li>
              <li>
                <a href="https://google.com">History</a>
              </li>
              <li>
                <a href="https://google.com">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
