function setIntersection(arr1, arr2){
    let intersection = {}
    let intersectionArray = []
    for(let i = 0; i < arr1.length; i++)
        intersection[arr1[i]] = intersection[arr1[i]] === undefined ? 1 : intersection[arr1[i]]+1
    
        

    for(let i = 0; i < arr2.length; i++)
        intersection[arr2[i]] = intersection[arr2[i]] === undefined ? 1 : intersection[arr2[i]]+1

    for(props in intersection)
        if(intersection[props] > 1)
            intersectionArray.push(props)
    
    return intersectionArray;
}

module.exports = setIntersection;