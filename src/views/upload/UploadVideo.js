import React, {useState} from 'react';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

function UploadVideo () {
    const [selectedVideos, setSelectedVideos] = useState(null);
    const navigate = useNavigate();

    function fileChangeHandler(event) {
        const files = event.target.files;
        setSelectedVideos(files);
    }

    function fileUploadHandler(event) {
        const data = new FormData();
        for (let i = 0; i < selectedVideos.length; i++) {
            data.append('file', selectedVideos[i]);
            data.append('isFav', 'false');
            data.append('creationDate', new Date().toString());
        }
        axios.post('http://localhost:4000/upload', data).then(res => {
            navigate('/')
        });
    }

    return (
        <div className="container">
                <h4>Upload Video</h4>

                <form method="post" name="videoUpload" action="/api/upload" id="#" encType="multipart/form-data">
                    <div className="form-group files">
                        <input
                            type="file"
                            name="file"
                            className="form-control"
                            multiple="multiple"
                            onChange={fileChangeHandler} />
                        <button
                            type="button"
                            className="btn btn-success btn-block"
                            onClick={fileUploadHandler}>Upload Video
                        </button>
                    </div>
                </form>
        </div>
    );

}

export default UploadVideo;
