function Vowel(a){

    let v ='AEIOUaeiou'
    let t =''
    for(let i=0;i<=a.length-1;i++){
        if(!v.includes(a[i])){
            t =t+a[i]
        }
    }
    return t
}

console.log(Vowel('Concept of the day'))