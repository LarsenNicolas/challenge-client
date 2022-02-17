import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

import UploadVideo from "../../views/upload/UploadVideo";
import Home from "../../views/home/Home";
import VideoDetail from "../../views/videoDetail/VideoDetail";
import Favorites from "../../views/favorites/Favorites";
import Videos from "../../views/allVideos/Videos";
import {Nav, Navbar} from "react-bootstrap";


function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/favorites">Videos Favoritos</Link>
          <Link className="link" to="/allVideos">Videos</Link>
          <Link className="link" to="/updateVideo">Subir video</Link>
      <Navbar/>
      {/*// <Navbar bg="light" expand="lg">*/}
      {/*//     <Routes>*/}
      {/*//     <LinkContainer to="/">*/}
      {/*//         <Navbar.Brand>Fullstack challenge</Navbar.Brand>*/}
      {/*//     </LinkContainer>*/}
      {/*//       /!*<Route path="/" element={<Home />} />*!/*/}
      {/*//       /!*<Route path="/home" element={<Home />} />*!/*/}
      {/*//       /!*<Route exact path="/:videoId" element={<VideoDetail/>} />*!/*/}
      {/*//       /!*<Route path="/favorites" element={<Favorites/>} />*!/*/}
      {/*//       /!*<Route path="/allVideos" element={<Videos/>} />*!/*/}
      {/*//       /!*<Route path="/updateVideo" element={<UploadVideo/>} />*!/*/}
      {/*//   </Routes>*/}
      {/*// </Navbar>*/}
  );
}

    {/*// return (*/}
    {/*//         <LinkContainer to="/">*/}
    {/*//             <Navbar.Brand>React-Bootstrap</Navbar.Brand>*/}
    {/*//         </LinkContainer>*/}
    {/*//         <Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
    {/*//         <Navbar.Collapse id="basic-navbar-nav">*/}
    {/*//             <Nav className="mr-auto">*/}
    {/*//                 <LinkContainer to="/service">*/}
    {/*//                     <Nav.Link>Service</Nav.Link>*/}
    {/*//                 </LinkContainer>*/}
    {/*//                 <LinkContainer to="/about">*/}
    {/*//                     <Nav.Link>About</Nav.Link>*/}
    {/*//                 </LinkContainer>*/}
    {/*//             </Nav>*/}
    {/*//         </Navbar.Collapse>*/}
    {/*// )*/}

export default NavBar;