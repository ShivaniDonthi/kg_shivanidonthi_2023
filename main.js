let num_array = process.argv.slice(2)
const get_num = {   0: 'Zero',   1: 'One',   2: 'Two',   3: 'Three',   4: 'Four',   5: 'Five',   6: 'Six',   7: 'Seven',   8: 'Eight',   9: 'Nine' };

function convert_num(number_array){
    let k_arr = []
    for (let each of number_array) {
        if (/^(\s*[0-9]+\s*)+$/.test(each)) {
            trimmed_str = each.trim();
            let k = trimmed_str.split('').map(function(item) {
                if (item != '') {
                    return get_num[item]
                }
            }).join('');
            k_arr.push(k)
        }
    }
    return k_arr.join(',');
}

console.log(convert_num(num_array));