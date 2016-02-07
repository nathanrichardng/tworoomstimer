FlowRouter.route('/', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Game players={5} />
        });
	}
});