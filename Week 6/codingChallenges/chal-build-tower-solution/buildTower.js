function towerBuilder(nFloors) {
    const tower = []      // ['  *  ', ' *** ', '*****']
    let towerString = '*' // '***', '*****', '*******'
      for(let i = 0; i<nFloors; i++){ 
        tower.push(towerString)
        towerString += "**"
        for (let j = 0; j<i; j++){
          tower[j] = " " + tower[j] + ' '  // this part adds the spaces
        }
      }
      return tower
    }

    towerBuilder(3)  // 1st floor starts with one '*' block, each suceeding floor will increase in odd increments (1 floor = 1 block, 2 floor = 3 blocks, 3 floor = 5 blocks) 
    /* [
      '  *  ',
      ' *** ',
      '*****'
    ]  */
    
    //alternatively
    // function towerBuilder(nFloors) {
    //   var tower = [];
    //   for (var i = 0; i < nFloors; i++) {
    //     tower.push(" ".repeat(nFloors - i - 1)
    //              + "*".repeat((i * 2)+ 1)
    //              + " ".repeat(nFloors - i - 1));
    //   }
    //   return tower;
    // }
    