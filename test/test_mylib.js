var assert = require("assert");

var app = require("../dist_test/bundle.js");
var mylib = app.mylib;

describe("mylib.add", function(){
  it("shoud return a + b", function(){
    assert.equal(3, mylib.add(1, 2));
  });
});
