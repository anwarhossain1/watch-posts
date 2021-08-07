import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import img from "../assets/index.jpeg";
import axios from "axios";

const Post = (props) => {
  const [post, setPost] = useState([]);
  const [show, setShow] = useState(0);
  const history = useHistory();
  const handleClick = () => {
    history.push("/posts");
  };

  const handleDelete = () => {
    let res = axios
      .delete(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    //history.push("/posts");
  };

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      )
      .then((response) => {
        setPost(response);
        console.log(response);
        setShow(1);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {show ? (
        <Container>
          <div
            className="card mb-3"
            style={{ width: "1000px", marginLeft: "45px" }}
          >
            <div className="row gutters">
              <div className="col-md-4">
                <img alt="dada" src={img} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Title: {post.data.title}</h5>
                  <p className="card-text">UserID: {post.data.userId}</p>
                  <p className="card-text">ID: {post.data.id}</p>

                  <p className="card-text">
                    <small className="text-muted">Body: {post.data.body}</small>
                  </p>
                </div>
                <div className="buttons">
                  <Button onClick={handleClick}>Go Home</Button>
                  <Button
                    variant="danger"
                    style={{ marginLeft: "5px" }}
                    onClick={handleDelete}
                  >
                    Delete Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default Post;
