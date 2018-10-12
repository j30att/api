export function optionFilter() {
    return function (input, search) {
        if(input && search){
            let result = {};

            Object.keys(input).map((key) => {
                if(input[key].toLowerCase().indexOf(search.toLowerCase()) >= 0){
                    result[key] = input[key];
                }
            });

            return result;
        }
        return input;
    }
}