import React from 'react';
import { Grid } from '@material-ui/core';
import { VideoItem } from './index';

const VideoList = ({ videos, onVideoSelect }) => {
	const wholeList = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>);
	return (
		<Grid container spacing={4}>
			{wholeList}
		</Grid>
	);
}

export default VideoList;