CardView = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		description: React.PropTypes.string,
		color: React.PropTypes.string
	},
	cardStyle() {
		var style = {
			backgroundColor: this.props.color,
			position: "absolute",
			top: "30px",
			bottom: "30px",
			left: "20px",
			right: "20px",
			borderRadius: "20px",
			padding: "0px 20px"
		}
		return style;
	},
	render: function() {
		return (
			<div className="card" style={this.cardStyle()}>
				<h3>{this.props.name}</h3>
				<hr/>
				<p>{this.props.description}</p>
			</div>
		)
	}
});