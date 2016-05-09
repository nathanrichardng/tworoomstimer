FlowRouter.route('/', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Home />,
			footer: <Footer />
        });
	}
});

FlowRouter.route('/game', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Game />,
			footer: <Footer />
        });
	}
});

FlowRouter.route('/cards', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <CardViewer />,
			footer: <Footer hideCard={true} />
        });
	}
});