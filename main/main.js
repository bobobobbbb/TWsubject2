module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.elementNum()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.array = input
  }

  minimum() {
    // Write your code here
    var minNum = Infinity;
    for (var index in this.array) {
      if (this.array[index] < minNum) minNum = this.array[index]
    }
    return minNum
  }
    // Write your code here
  maxmum() {
    var maxNum = -Infinity;
    for (var index in this.array) {
      if (this.array[index] > maxNum) maxNum = this.array[index]
    }
    return maxNum
  }

  elementNum() {
    var counter = 0;
    counter = this.array.length
    return counter
  }

  average() {
    var sum = 0;
    for (var index in this.array) {
      sum += this.array[index]
    }
    var avr = sum / this.array.length
    avr = avr.toFixed(2)
    return avr
  }

}
