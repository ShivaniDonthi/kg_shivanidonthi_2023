const get_num = {   0: 'Zero',   1: 'One',   2: 'Two',   3: 'Three',   4: 'Four',   5: 'Five',   6: 'Six',   7: 'Seven',   8: 'Eight',   9: 'Nine' };

class Conversion {

    constructor(num_array){
        this.number_array = num_array
    }

    convert_num(){
        // result is stored in the array
        let k_arr = []
        for (let each of this.number_array) {
            // checks if the input is a number or not using regex. Allows spaces between, infront of and after the number.
            if (/^(\s*[0-9]+\s*)+$/.test(each)) {
                let trimmed_str = each.trim();
                // map if number with the const values defined before
                let k = trimmed_str.split('').map(function(item) {
                    if (item != '') {
                        return get_num[item]
                    }
                }).join('');
                k_arr.push(k)
            }
        }
        // returns comma separated string as output
        return k_arr.join(',');
    }
}

// Arguments are retrived
let num_array = process.argv.slice(2)
// Invoke the funtion here
output = new Conversion(num_array).convert_num();
console.log(output);
