var xTag = {
  css: `:host {
      cursor: pointer;
      color: green;
    }`,

  exports: {
    onClick() {
      this.update({
        message: "goodbye"
      });
    }
  },

  template: function(template, expressionTypes, bindingTypes, getComponent) {
    return template("<p expr0><!----></p>", [
      {
        redundantAttribute: "expr0",
        selector: "[expr0]",

        expressions: [
          {
            type: expressionTypes.TEXT,
            childNodeIndex: 0,

            evaluate: function(scope) {
              return scope.state.message || scope.props.message;
            }
          },
          {
            type: expressionTypes.EVENT,
            name: "onclick",

            evaluate: function(scope) {
              return scope.onClick;
            }
          }
        ]
      }
    ]);
  },

  name: "x-tag"
};

export default xTag;
