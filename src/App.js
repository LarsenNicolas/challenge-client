import React from 'react';
import { Route, Routes } from "react-router-dom";

import VideoDetail from './views/videoDetail/VideoDetail';
import Videos from './views/allVideos/Videos';
import UploadVideo from "./views/upload/UploadVideo";
import Favorites from "./views/favorites/Favorites";
import Home from "./views/home/Home";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/:videoId" element={<VideoDetail/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/allVideos" element={<Videos/>} />
        <Route path="/updateVideo" element={<UploadVideo/>} />
      </Routes>
  );
}