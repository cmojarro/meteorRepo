Router.configure({
layoutTemplate: 'projects',
'/projects':'projects',
'/employees':'employees'
//layoutTemplate: 'projects'

});
//Router.route('/', {name: 'projects'});
Router.route('/', {'/':'homepage','/projects':'projects', '/employees':'employees'});
//Router.route('/', {name: 'projects'});
// Meteor.Router.add({'/':'homepage','/projects':'projects', '/employees':'employees'})


//Meteor.Router.add({
// 	'/':'homepage',
//	'/projects':'projects',
//	'/employees':'employees'
// })