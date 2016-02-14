FlowRouter.route('/', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Home />
        });
	}
});

FlowRouter.route('/start', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <StartMenu />
        });
	}
});

FlowRouter.route('/game', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Game players={22} />
        });
	}
});