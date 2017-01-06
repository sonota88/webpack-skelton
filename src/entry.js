function puts(... args){
  console.log.apply(console, args);
}

var $ = require("jquery");
var text = require("raw!./foo.txt");
var mylib = require("./mylib");

$(()=>{
  puts(text);
  puts(mylib.add(1, 2));
});
