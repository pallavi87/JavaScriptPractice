
function Prime(){
    let r =[]
 a=2
    
    while(a<100){
        flag= 1
     for(i=2;i<=a/2;i++){
         if(a%i == 0){
             flag=0
         }
     }
     if(flag==1){
        r.push(a)
     }
        a++
    }
    return r
}

console.log(Prime())