PostGame = React.createClass({
	propTypes: {
		selected: React.PropTypes.array
	},
	getInitialState(){
		return {
			winners:[],
			losers: [],
			currentSet: 0
		}
	},
	render() {
		console.log(this.props.selected);
		return(
			<div className="row">
				<div className="col-xs-12 round-display">
					<h3>Who won?</h3>
				</div>
				<div className="hostages col-xs-12">
					<p>This is where I will place the post-game logic to determine who won.</p>
				</div>
			</div>
		)
	}
});