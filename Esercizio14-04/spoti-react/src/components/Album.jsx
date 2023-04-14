import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Album = () => {
  const [album, setAlbum] = useState([]);
  const param = useParams();
  const dispatch = useDispatch();
  const oldPlayer = useSelector((state) => state.player);
  const array = useSelector((state) => state.favourite);
  const handleAlbum = async () => {
    let albumId = param.id;

    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let album = await response.json();
        console.log(album);
        setAlbum(album);
      } else {
      }
    } catch (exception) {}
  };

  useEffect(() => {
    handleAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Col className="col-12 col-md-9 offset-md-3 mainPage p-0">
        <Row className="row mb-3 m-0">
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#f">TRENDING</a>
            <a href="#f">PODCAST</a>
            <a href="#ff">MOODS AND GENRES</a>
            <a href="#f">NEW RELEASES</a>
            <a href="#f">DISCOVER</a>
          </Col>
        </Row>
        <Row className="row m-0">
          <Col className="col-md-3 pt-5 text-center" id="img-container">
            {album && (
              <>
                <img
                  src={album?.cover_xl}
                  className="card-img img-fluid"
                  alt="Album"
                />
                <div className="mt-4 text-center">
                  <p className="album-title">{album?.title}</p>
                </div>
                <div className="text-center">
                  <a href={`/artist/${album?.artist?.id}`}>
                    <p className="artist-name">{album?.artist?.name}</p>
                  </a>
                </div>
                <div className="mt-4 text-center">
                  <button
                    id="btnPlay"
                    className="btn btn-success"
                    type="button"
                  >
                    Play
                  </button>
                </div>
              </>
            )}
          </Col>
          <Col className="col-md-8 p-5">
            <Row className="row">
              <Col className="col-md-10 mb-5" id="trackList">
                {album?.tracks?.data?.map((track, i) => (
                  <div
                    onClick={() => {
                      if (oldPlayer[0] !== track) {
                        dispatch({ type: "PLAYER", payload: track });
                      }
                    }}
                    key={i}
                    className="py-3 trackHover"
                  >
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <p
                        href="#f"
                        className="card-title trackHover px-3 fs-6 d-flex align-items-center"
                        style={{ color: "white" }}
                      >
                        {track.title}
                      </p>
                      {array.includes(track.id) && (
                        <HeartFill
                          className="position-absolute end-0 me-5 text-white"
                          type="submit"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE",
                              payload: track.id,
                            });
                          }}
                        ></HeartFill>
                      )}
                      {!array.includes(track.id) && (
                        <Heart
                          className="position-absolute end-0 me-5 text-white "
                          type="submit"
                          onClick={() => {
                            dispatch({
                              type: "FAVOURITE",
                              payload: track.id,
                            });
                          }}
                        ></Heart>
                      )}
                      <small className="duration" style={{ color: "white" }}>
                        {Math.floor(
                          parseInt(track.duration) / 60 // setting the duration minutes
                        )}
                        :
                        {parseInt(track.duration) % 60 < 10
                          ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                          : parseInt(track.duration) % 60}
                      </small>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default Album;
