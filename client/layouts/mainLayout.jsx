MainLayout = React.createClass({
	render() {
		return (
			<div className="main-layout">
		        <main>{this.props.content}</main>
		        <footer>
		        	{this.props.footer}
		        </footer>
		     </div>
		)
	}
});