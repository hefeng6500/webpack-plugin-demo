const { validate } = require("schema-utils");

// 选项对象的 schema
const schema = {
  type: "object",
  properties: {
    test: {
      type: "string",
    },
  },
};

class HelloWorldPlugin {
  constructor(options = {}) {
    validate(schema, options, {
      name: "Hello World Plugin",
      baseDataPath: "options",
    });
  }

  apply(compiler) {
    compiler.hooks.done.tap(
      "Hello World Plugin",
      (stats /* 绑定 done 钩子后，stats 会作为参数传入。 */) => {
        console.log("Hello World!");
      }
    );
  }
}

module.exports = HelloWorldPlugin;
