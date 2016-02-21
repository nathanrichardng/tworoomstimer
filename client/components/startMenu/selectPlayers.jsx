SelectPlayers = React.createClass({
	
	propTypes: {
		players: React.PropTypes.number,
		updatePlayers: React.PropTypes.func,
		startGame: React.PropTypes.func
	},

	updatePlayers(e) {
		e.preventDefault;
		var players = Number(e.target.value);
		this.props.updatePlayers(players);
	},

	startGame() {
		this.props.startGame();
	},

	render() {
		return(
			<div className="container">
				<div className="row">
			      <nav className='navbar navbar-default'>
			        <div className='container-fluid'>
			          <div className='navbar-header'>
			            <a className="navbar-brand" href="/"><i className="fa fa-bomb"></i> 2R1B</a>
			          </div>
			        </div>
			      </nav>
			    </div>
				<div className="jumbotron">
					<h3>How many players are you playing with?</h3>
				</div>
				<input 
					type="number" 
					value={this.props.players}
					onChange={this.updatePlayers}
					className="col-xs-12"
					ref="players" />

				<button className="btn btn-info col-xs-12 start-button" onClick={this.startGame}>Start</button>
			</div>
		)
	}
});