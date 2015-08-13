/*
 * Simple plugin that automatically puts a username and password 
 * in a authentication window
*/

function callbackFn(details) {
  return {
    authCredentials: {
      username: "XXX",
      password: "XXX"
    }
  };
}

chrome.webRequest.onAuthRequired.addListener(
  callbackFn,
  {urls: ["<all_urls>"]},
  ['blocking']
);