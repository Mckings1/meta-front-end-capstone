import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = () => {
  return (
    <main className="main-content">
      <section className="specials-section">
        <div className="title-heading">
          <span className="title-heading-h1">
            This weeks specials!{" "}
            <Link
              to="/menu"
              style={{
                fontSize: "18px",
                fontWeight: 600,
              }}
              className="online-menu"
            >
              Online Menu
            </Link>
          </span>
        </div>

        <div className="specials-card">
          <Card className="specials-lists" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "18rem", borderRadius: "10px" }}
              src="image1.jpg"
            />
            <Card.Body style={{ backgroundColor: "#c3c3c3" }}>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text style={{ padding: "1rem" }}>
                <h3>
                  Greek Salad <span className="item-price">$12.99</span>
                </h3>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card className="specials-lists" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "18rem", borderRadius: "10px" }}
              src="image2.jpg"
            />
            <Card.Body style={{ backgroundColor: "#c3c3c3" }}>
              <Card.Text style={{ padding: "1rem" }}>
                <h3>
                  Bruchetta <span className="item-price">$12.99</span>
                </h3>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="specials-lists" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "18rem", borderRadius: "10px" }}
              src="image2.jpg"
            />
            <Card.Body style={{ backgroundColor: "#c3c3c3" }}>
              <Card.Text style={{ padding: "1rem" }}>
                <h3>
                  Spageht <span className="item-price">$12.99</span>
                </h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Main;
