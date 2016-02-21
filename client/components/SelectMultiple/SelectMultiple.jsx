SelectMultiple = React.createClass({
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
		var options = this.refs.select;
		var selected = [];
		for(var i=0; i<options.length; i++) {
			if(options[i].selected) { selected.push(options[i].value); }
		}
		return selected;
	},

	render() {
		return(
			<select multiple className={this.props.className || ""} ref="select">
				{this.renderOptions()}
			</select>
		)
	}
});