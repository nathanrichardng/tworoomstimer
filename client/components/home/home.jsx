Home = React.createClass({
	noBotPadding: {
		height: "50px"
	},
	render() {
		return(
			<div>
				<div className="container">
					<div className="row" style={this.noBotPadding}>
				      <nav className='navbar navbar-default'>
				        <div className='container-fluid'>
				          <div className='navbar-header'>
				            <a className="navbar-brand" href="/"><i className="fa fa-bomb"></i> 2R1B</a>
				          </div>
				        </div>
				      </nav>
				    </div>
				</div>
				<img src="/images/logo.png" width="100%" height="auto"/>
				<a href="/game"><button className="btn btn-info col-xs-12">Play with Cards</button></a>
			</div>
		)
	}
});