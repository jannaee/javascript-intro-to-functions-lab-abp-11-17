function shout(string){
    return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string){
    switch (true){
        case string.toUpperCase()===string:
            return "YES INDEED!"

        case string.toLowerCase() === string:
            return "I can\'t hear you!"

        case string.toLowerCase() !== string:
            return 'I love you, too.'
    }
};
