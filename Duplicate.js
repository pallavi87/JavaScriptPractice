
function duplicate(a) {
    let r= []
    let temp =a
    for(let i=0;i<=a.length-1;i++){
    if(!r.includes(a[i])){
        r.push(a[i])
     } 
    }
    console.log(r)
    for(let i=0;i<=r.length-1;i++){
        let count =0
        for(let j=0;j<=temp.length-1;j++){
           
            if(r[i]==temp[j]){
                count++
            }
        }
        console.log(r[i] ,':',count )
    }
}

duplicate('Pallavi')