import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const image_url = video.snippet.thumbnails.default.url;
	const video_title = video.snippet.title;
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={image_url} alt="{video_title}"/>
				</div>
				<div className="media-body">
					<p className="media-heading">{video_title}</p>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;
