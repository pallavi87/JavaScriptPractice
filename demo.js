console.log(typeof null, 'test')
function duplicate(str){
    let r =[]

    for(let i=0; i<=str.length-1; i++){
        if(!r.includes(str[i])){
            r = r + str[i]
        }
    }
    return r

}

console.log(duplicate("Helloworld"))