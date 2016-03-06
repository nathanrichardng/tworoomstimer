Question = React.createClass({
	propTypes: {
		prompt: React.PropTypes.string,
		options: React.PropTypes.array,
		submitAnswer: React.PropTypes.func
	},
	submitAnswer(e) {
		this.props.submitAnswer(e.target.value);
	},
	renderOptions() {
		var submitAnswer = this.submitAnswer; //maintain scope
		var options = this.props.options;
		return (
			<div>
				<button key={options[0]} className="btn btn-danger col-xs-6" onClick={submitAnswer} value={options[0]}>{options[0]}</button>
				<button key={options[1]} className="btn btn-info col-xs-6" onClick={submitAnswer} value={options[1]}>{options[1]}</button>
			</div>
		)
	},
	render() {
		return(
			<div className="container">
				<div className="jumbotron">
					<h3>{this.props.prompt}</h3>
				</div>
				{this.renderOptions()}
			</div>
		)
	}
});