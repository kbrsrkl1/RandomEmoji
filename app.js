const btnEl = document.getElementById("btn");
const emojiEl =  document.getElementById("emoji-name")

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=2919020ccbc4635e54c5423914d21afbcc13ba5b")

    data = await response.json()

    for (let i=0; i<1500; i++){
        emoji.push({
            emojiname: data[i].character,
            emojiCode: data[i].unicodeName
        })
    }
}

getEmoji()


btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    console.log(randomNum)
    btnEl.innerText = emoji[randomNum].emojiname;
    emojiEl.innerText = emoji[randomNum].emojiCode;
});