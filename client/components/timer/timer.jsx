Timer = React.createClass({
	render() {
		return(
			<ReactCountdownClock 
						seconds={10}
	                    color="#4682B4"
	                    alpha={0.9}
	                    size={300}
	                    onComplete={function() { console.log("done!")} } />
		)
	}
});