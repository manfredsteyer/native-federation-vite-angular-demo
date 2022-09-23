const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "host",

  exposes: {
    "./comp": "src/app/app.component.ts"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto", }),
  },

});
