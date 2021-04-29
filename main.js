var num_array = [3,'9000   ',901];
var get_num = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine'
}
let k_arr = []
for (let each of num_array) {
    if (typeof parseInt(each) != 'number') {
        // test = parseInt(each)
        console.log('Enter only numbers',typeof test)
        return
    }
    console.log(each)
    var str1 = each.toString()
    console.log(str1)
    let k = str1.trim().split('').map(function(item) {
        console.log(item)
        return get_num[item]
    }).join('');
    k_arr.push(k)
}
console.log(k_arr);
