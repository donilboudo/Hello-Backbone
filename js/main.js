//view with template
var AppView = Backbone.View.extend({
	//define element
    //el : '#container',
    //define template
    //we use '<%= var %>' or '<%- var %>'  to change render dynamically the variable
    template: _.template("<h2> Hello <%=who%> </h2>"),
    render: function(){
    	//for the template you need to pass the data to corresponding variable
        this.$el.html(this.template({ who: 'Fabrice'}));
        return this;
    }
});

//view without template
var AppView2 = Backbone.View.extend({
	//el: '#container2',
	render: function() {
		this.$el.html("Hey Honey");
		return this;
	}
})

var appView = new AppView().render().el, 
appView2 = new AppView2().render().el;
$('#container').html(appView);
$('#container2').html(appView2);