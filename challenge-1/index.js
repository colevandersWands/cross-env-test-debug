function x() {
  // write me
}


console.log('challenge 1')
// debug scripts go directly in this file
// this way they can practice debugging in browser or node
//  no 'require' issues
// and all code is in one file
//  no file-jumping debuggers




// so unit tests will run, but it doesn't break if debugged in the browser
try { module.exports = x }
catch (err) { /* browser! */ };
