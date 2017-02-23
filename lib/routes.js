FlowRouter.route('/', {
	name: 'home',
	action() { 
		BlazeLayout.render('HomeLayout');
	}
});


FlowRouter.route('/login', {
	name: 'login',
	action() { 
		BlazeLayout.render('LoginLayout');
	}
});


FlowRouter.route('/reset', {
	name: 'reset',
	action() { 
		BlazeLayout.render('ResetLayout');
	}
});


FlowRouter.route('/about', {
	name: 'about',
	action() { 
		BlazeLayout.render('AboutLayout');
	}
});


FlowRouter.route('/chat', {
	name: 'chat',
	action() { 
		BlazeLayout.render('ChatLayout');
	}
});


FlowRouter.route('/faq', {
	name: 'faq',
	action() { 
		BlazeLayout.render('FAQLayout');
	}
});


FlowRouter.route('/request', {
	name: 'request',
	action() { 
		BlazeLayout.render('RequestLayout');
	}
});

FlowRouter.route('/blog', {
	name: 'about',
	action() { 
		BlazeLayout.render('BlogLayout');
	}
});

FlowRouter.route('/single-blog', {
	name: 'single-blog',
	action() { 
		BlazeLayout.render('SingleBlogLayout');
	}
});

FlowRouter.route('/service-provider-guide', {
	name: 'service-provider-guide',
	action() { 
		BlazeLayout.render('ServiceProviderLayout');
	}
});

FlowRouter.route('/service-provider-referal', {
	name: 'service-provider-referal',
	action() { 
		BlazeLayout.render('ServiceReferalLayout');
	}
});

FlowRouter.route('/tnc', {
	name: 'tnc',
	action() { 
		BlazeLayout.render('tncLayout');
	}
});

FlowRouter.route('/star-rating', {
	name: 'star-rating',
	action() { 
		BlazeLayout.render('starLayout');
	}
});

FlowRouter.route('/step1', {
	name: 'step1',
	action() { 
		BlazeLayout.render('step1Layout');
	}
});

FlowRouter.route('/step2', {
	name: 'step2',
	action() { 
		BlazeLayout.render('step2Layout');
	}
});

FlowRouter.route('/step3', {
	name: 'step3',
	action() { 
		BlazeLayout.render('step3Layout');
	}
});

FlowRouter.route('/step4', {
	name: 'step4',
	action() { 
		BlazeLayout.render('step4Layout');
	}
});





FlowRouter.route('/edashboard', {
	name: 'dashboard',
	action() { 
		BlazeLayout.render('EntertainerDashboardLayout');
	}
});

FlowRouter.route('/edashboard2', {
	name: 'dashboard2',
	action() { 
		BlazeLayout.render('EntertainerDashboard2Layout');
	}
});

FlowRouter.route('/einfo', {
	name: 'info',
	action() { 
		BlazeLayout.render('EntertainerInfoLayout');
	}
});

FlowRouter.route('/einfo2demo', {
	name: 'info',
	action() { 
		BlazeLayout.render('EntertainerInfo2DemoLayout');
	}
});

FlowRouter.route('/eprofile', {
	name: 'profile',
	action() { 
		BlazeLayout.render('EntertainerProfileLayout');
	}
});





FlowRouter.route('/udashboard', {
	name: 'udashboard',
	action() { 
		BlazeLayout.render('UserDashboardLayout');
	}
});

FlowRouter.route('/uinfo', {
	name: 'uinfo',
	action() { 
		BlazeLayout.render('UserInfoLayout');
	}
});

FlowRouter.route('/urequest-details', {
	name: 'request-details',
	action() { 
		BlazeLayout.render('UserRequestLayout');
	}
});

FlowRouter.route('/uyour-quotes', {
	name: 'your-quotes',
	action() { 
		BlazeLayout.render('YourQuotesLayout');
	}
});






