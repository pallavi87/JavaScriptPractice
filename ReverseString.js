
function Reverse(){

    let str= 'Pallavi'
    let res=''
    let a=str.split(' ')
    console.log(a)
    console.log(a.join(''))
    console.log(str.length)
    for(let i=str.length-1; i>=0 ;i--){
        res =res + str[i]
    
    }
    return res
}


console.log('Reverse of string :' ,Reverse())