FlowRouter.route('/', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Home />
        });
	}
});

FlowRouter.route('/game', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Game />
        });
	}
});

FlowRouter.route('/cards', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <CardViewer />
        });
	}
});