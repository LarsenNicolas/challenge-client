import React, {useEffect, useState} from 'react'
import axios from 'axios';
import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function VideoPlayer() {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);
  const [video, setVideo] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();

  useEffect(function () {
    if (!loaded) {
      axios.get(`http://localhost:4000/video/${params.videoId}`).then(res => {
          setVideo(res.data);
          setIsFav(res.data.isFav);
          setLoaded(true);
      });
    }
  })

  function updateVideo(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setIsFav(value);
    axios.patch(`http://localhost:4000/updateVideo/${video._id}/${value}`)
        .then(res => {
          //todo toast
        });
  }

  const deleteVideo = () => {
    let id = video._id;

    axios.delete(`http://localhost:4000/deleteVideo/${id}`)
        .then(res =>
            navigate('/')
        );
  }

  return (
      <div className="container">
        <div className="row">
          { loaded ? (
              <div className="">
                <div>
                  <h4 className="link">{video.name}</h4>
                  <ReactPlayer
                      url={video.video_path}
                      className='react-player'
                      controls
                      width='30%'
                      height='30%'
                  />
                  <label>
                    Favorite
                    <input
                        name="isFav"
                        type="checkbox"
                        checked={isFav}
                        onChange={updateVideo} />
                  </label>
                  <button
                      name="delete"
                      onClick={deleteVideo}>Delete
                  </button>
                </div>
              </div>
          ) : ' Loading ... '}
        </div>
      </div>
  );
}

export default VideoPlayer;

