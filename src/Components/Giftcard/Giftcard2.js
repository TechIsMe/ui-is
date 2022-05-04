import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Reward from "../Assets/images/Rewards.jpg";
import Gift from "../Assets/images/Gift-Card.jpg";
import "./Giftcard.css";

function Giftcard2() {
    return (
        <div>
        <div className="under">
            <p className="text-info text-center "> GiftCards and Rewards</p>
        </div>
        <Container className=" px-2 ">
            <Row xs={2} lg={8}>
            <Col>
                <img src={Reward} height={200} width={420} alt="/" />
            </Col>
            <Col>
                <Card.Title className="text-center">Ice-Cream- Cake</Card.Title>
                <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.{" "}
                </p>
                <Button variant="dark btn-center" size="sm mx-5 px-3">
                Purchase
                </Button>
            </Col>
            </Row>
        </Container>
        <br />
        <Container className="gi">
            <Row xs={8} lg={2}>
            <Col className="px-3">
                <Card.Title className="text-center">Ice-Cream- Cake</Card.Title>
                <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.{" "}
                </p>
                <Button variant="dark" size="sm mx-5 px-3">
                Purchase
                </Button>
            </Col>
            <Col>
                <img src={Gift} height={200} width={555} alt="/" fluid />
            </Col>
            </Row>
        </Container>
        </div>
  );
}

export default Giftcard2;
