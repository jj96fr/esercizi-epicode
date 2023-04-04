import { Component } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // }

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{
          border:
            props.selectedBook === props.book.asin
              ? "3px solid green"
              : "3px solid grey ",
          width: "206px",
          height: "450px",
        }}
        className="mt-2"
      >
        <Card.Img
          style={{ width: "200px", height: "300px" }}
          variant="top"
          src={props.book.img}
        />
        <Card.Body className="d-flex align-items-center">
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
