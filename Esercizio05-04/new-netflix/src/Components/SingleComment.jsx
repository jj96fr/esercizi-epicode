import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkNjljMGIxNGE1MTAwMTQ2NjNmZDEiLCJpYXQiOjE2ODA2OTc3OTIsImV4cCI6MTY4MTkwNzM5Mn0.M4OLQgf0eXXtWJ4Z6gxacrIu6WWpu6CuiEmaywgsgGs",
          },
        }
      );
      if (response.ok) {
        alert("Comment was deleted successfully!");
      } else {
        alert("Error - comment was NOT deleted!");
      }
    } catch (error) {
      alert("Error - comment was NOT deleted!");
    }
  };

  return (
    <ListGroup.Item className="mt-3 ">
      <div className="d-flex justify-content-between align-items-center">
        {comment.comment}
        <div className="d-flex align-items-center">
          <Button
            variant="danger"
            className="ml-2"
            onClick={() => deleteComment(comment._id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;
