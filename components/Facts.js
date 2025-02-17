import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const Facts = () => {
  return (
    <section className="facts__area fix p-relative pt-120 pb-120 facts__pb">
      <Container>
        <Row>
          <Col xxl={6} xl={5} lg={5} md={8} sm={10}>
            <div className="facts__thumb">
              <div className="facts__thumb-shape">
                <img
                  className="facts-s-1"
                  src="/assets/images/shape/facts/facts-s-1.png"
                  alt=""
                />
                <img
                  className="facts-s-2"
                  src="/assets/images/shape/facts/facts-s-2.png"
                  alt=""
                />
                <img
                  className="facts-s-3"
                  src="/assets/images/shape/facts/facts-s-3.png"
                  alt=""
                />
                <img
                  className="facts-s-4 d-none d-md-block"
                  src="/assets/images/shape/facts/facts-s-4.png"
                  alt=""
                />
              </div>
              <div className="facts__thumb-image">
                <img src="/assets/images/facts/facts-img.png" alt="" />
              </div>
            </div>
          </Col>
          <Col xxl={6} xl={7} lg={7} md={9}>
            <div className="facts__content">
              <div className="facts__content-text">
                <SectionTitle
                  subTitle="Why Choose us"
                  titleFirst="One stop solution"
                  titleSecond=" for all your tech needs"
                />
                <p>
                  We understand that tech can be complex and hard to set up. It
                  might cost a bomb to hire and manage a tech team. Don’t worry,
                  with us you get
                </p>
              </div>
              {/* <div className="facts__counter-content d-flex">
                <div className="facts__counter-text">
                  <h2>
                    <CountUp end={2} duration={5} />K
                  </h2>
                  <h5>Project Delivered</h5>
                  <p>Preserve and cherish that pale blue dot star stuff.</p>
                </div>
                <div className="facts__counter-text">
                  <h2>
                    <CountUp end={5} duration={5} />M
                  </h2>
                  <h5>Total Revinue</h5>
                  <p>The carbon in our appies event not nosunrise.</p>
                </div>
              </div> */}
              <div className="about__content">
                <ul className="display-grid-mobile">
                  <li>Highly skilled team</li>
                  <li>Proper consultation</li>
                  <li>Complete transparency</li>
                  <li>Code safety and security</li>
                  <li>IT support and maintenance</li>
                  <li>Reasonable pricing</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Facts;
