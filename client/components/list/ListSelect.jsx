ListSelect = React.createClass({
	propTypes: {
		options: React.PropTypes.array,
		selected: React.PropTypes.string,
		className: React.PropTypes.string,
		onSelect: React.PropTypes.func
	},

	renderOptions() {
		var selected = this.props.selected || false;
		var onSelect = this.onSelect;
		var optionNodes = this.props.options.map(function(option) {
			var className;
			if (selected === option) { className = "list-group-item selected"; }
			else { className = "list-group-item"; }
			return (
				<li key={option} className={className} onClick={onSelect} data-value={option}>
				  {option}
				</li>
			)
	    });
	    return optionNodes;
	},

	onSelect(e) {
		console.log("clicked", e.target.dataset.value);
		e.preventDefault();
		if(this.props.onSelect) {
			this.props.onSelect(e.target.dataset.value);
		}
		else {
			return false;
		}
	},

	render() {
		return(
			<ul className={this.props.className || "list-group"}>
				{this.renderOptions()}
			</ul>
		)
	}
});