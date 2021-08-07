import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img from "../assets/index.jpeg";
import { Link } from "react-router-dom";
import { setPosts, selectPosts } from "../redux/features/userSlice";
import Post from "./post";

function Posts() {
  //const [state, setState] = useState([]);
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
        })
        .catch((e) => console.log(e));
  }, []);

  return (
    <div className="Posts">
      <div>
        <Container>
          <h1>Posts</h1>
          <Row>
            {console.log(posts)}
            {posts &&
              posts.data.map((post) => (
                <Col
                  xs={3}
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
                      onClick={() => <Post title={post.title} />}
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
