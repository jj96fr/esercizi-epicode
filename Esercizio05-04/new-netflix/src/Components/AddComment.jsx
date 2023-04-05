import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   comment: {
  //     comment: '',
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // }
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });

  useEffect(() => {
    setComment({ ...comment, elementId: props.asin });
  }, [props.asin]);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     })
  //   }
  // }

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkNjljMGIxNGE1MTAwMTQ2NjNmZDEiLCJpYXQiOjE2ODA2OTc3OTIsImV4cCI6MTY4MTkwNzM5Mn0.M4OLQgf0eXXtWJ4Z6gxacrIu6WWpu6CuiEmaywgsgGs",
          },
        }
      );

      if (response.ok) {
        alert("Comment was sent!");
        setComment({
          ...comment,
          comment: "",
          rate: 1,
          elementId: props.asin,
        });
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
