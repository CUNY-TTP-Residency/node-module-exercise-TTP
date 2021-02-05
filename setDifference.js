function setDifference(arr1, arr2){
    let difference = {}
    let differenceArray = []

    for(let i = 0; i < arr1.length; i++)
        difference[arr1[i]] = difference[arr1[i]] === undefined ? 1 : difference[arr1[i]]+1
    
    for(let i = 0; i < arr2.length; i++)
        difference[arr2[i]] = difference[arr2[i]] === undefined ? 1 : difference[arr2[i]]+1

    for(props in difference)
        if(difference[props] === 1)
            differenceArray.push(props)
    
    return differenceArray;
}

module.exports = setDifference;