import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from'./VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>Filters</h2>
        </div>
        <hr/>
        <ChannelRow 
            image = " data:image/jpeg;base64,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"
            channel = "Ash"
            verified
            subs= "2k"
            noOfVideo = {10}
            description = "You can find any video about web development"

        />
        <hr/>
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"

        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
        <VideoRow
            views = "1.4M"
            subs = "2k"
            timestamp = "2 month ago"
            channel = "Ash"
            title = "Lets learn some development"
            image = "https://i.ytimg.com/vi/Umr8ezHiVvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5vne0EOm7tx9Dls7AeU2tA2fYnQ"
            
        />
    </div>
  )
}

export default SearchPage