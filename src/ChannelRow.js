import React from 'react'
import './ChannelRow.css';
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelRow({image, channel, subs, noOfVideo, description, verified}) {
  return (
    <div className='cannelRow'>
        <Avatar className='channelRow__logo' alt = {channel} src = {image} />
        <div className="channelRow__text">
            <h4>{channel} {verified && <CheckCircleIcon />}</h4>
            <p>
                {subs} subscribers . {noOfVideo} videos
            </p>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default ChannelRow