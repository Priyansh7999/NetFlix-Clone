import React from 'react'

export default function WatchMovie({id}) {
  return (
    <div>
      <div className='movie-trailer'>
      <div className="trailer">
      <iframe
        id="moviePlayer"
        src={`https://vidsrc.xyz/embed/movie/${id}`}
        width="100%"
        height="full"
        allowFullScreen
      ></iframe>
    </div>
    </div>
    </div>
  )
}
