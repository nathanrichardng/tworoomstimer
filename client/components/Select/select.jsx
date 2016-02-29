Select = React.createClass({
	propTypes: {
		options: React.PropTypes.array,
		className: React.PropTypes.string
	},

	renderOptions() {
		var optionNodes = this.props.options.map(function(option) {
	      return (
	        <option value={option} key={option}>
	          {option}
	        </option>
	      );
	    });
	    return optionNodes;
	},

	getSelected() {
		return this.refs.select.value;
	},

	render() {
		return(
			<select multiple="true" className={this.props.className || ""} ref="select">
				{this.renderOptions()}
			</select>
		)
	}
});