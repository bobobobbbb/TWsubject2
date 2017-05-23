module.exports = function main(str) {
  // Write your cade here
     var len = str.length
             var num = 0;
         for (var i = 0; i < len; i ++) {
               var currentnum =  parseInt(str.substr(i, 1))
               num += currentnum
             }
             return num
};
