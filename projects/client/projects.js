Projects = new Meteor.Collection('projects');

if (Meteor.isClient) {
	//Session.setDefault('appName', 'Project Manager');
	Session.setDefault('showProjectDialogue', false);
  // counter starts at 0
// Meteor.Router.add({'/':'homepage','/projects':'projects', '/employees':'employees'})
	Handlebars.registerHelper("formatDate", function(datetime, format) {
	  if (moment) {
	    
	    return moment(datetime).format("MM/DD/YYYY");
	  }
	  else {
	    return datetime;
	  }
	});
   
   Template.menu.helpers = function(){
	   return Session.get('appName');	
	
   }



 }
 Template.projects.projectList = function(){
	 return Projects.find();
	
 }
 Template.projectForm.events({'click .save':function(evt,templates){var name = templates.find('.name').value; var client = templates.find('.client').value; addProject(name,client); Session.set('showProjectDialog',false);},'click .cancel':function(evt,templates){Session.set('showProjectDialog',false);}})
 Template.projects.events({'click .addProject':function(evt,templates){Session.set('showProjectDialog',true);}})
 //Template.projects.showProjectDialog = function(){return Session.get('showProjectDialog');} var addProject = function(name,client) {Projects.insert({name:name,client:client});}});
