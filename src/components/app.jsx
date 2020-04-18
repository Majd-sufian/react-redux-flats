import React, { Component } from 'react';
import FlatList from '../containers/flatList';
import Map from '../containers/map';

class App extends Component {
	render () {
		return (
			<div className="row">
				<FlatList />
				<Map />
			</div>
		)
	}
}


export default App;