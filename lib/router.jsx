FlowRouter.route('/', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Round round={1} players={22} />
        });
	}
});