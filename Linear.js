const nemo = ['Nemo'];
const everyone = ['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank'] // Everyone Array
const large = new Array(1000000).fill('nemo');
function findNemo(array){
    for(i=0; i<array.length;  i++){
        if(array[i]=== 'nemo'){
            console.log('Found Nemo')
        }
    }
}

findNemo(large); // O(n) ----> Linear Time