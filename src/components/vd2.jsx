
import React from 'react';

const LearnVideo = ({video}) => {
  return (
    <div>
        <h1 className="font-medium text-2xl pb-4 text-center font-mono">LEARN THROUGH VIDEOS</h1>

        <div className="youtube-card" style={{ display:"flex" , margin:"2px",padding:"2px" , border:"none", borderRadius:"3px",flex:"0 0 23%", justifyContent:"center" , gap:"2rem"}}>
        {video.map(video => (
          <div key={video.id} >
            {video.url ? (
              <iframe
                title={video.title}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.url}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <span>{video.title}</span>
            )}
          </div>
        ))}
        </div>
    </div>
  );
};

export default LearnVideo;
