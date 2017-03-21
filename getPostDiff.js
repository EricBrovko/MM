/* Difference beetwen Get and Post requests */

var GET_NOTES = {
  1: 'Requests data from a specified resource', // get params
  2: 'can be cached and bookmarked',
  3: 'never be used when dealing with sensitive data',
  4: 'length restrictions', // around 2000 characters
  5: 'should be used only to retrieve data'
};
var  POST_NOTES = {
  1: 'Submits data to be processed to a specified resource', // query string is sent in the HTTP message body
  2: 'never cached',
  3: 'don`t remain in the browser history',
  4: 'can`t be bookmarked',
  5: 'no restrictions on data length'
};

/* Idempotent */

/* term idempotent is used more comprehensively to describe an operation 
hat will produce the same results if executed once or multiple times
example - Get request. Same request === same results */