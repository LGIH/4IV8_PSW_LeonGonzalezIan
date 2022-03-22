function reverseNumA(n){
    n = n + ""
    let aux = ""

    for(let i = n.length - 1; i >= 0; i--){
        aux += n[i]
    }

    return + aux
}