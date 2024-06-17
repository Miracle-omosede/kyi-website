import React from 'react';
import PropTypes from 'prop-types';

const ProjectVideo = ({ embedID }) => {
  return (
    <div className="video-responsive w-full object-cover rounded-[8px] flex items-center justify-center h-full">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedID}?autoplay=1`} // Added autoplay=1 to enable autoplay
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
};

// Corrected propTypes validation
ProjectVideo.propTypes = {
  embedID: PropTypes.string.isRequired,
};

export default ProjectVideo;
