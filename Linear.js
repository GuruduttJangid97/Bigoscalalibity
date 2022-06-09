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
// Linear means if element is increased proportionally operations is increased
findNemo(nemo); // O(n) ----> O(1) Linear Time
findNemo(everyone); // O(n) ----> O(10) Linear Time
findNemo(large); // O(n) ----> O(1000000) Linear Time

// ES5
function compressAllbox(boxes){
    boxes.forEach(function(itme){
        console.log(item);
    });
}

//ES&
const compressAllbox = boxes =>{
    boxes.forEach(box => console.log(box));
}

