FlowRouter.route('/', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Round round={3} players={11} />
        });
	}
});