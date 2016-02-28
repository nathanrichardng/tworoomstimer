Question = React.createClass({
	propTypes: {
		prompt: React.PropTypes.string,
		options: React.PropTypes.array,
		submitAnswer: React.PropTypes.func
	},
	submitAnswer(e) {
		console.log("gambler picked", e.target.value);
		this.props.submitAnswer(e.target.value);
	},
	renderOptions() {
		var submitAnswer = this.submitAnswer; //maintain scope
		return this.props.options.map(function(option) {
			return (
				<button key={option} className="btn btn-info col-xs-12" onClick={submitAnswer} value={option}>{option}</button>
			)
		});
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