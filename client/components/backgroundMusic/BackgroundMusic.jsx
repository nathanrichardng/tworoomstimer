BackgroundMusic = React.createClass({
	propTypes: {
		style: React.PropTypes.object
	},
	getInitialState() {
		var backgroundMusic = Sounds.QueueSound('TwoRoomsMusic.mp3');
			backgroundMusic.play();
		return {
			backgroundMusic: backgroundMusic,
			paused: false,
		}
	},
	toggleMusic() {
		var paused = this.state.paused;
		if (paused) { 
			this.state.backgroundMusic.play();
			this.setState({ paused: false }); 
		}
		else { 
			this.state.backgroundMusic.pause();
			this.setState({ paused: true }); 
		}
	},
	componentWillUnmount() {
		var backgroundMusic = this.state.backgroundMusic;
			backgroundMusic.stop();
	},
	volumeStyle: {
		position: "absolute",
		left: "20px",
		bottom: "20px",
		fontSize: "34px",
		color: "#fff"
	},
	render() {
		var volumeIcon = this.state.paused ? "fa fa-volume-off" : "fa fa-volume-up"
		return(
			<a onClick={this.toggleMusic} style={this.props.style || this.volumeStyle}><i className={volumeIcon}></i></a>
		)
	}
});