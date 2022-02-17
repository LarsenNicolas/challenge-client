import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from "react-player";

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/videoList').then(res => {
            this.setState({
                videoList: res.data
            });
        });
    }

    render() {
        const videos = this.state.videoList.map(video => {
            return (
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
                </div>
            );
        });

        return (
            <React.Fragment>
                <div className="container">
                    <h4>Videos</h4>
                    <hr className="" />
                    <div className="row">
                        {videos}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Videos;
