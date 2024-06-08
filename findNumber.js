function findUniq(arr) {
    
    let sortList = arr.sort((a, b) => a - b);
    
  
    if (sortList[0] !== sortList[1]) {
        return sortList[0];
    } else {
        return sortList[sortList.length - 1];
    }
}


