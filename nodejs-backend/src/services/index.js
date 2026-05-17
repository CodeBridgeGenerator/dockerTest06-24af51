const highways = require("./highways/highways.service.js");
const maintenance = require("./maintenance/maintenance.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(highways);
  app.configure(maintenance);
    // ~cb-add-configure-service-name~
};
