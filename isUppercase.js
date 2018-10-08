function isFirstLetterUpperCase(str) {
    let regexp = /^[A-Z]$/;
    if(regexp.test(str)){
        console.log("string's first character is uppercase")
    }else{
        console.log("string's first character is not uppercase")
    }
}
