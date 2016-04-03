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
	    optionNodes.unshift(<option disabled="true" value="None Selected" key="None Selected">None Selected</option>);
	    return optionNodes;
	},

	getSelected() {
		return this.refs.select.value;
	},

	render() {
		return(
			<select className={this.props.className || ""} ref="select" defaultValue="None Selected">
				{this.renderOptions()}
			</select>
		)
	}
});