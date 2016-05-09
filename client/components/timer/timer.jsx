Timer = React.createClass({
	propTypes: {
		minutes: React.PropTypes.number,
		onRoundOver: React.PropTypes.func
	},
	getInitialState: function() {
		return {
		  endTime: null,
		  paused: true,
		  minutesRemaining: this.props.minutes,
		  secondsRemaining: '00',
		  timerZoomed: false
		};
	},
	componentWillReceiveProps(nextProps){
		//dont do anything if time is up. This keeps the "times up" message displayed
		if(nextProps.minutes === 0) {
			return false;
		}
		this.setState({ 
			endTime: null,
			paused: true,
			minutesRemaining: nextProps.minutes,
			secondsRemaining: '00',
			timerZoomed: false
		});
	},
	tick: function() {
		if(this.timesUp()) {
			this.onRoundOver();
		}
		else if (this.state.paused) {
			this.setState({ paused:true });
		  	this.clearInterval();
		}
		else {
			var endTime = this.state.endTime;
			var duration = moment.duration(endTime.diff(moment()));
			var minutesRemaining = duration.minutes();
			var secondsRemaining = duration.seconds();
			if(secondsRemaining.toString().length === 1) { secondsRemaining = '0' + secondsRemaining.toString(); }
			console.log("seconds remaining", secondsRemaining);
			this.setState({
				minutesRemaining: minutesRemaining,
				secondsRemaining: secondsRemaining
			});
		}
	},
	timesUp: function() {
		var endTime = this.state.endTime;
		var now = moment();
		if(!endTime){ return false; }
		return endTime.diff(now) <= 0;
	},
	onRoundOver() {
		this.clearInterval();
		this.props.onRoundOver();
		
		Sounds.PlaySound("truck.ogg");
		
	},
	startTimer: function() {
		if(!this.state.paused) { return }
		var minutesRemaining = this.state.minutesRemaining;
		var secondsRemaining = this.state.secondsRemaining;
		var endTime = moment().add(minutesRemaining, 'minutes').add(secondsRemaining, 'seconds');
		this.setState({ 
			endTime: endTime,
			paused: false 
		});
		this.interval = setInterval(this.tick, 500);
	},
	pauseTimer: function() {
		this.setState({ endTime:null, paused:true })
	  	this.clearInterval();
	},
	resetTimer: function() {
		//for testing purposes only
		this.setState({
			endTime: null,
			paused: true,
			minutesRemaining: '0',
			secondsRemaining: '00'
		})
		//this.setState(this.getInitialState());
	},
	toggleZoom(e) {
		e.preventDefault();
		var zoomed = !this.state.timerZoomed;
		this.setState({ timerZoomed: zoomed });
	},
	clearInterval: function() {
		clearInterval(this.interval);
	},
	componentWillUnmount: function() {
		this.clearInterval();
	},
	renderControls: function() {
		if(this.timesUp()) {
			return(
				<div className="glyphicon glyphicon-repeat timer-control" onClick={this.resetTimer}></div>
			);
		}
		else if(this.state.paused) {
			return (
				<div>
					<div className="glyphicon glyphicon-play timer-control" onClick={this.startTimer}></div>
					<div className="glyphicon glyphicon-repeat timer-control" onClick={this.resetTimer}></div>
				</div>
			);
		}
		else {
			return (
				<div>
					<div className="glyphicon glyphicon-pause timer-control" onClick={this.pauseTimer}></div>
		      		<div className="glyphicon glyphicon-repeat timer-control" onClick={this.resetTimer}></div>
		      	</div>
			);
		}
	},
	renderTimeUp: function() {
		return(
			<div className="time-box" onClick={this.toggleZoom}>
				<div className="times-up">Times Up!</div>
			</div>
		);
	},
	renderTime: function() {
		return (
			<div className="time-box" onClick={this.toggleZoom}>
		    	<div className="timer-minutes">{this.state.minutesRemaining}</div>
		    	<div className="timer-seconds">{this.state.secondsRemaining}</div>
		    </div>
		);
	},
	renderTimer: function() {
		if(this.timesUp()) {
			return  this.renderTimeUp();
		}
		else {
			return this.renderTime();
		}
	},
	render: function() {
		var timerClass = this.state.timerZoomed ? "col-xs-12 zoomed timer-box" : "col-xs-12 timer-box";
		return (
			<div className={timerClass}>
				{this.renderTimer()}
				<div className="control-box">{this.renderControls()}</div>
		    </div>
		)
	}
});