SelectMultiple = React.createClass({
	propTypes: {
		options: React.PropTypes.array,
		className: React.PropTypes.string
	},

	renderOptions() {
		console.log(this.props.options);
		var optionNodes = this.props.options.map(function(option) {
	      return (
	        <option value={option} key={option}>
	          {option}
	        </option>
	      );
	    });
	    return optionNodes;
	},

	render() {
		return(
			<select multiple className={this.props.className || ""}>
				{this.renderOptions()}
			</select>
		)
	}
});