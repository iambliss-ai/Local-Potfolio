import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
             <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
           <h2>LinkedIn News</h2>
               <InfoIcon/>
        </div>
        {newsArticle('BLISS react is back','Top-news - 1000 readers')}
        {newsArticle('Coronavirus:Ghana update','Top-news - 1000 readers')}
        {newsArticle('Tesla hits new heights','Top-news - 1000 readers')}
        {newsArticle('4life business is back','Top-news - 1000 readers')}
        {newsArticle('Kendrick Lamar album Mr morale the big stepper','Top-news - 1000 readers')}
    </div>
 
 
 );
}

export default Widgets;