import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="video-responsive w-full object-cover rounded-[8px] flex items-center justify-center">
      <iframe
        width="100%"
        height="380"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
};

// Corrected propTypes validation
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
