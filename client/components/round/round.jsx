Round = React.createClass({
	propTypes: {
		round: React.PropTypes.number,
		players: React.PropTypes.number
	},
	getInitialState() {
		return {
			roundOver: false
		}
	},
	calculateTimerLength() {
		if(this.state.roundOver) {
			return 0;
		}
		switch(this.props.round) {
			case 1:
				return 3;
			case 2:
				return 2;
			case 3:
				return 1;
			default:
				return 3;
		}
	},
	calculateHostages() {
		if(this.props.players >= 22) {
			if(this.props.round === 1) {
				return 3;
			}
			else if(this.props.round === 2) {
				return 2;
			}
			else {
				return 1;
			}
		}
		else if(this.props.players >= 14) {
			if(this.props.round === 1) {
				return 2;
			}
			else {
				return 1;
			}
		}
		else {
			return 1;
		}
	},
	onRoundOver() {
		this.setState({ roundOver: true });
	},
	nextRound() {
		this.setState({ roundOver: false });
		this.props.nextRound();
	},
	renderHostages() {
		var hostages = [];
		for (var i=0; i<this.calculateHostages(); i++) {
			hostages.push(<i key={i} className="fa fa-user hostage"></i>);
		}
		return(
			<div className="hostages col-xs-12">
				<h3>Hostages</h3>
				{hostages}
			</div>
		)
	},
	render() {
		return(
			<div className="row">
				<div className="col-xs-12 round-display">
					<h3>Round {this.props.round}</h3>
				</div>
				<div className="col-xs-12 timer-box">
					<Timer 
						minutes={this.calculateTimerLength()}
						onRoundOver={this.onRoundOver} />
				</div>
				{this.renderHostages()}
				<NextRoundButton
					roundOver={this.state.roundOver}
					nextRound={this.nextRound} />
			</div>
		)
	}
});