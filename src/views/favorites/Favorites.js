import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from "react-player";

function Favorites() {
    const [videoList, setVideoList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useState(function () {
        if (!loaded) {
            axios.get('http://localhost:4000/favoriteVideoList').then(res => {
                const videos = res.data;
                setVideoList(videos);
                setLoaded(true);
            });
        }
    })

    const videos = videoList.map(video => {
        return (
            <div className="container">
                <div className="row">
                    { loaded ? (
                    <div className="" key={video._id}>
                        <div>
                            <Link className="link" to={ '/' + video._id}> {video.name} </Link>
                            <ReactPlayer
                                url={video.video_path}
                                className='react-player'
                                controls
                                width='30%'
                                height='30%'
                            />
                        </div>
                    </div>) : ' Loading ... '}
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <h4>Favorites videos</h4>
            <hr className="" />
            <div className="row">
                {videos}
            </div>
        </div>
    );
};

export default Favorites;
