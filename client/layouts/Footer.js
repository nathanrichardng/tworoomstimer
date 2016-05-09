Footer = React.createClass({
	propTypes: {
		hideCard: React.PropTypes.bool
	},
	render() {
		return(
			<div className="zoom-hidden">
				<BackgroundMusic />
				<CardIcon hide={this.props.hideCard}/>
			</div>
		)
	}
});