WinnersList = React.createClass({
	propTypes: {
		winners: React.PropTypes.array
	},
	renderWinners() {
		var winnerNodes = this.props.winners.sort().map(function(winner) {
	      return (
	        <li key={winner} className="list-group-item">{winner}</li>
	      );
	    });
	    return winnerNodes;
	},
	render() {
		return(
			<div className="winners">
				<h3><i className="fa fa-trophy"></i> Winners!</h3>
				<ul className="list-group">
					{this.renderWinners()}
				</ul>
			</div>
		)
	}
});