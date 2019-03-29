(function(window, undefined) {
  var dictionary = {
    "85e1c230-d445-48a8-9669-9390f58c8651": "Screen 5_N",
    "e7766b86-dd43-4ad4-be86-60a87cdd7d20": "Screen 9",
    "7c2c4315-5ab9-4563-bcf0-6319b2021ae0": "Screen 13",
    "f92fa42d-3582-42f9-9921-82a752352d0b": "Screen 8",
    "b655c5e7-857f-4c42-8523-933b22340c0d": "Screen 12",
    "c9211f95-1a85-481f-b076-1b521ecb6741": "Screen 7",
    "6031992f-c167-4779-a488-23677fd8e02b": "Screen 11",
    "f51f2bde-f417-49de-9004-190f89816e93": "Screen 10",
    "ef284dbc-19ac-415b-9011-da0df3f91474": "Screen 6",
    "6993dff1-2bd9-4242-a0fe-a2a6ce7536a3": "Screen 5",
    "15f18a9e-4376-4c79-9b37-4f9b50cbe9ee": "Screen 4",
    "45f02c28-f958-41b4-b11c-5ece0c9578c6": "Screen 3",
    "4796dcae-327b-4a1a-adb8-74ea5efa93e4": "Screen 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "02296a63-c032-484a-af3d-b1af293881bc": "Screen design_eng",
    "5124ae63-6cf6-40f6-b68b-0edd408216db": "Screen design_ff",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);