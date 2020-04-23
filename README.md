a boilerplate setup for basic coding challenges

* unit tests are evaluated in node
* do we encourage them to write debugging scripts in the same file as their function?
  * this is not "ideal"
    * the debug scripts will run (and maybe break) each time the tests are run
    * it's also not a best practice to teach
    * but it does mean that they can seamlessly debug their functions either in the browser or in node
    * and than their debugger won't jump across files when they step through their debug scripts
  * having a separate `debug.js` file in each challenge directory is possible, but then you have 'require' gymnastics
