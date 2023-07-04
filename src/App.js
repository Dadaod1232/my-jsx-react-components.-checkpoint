import React from "react";
import product from "./Product";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";
import Image from "./Components/Image";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const App = () => {
  const firstName = "david"; 

  return (
    <Container className="mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
            <Description description={product.description} />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <h5>Hello, {firstName ? firstName : "there"}!</h5>
        {firstName && <Image image={product.image} />}
      </div>
    </Container>
  );
};

export default App;

