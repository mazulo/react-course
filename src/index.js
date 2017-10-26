import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyCgzq7KJrXNEQWPLaoco11ELfp1RvY1Rfc';


/// Create a new component. This component should produce some HTML
class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selected_video: null,
		};
		this.videoSearch('django rest framework');
	}
	videoSearch(term) {
		YTSearch({key: YOUTUBE_API_KEY, term: term}, videos => {
			this.setState({
				videos: videos,
				selected_video: videos[0],
			});
		});
	}

	render () {
		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selected_video} />
				<VideoList
					onVideoSelect={selected_video => this.setState({selected_video})}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
