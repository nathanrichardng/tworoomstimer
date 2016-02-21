SelectSets = React.createClass({
	
	propTypes: {
		setOptions: React.PropTypes.array,
		selectSets: React.PropTypes.func
	},

	selectSets() {
		var selected = this.refs.select.getSelected();
		this.props.selectSets(selected);
	},

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
					<h3>Which sets are you playing with?</h3>
				</div>
				<SelectMultiple
					ref="select"
					options={this.props.setOptions}
					className="col-xs-12 set-select" />

				<button className="btn btn-info col-xs-12 start-button" onClick={this.selectSets}>Next</button>
			</div>
		)
	}
});