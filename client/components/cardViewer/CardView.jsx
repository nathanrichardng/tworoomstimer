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
	cardHolderStyle() {
		//move this piece to CardViewer so we can put the card select component in it.
		var style = {
			width: "100vw",
			height: "100vh",
			backgroundColor: "#333",
			position: "relative"
		}
		return style;
	},
	render: function() {
		return (
			<div className="card-holder" style={this.cardHolderStyle()}>
				<div className="card" style={this.cardStyle()}>
					<h3>{this.props.name}</h3>
					<hr/>
					<p>{this.props.description}</p>
				</div>
			</div>
		)
	}
});