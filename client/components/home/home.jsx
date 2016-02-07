Home = React.createClass({
	render() {
		return(
			<div className="container">
				<div className="row">
			      <nav className='navbar navbar-default'>
			        <div className='container-fluid'>
			          <div className='navbar-header'>
			            <a className="navbar-brand" href="/"><i className="fa fa-bomb"></i> 2R1B</a>
			          </div>
			        </div>
			      </nav>
			    </div>
				<div className="jumbotron">
					<h3>Home Page</h3>
					<p>Generic home page for the time being</p>
				</div>
				<a href="/game"><button className="btn btn-info">Play with Cards</button></a>
			</div>
		)
	}
});