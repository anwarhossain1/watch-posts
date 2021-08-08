import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img from "../assets/index.png";
import { Link } from "react-router-dom";
import { setPosts, selectPosts } from "../redux/features/userSlice";

function MyVerticallyCenteredModal(props) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const { posts } = props;
  //const dispatch = useDispatch();
  console.log(title);
  console.log(body);
  console.log(posts);

  const saveHandler = async () => {
    console.log("save handler");
    props.onHide();
    let data = {
      title: title,
      body: body,
    };

    await axios
      .post("https://jsonplaceholder.typicode.com/posts/", data)
      .then((response) => {
        console.log(response);

        //dispatch(setPosts(response));
      });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Title</h4>
        <form>
          <input
            type="text"
            placeholder="Insert The Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <h4>Body</h4>
          <input
            type="text"
            placeholder="Insert into body"
            onChange={(e) => setBody(e.target.value)}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={saveHandler}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Posts() {
  const [modalShow, setModalShow] = useState(false);
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  useEffect(() => {
    posts >= 0 &&
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          //setState(response);
          console.log("fetched");
          dispatch(setPosts(response));
          setState.push(posts);
        })
        .catch((e) => console.log(e));
  }, []);

  return (
    <div className="Posts">
      <div>
        <Container>
          {console.log(state)}
          <h1>Posts</h1>
          <Button onClick={() => setModalShow(true)}>Add New Post</Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            posts={posts}
          />
          <Row>
            {console.log(posts)}
            {posts &&
              posts.data.map((post) => (
                <Col
                  xs={4}
                  lg={3}
                  style={{
                    margin: "15px",
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <div className="post__data">
                    <img alt="image" src={img} />
                    {post.title}
                    <Link
                      to={"/post/" + post.id}
                      style={{ textDecoration: "none" }}
                    >
                      See more
                    </Link>
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
