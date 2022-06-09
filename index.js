const nemo = ['Nemo'];
const everyone = ['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank'] // Everyone Array
const large = new Array(10000).fill('nemo');
function findNemo(array){
    let t0 = performance.now();
    for(i=0; i<array.length;  i++){
        if(array[i]=== 'nemo'){
            console.log('Found Nemo')
        }
    }
    t1 = performance.now();
    console.log('call to find nemo ' +(t1-t0)+ ' Miliseconds');
}

findNemo(large);