LosersList = React.createClass({
	propTypes: {
		losers: React.PropTypes.array
	},
	renderLosers() {
		var loserNodes = this.props.losers.map(function(loser) {
	      return (
	        <li key={loser} className="list-group-item">{loser}</li>
	      );
	    });
	    return loserNodes;
	},
	render() {
		return(
			<div className="losers">
				<h3><i className="fa fa-frown-o"></i> Losers</h3>
				<ul className="list-group">
					{this.renderLosers()}
				</ul>
			</div>
		)
	}
});