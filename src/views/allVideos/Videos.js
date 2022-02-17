import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from "react-player";
import './Videos.css'

function Videos() {
    const [videoList, setVideoList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useState(function () {
        if (!loaded) {
            axios.get('http://localhost:4000/videoList').then(res => {
                const videos = res.data;
                setVideoList(videos);
                setLoaded(true);
            });
        }
    })

    const videos = videoList.map(video => {
        return (
            <div className="">
                { loaded ? (
                <div className="rowVideo" key={video._id}>
                    <Link className="linkVideo" to={ '/' + video._id}> {video.name.replace(/.mp4/, '')}
                    <ReactPlayer
                        url={video.video_path}
                        className='react-player'
                        width='100%'
                        height='100%'
                        controls
                    />
                    </Link>
                </div>): ' Loading ... '}
            </div>
        );
    });

    return (
        <div className="container">
            <h4>Videos</h4>
            <hr className="" />
            <div className="containerVideos">
                {videos}
            </div>
        </div>
    );
};

export default Videos;
