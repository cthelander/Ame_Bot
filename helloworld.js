var homePage = React.createClass({
    displayName: 'homepage',
    render: function() {
        return (
          React.createElement('div', {className: "commentBox"},
              "Hello, world! I am a CommentBox."
          )
            //<div style="text-align: center; padding-top: 50px">
            //    <h1>Amy's art stuff </h1>,
            //    <p class="lead">Stuff about art and other stuff Blah blah blah.... </p>
            //</div>
        );
    }
});

ReactDOM.render(
    React.createElement(homePage, null),
    document.getElementById('test')
);






