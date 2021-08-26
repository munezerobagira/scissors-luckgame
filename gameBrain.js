exports.play=(character1, character2 )=>{
    switch(character1){
      case 'rock':
        return character2=="scissors"?"Win": "Loss"
      case 'paper':
        return character2=="rock"?"Win": "Loss"
      case 'scissors':
        return character2=="paper"?"Win": "Loss"
    }
  }