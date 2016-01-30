FlowRouter.route('/', {
	action: function(params) {
		ReactLayout.render(MainLayout, { 
			content: <Timer />
        });
	}
});