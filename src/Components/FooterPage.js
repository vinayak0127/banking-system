import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './../Styles/footer.css'

const FooterPage = () => {
  return (
    <MDBFooter  className="foot font-small pt-4 mt-4 justify-content-center">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Bank Managment system </h5>
            <p>
              this project is build under my internship in sparks foundation.
            </p>
          </MDBCol>
          {/*
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Sparks foundation </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;