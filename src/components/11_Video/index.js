// This adds the squat video player
// To import write - import YoutubeEmbed from "../11_Video";
// In the return function write - <YoutubeEmbed embedId="9OfycnUL0h8?ecver=1&amp" />
// The embedId will need to be changed if you want to add different videos.
// Video from - https://www.youtube.com/watch?v=9OfycnUL0h8
// Code from here:
// https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {

  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
  <div className="video-responsive">
    <iframe
      width="1000"
      height="566"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={isLoaded?"Embedded youtube":"Error Loading Video"}
      onLoad={()=> setIsLoaded(true)}
    />
  </div>
  )
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
