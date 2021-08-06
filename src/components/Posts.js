import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../assets/index.jpeg";
import { Link } from "react-router-dom";
function Posts() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setState(response);
      console.log("fetched");
    });
  }, []);

  return (
    <div className="Posts">
      <div>
        <Container>
          <Row>
            {state &&
              state.data.map((post) => (
                <Col
                  xs={3}
                  style={{
                    margin: "15px",
                    cursor: "pointer",
                    border: "1px black solid",
                  }}
                >
                  <div className="post__data">
                    <img alt="image" src={img} />
                    {post.title}
                    <Link to={"/post/" + post.id}>See more</Link>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Posts;
