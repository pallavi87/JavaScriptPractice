 function Palindrome(a){

    let r = ''
    console.log(a.length)
    
    for(let i=a.length-1;i>=0; i--){
      r= r+ a[i]
    }
    
    if (a == r) {
        return true
    } else {
        return false
    }
 }

 console.log(Palindrome('madam'))