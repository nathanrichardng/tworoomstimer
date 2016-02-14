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
		  secondsRemaining: '00'
		};
	},
	componentWillReceiveProps(nextProps){
		this.setState({ 
			endTime: null,
			paused: true,
			minutesRemaining: nextProps.minutes,
			secondsRemaining: '00'
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
			var endTime = moment(this.state.endTime);
			var diff = endTime.subtract(moment());
			this.setState({
				minutesRemaining: diff.format('m'),
				secondsRemaining: diff.format('ss')
			});
		}
	},
	timesUp: function() {
		return this.state.minutesRemaining <= 0 && this.state.secondsRemaining <= 0;
	},
	onRoundOver() {
		this.clearInterval();
		this.props.onRoundOver();
	},
	startTimer: function() {
		if(!this.state.paused) { return }
		this.setState({ 
			endTime: moment().add(this.state.minutesRemaining, 'minutes').add(this.state.secondsRemaining, 'seconds'),
			paused: false 
		});
		this.interval = setInterval(this.tick, 500);
	},
	pauseTimer: function() {
		this.setState({ endTime:null, paused:true })
	  	this.clearInterval();
	},
	resetTimer: function() {
		this.setState(this.getInitialState());
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
			<div>
				<div className="times-up">Times Up!</div>
			</div>
		);
	},
	renderTime: function() {
		return (
			<div>
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
		return (
			<div className="col-xs-12">
				<div className="time-box">{this.renderTimer()}</div>
				<div className="control-box">{this.renderControls()}</div>
		    </div>
		)
	}
});