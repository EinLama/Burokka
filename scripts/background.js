define(function(require) {
  "use strict";

  var FILTERS = require("filters");

  var options = {
    urls: [
      "http://*/*",
      "https://*/*"
    ],
    types: ["image", "sub_frame"]
  };

  function requestCallback(req) {
    console.log("REQ", req);

    for (var i=0; i != FILTERS.length; ++i) {
      var f = FILTERS[i];

      if (typeof(f) === "string" && req.url.indexOf(f) !== -1 ||
          typeof(f) === "object" && req.url.match(f)) {

        console.warn("BLOCKED", req, "as", req.type, "with", f);
        return { cancel: true };
      }
    }

    return null;
  }

  chrome.webRequest.onBeforeRequest.addListener(requestCallback, options, ["blocking"]);

  console.log("started up...");
});
