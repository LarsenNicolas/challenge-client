import React, {useEffect, useState} from 'react'
import axios from 'axios';
import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './VideoDetail.css'
import { toast } from 'react-toastify';

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
            toast.success("Video marked as favorite");
        });
  }

  const deleteVideo = () => {
    let id = video._id;

    axios.delete(`http://localhost:4000/deleteVideo/${id}`)
        .then(res => {
            toast("Video removed");
            navigate('/')
        });
  }

  return (
      <div className="containerVideos">
          { loaded ? (
              <div className="rowVideoDetail" key={video._id}>
                  <h3 className="titleVideo"> {video.name.replace(/.mp4/, '')} </h3>
                  <ReactPlayer
                      url={video.video_path}
                      className="react-player"
                      controls
                      margin="auto"
                  />
                  <label className="favorite">
                      Favorite
                      <input
                          className="checkbox"
                          name="isFav"
                          type="checkbox"
                          checked={isFav}
                          onChange={updateVideo} />
                  </label>
                  <button
                      className="delete"
                      name="delete"
                      onClick={deleteVideo}>Delete
                  </button>
              </div>): ' Loading ... '}
      </div>
  );
}

export default VideoPlayer;
