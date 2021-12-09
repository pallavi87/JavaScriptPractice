function secLargestNum(a) {
    
  let  large = 0
  let second = 0
    for(let i=0;i<=a.length-1;i++){
            if(a[i]>large){
                second=large
                large =a[i]  
                console.log(large,second)
            }
            else if (a[i]>second){
                second = a[i]
            }
        }
    
    return second
    
}

console.log(secLargestNum([10,20,90,80,45]))