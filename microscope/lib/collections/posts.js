Meteor.methods({
postInsert: function(postAttributes) {
check(this.userId, String);
check(postAttributes, {
title: String,
url: String
});
Posts.deny({
update: function(userId, post, fieldNames, modifier) {
var errors = validatePost(modifier.$set);
return errors.title || errors.url;
}
});
var errors = validatePost(postAttributes);
if (errors.title || errors.url)
throw new Meteor.Error('invalid-post', "You must set a title and URL for
your post");
var postWithSameLink = Posts.findOne({url: postAttributes.url});
if (postWithSameLink) {
return {
postExists: true,
_id: postWithSameLink._id
}
}
var user = Meteor.user();
var post = _.extend(postAttributes, {
userId: user._id,
author: user.username,
submitted: new Date()
});
var postId = Posts.insert(post);
return {
_id: postId
};
}
});