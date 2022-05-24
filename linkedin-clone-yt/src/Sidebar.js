 import { Avatar } from '@mui/material';
import React from 'react';
 import './Sidebar.css';
 
 function Sidebar() {
     const recentItem = (topic) => (
      <div className="sidebar__recentItem">
          <span className='sidebar__hash'>#</span>
          <p>{topic}</p>
      </div>   
     )
   return (
     <div className='sidebar'>
      <div className="sidebar__top">
          <img src="img/img3.png" alt="" />
          <Avatar className='sidebar__avatar'/>
          <h3>Felix Bliss</h3>
          <h4>felixbliss0@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
          <div className="sidebar__stat">
           <p>Who viewed you</p>
           <p className="sidebar__statNumber"> 3,645</p>
          </div>
          <div className="sidebar__stat">
          <p>Views on post</p>
           <p className="sidebar__statNumber"> 3,435</p>
      </div>
      </div>
      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem ('reactjs')}
          {recentItem ('programming')}
          {recentItem ('softwareengineering')}
          {recentItem ('design')}
          {recentItem ('developer')}
      </div>
     </div>
   )
 }
 
 export default Sidebar