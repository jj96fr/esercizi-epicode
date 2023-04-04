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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjMTkwODBlNzg3MDAwMTRkODkyYzYiLCJpYXQiOjE2ODA2MTE1OTIsImV4cCI6MTY4MTgyMTE5Mn0.0EhY9N6Mc1783R8KEAQ1Ao5LnuWIfRGEG6r1fgzKloM",
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
    <ListGroup.Item>
      <div className="d-flex justify-content-between ">
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
