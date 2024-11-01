multiplicationTable = function(size) {
    let tab = []
    for(let i = 1; i < size+1; i++) {
        let row = []
        for(let j = 1; j < size+1; j++) {
            row.push(j*i)
        }
        tab.push(row)
       

    }
    return tab
  }

  console.log(multiplicationTable(3))