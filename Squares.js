function sqInRect(lng, wdth) {
    const tab = []
    if (lng == wdth) {
        return null
    }else{

  

        while (lng > 0 && wdth > 0) {
            if (lng > wdth) {
                tab.push(wdth)
                lng -= wdth


            } else {
                tab.push(lng)
                wdth -= lng
            }

        }
        return tab
    }
   
}
console.log(sqInRect(3, 5))