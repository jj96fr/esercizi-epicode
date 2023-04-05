import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization: ' your-auth-token-goes-here',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  const FetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkNjljMGIxNGE1MTAwMTQ2NjNmZDEiLCJpYXQiOjE2ODA2OTc3OTIsImV4cCI6MTY4MTkwNzM5Mn0.M4OLQgf0eXXtWJ4Z6gxacrIu6WWpu6CuiEmaywgsgGs",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        console.log("error");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    FetchComments();
  }, [props.asin]);

  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       isLoading: true,
  //     })
  //     try {
  //       let response = await fetch(
  //         'https://striveschool-api.herokuapp.com/api/comments/' +
  //           this.props.asin,
  //         {
  //           headers: {
  //             Authorization: 'Bearer your-auth-token-goes-here',
  //           },
  //         }
  //       )
  //       console.log(response)
  //       if (response.ok) {
  //         let comments = await response.json()
  //         this.setState({
  //           comments: comments,
  //           isLoading: false,
  //           isError: false,
  //         })
  //       } else {
  //         console.log('error')
  //         this.setState({ isLoading: false, isError: true })
  //       }
  //     } catch (error) {
  //       console.log(error)
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   }
  // }

  return (
    <div className="text-center ">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
