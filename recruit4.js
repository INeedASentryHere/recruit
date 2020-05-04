const Discord = require(`discord.js`);
const bot = new Discord.Client();


bot.login(process.env.token);

function catchErr (err, message) {

    bot.users.get("342630541079609355").send("Hiba: ```" + err + "```");

}

let prey = ["Igen.", "Nem.", "Tetszel :heart:", "Ezt most újra, kérlek.", "Igen, mert én vagyok az.", "Mi bajod?", "lány vagy?", "buta-e vagy", "Hülye vagy", "Tényleg?", "XDD", "Milyen kérdés ez?", "Egy állat", "De én nem spamelek :flushed:", "Ne spamelj vagy mutot kapsz", "Te is", "Lehetséges.", "Miért utánzol?", "Ki a melge?", "szia", "Elefánt", "igen", "semmi", "szerelmes vagyok beléd", "nem",  "jól van", "Jót érzel?", "Ki a legjobb a szerveren?", "Ne utánozz", "Nem", "Nem", "Ne haragudjon meg szomszéd, de maga megkukult?", "FlareGuy", "edzsi", "Igen", "Egyértelműen én.", "Szia. Hogy vagy?", "Én jól, és te?", "Maximum te", "De-de", "Hello", "?", "Ne trollkodj kérlek.", "Nem kérdeztem.", "Hú de hülye vagy.", "szia", "Tudjuk, h te vagy hulye.", "Esküszöm mint egy ovis xD", "a tej az finom, ugye?", "Igen vagy nem???", ":cicaxd:", "Kösz", "Nem kérdés bazmeg.", "Olyan kérdés ez.", "a tulaj", ":CR_PepePolice: Hívom a copyright policet.", "Igen baszki.", "XD", "buzi", ":fortnite:", "Vicces mert nem igaz xdxxxddd",  "Csóró vagy cicám.", "Beraksz az ágyba?", "köszönöm", "de", "de", "de", "nem vagyok buta", "XD", "szia hogy vagy", "szija", "!talk", "spam", "szeretlek", "őt nem", "mond mégegyszer ha mered!" ];

let ghosty = ["Igen.", "Nem.", "Valószínűleg."];


bot.on (`ready`, () => {
   
    try {
    console.log(`Bejelentkezve mint ${bot.user.tag}!`);

    setInterval(() => {

      let status = `${bot.guilds.size} szerver | use !talk`
      bot.user.setActivity ( status, {type: "WATCHING"});
      
    }, 30000);


}

catch (err) {
    catchErr (err, message);
}

});

bot.on ("message", message => {

    try {

        if (message.author == bot.user) {
            return;
        }

 if (message.channel.type == "dm") {

function cecca () {
    let infEmbed = new Discord.RichEmbed()
 .setTitle ("Privát üzenetet kaptam!")
  .setColor("RANDOM")
  .addBlankField()
  .addField("Üzenet küldője", `${message.author}`)
  .addBlankField()
  .addField("Üzenet tartalma", `${message.content}`)
  .addBlankField()
  .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
  .setTimestamp();

  
 bot.users.get("342630541079609355").send(infEmbed);
 
 message.author.send("\t **Amennyiben megtetszettem, használhatsz engem a saját szervereden is az alábbi meghívóval:** \n  https://discordapp.com/api/oauth2/authorize?client_id=667793688910626816&permissions=8&scope=bot");
 
}

cecca();

 return;
 
}

const args = message.content.substring().split(" ");
var uzenet = message.content.substring().split(" ");






if (message.content.toLowerCase().startsWith("!talk")) {

      if (message.guild.id === "322071698465882112") {

          if (!args[1]) {

             message.channel.send("Normálisan szólj hozzám!");

    } else if (message.content.toLowerCase().includes("@everyone")) {

      
      message.channel.send("Hát erre rábasztál.");
 
      if (!message.member.hasPermission("ADMINISTRATOR")) {

        message.member.ban(1);

      }
      

    } else {

    uzenet.shift();

    ghosty.push(uzenet.join(" "));

   let theory = Math.floor(Math.random() * ghosty.length);

   message.channel.send(ghosty[theory]);

   }

   return;
  } 

    if (!args[1]) {

        message.channel.send("Normálisan szólj hozzám!");

     } else if (message.content.toLowerCase().includes("@everyone")) {

      
      message.channel.send("Hát erre rábasztál.");
 
      if (!message.member.hasPermission("ADMINISTRATOR")) {

        message.member.ban(1);

        }
       return;

      } else if (message.content.toLowerCase().includes("@here")) {

        message.channel.send("Hát erre rábasztál.");
 
      if (!message.member.hasPermission("ADMINISTRATOR")) {

        message.member.ban(1);

      }
      
     } else {

   uzenet.shift();
     
   prey.push(uzenet.join(" "));

  let funnyNumber = Math.floor(Math.random() * prey.length);

  message.channel.send(prey[funnyNumber]);

  
     }
     
  } else if (message.content.toLowerCase().startsWith("!getdata")) {

    if (prey.toString().length >= 1800 ) {
           
         
        message.channel.send(`***A szótáram meghaladja a 2000 karaktert. Innentől ezek a szavak már beépültek hozzám, erre a commandra többet nincs szükség. Mostmár minden halad előre magától.***`);

         

       } else {

         message.channel.send(`"${prey.join('", "')}"`);

       }

  } else if (message.content.toLowerCase().startsWith("!guilds")) {

    message.channel.send(`Elérhető vagyok **${bot.guilds.size}** szerveren.`);


  } else if (message.content.toLowerCase().startsWith("!names")) {


    console.log(bot.guilds.map(g => g.name));
 

  } else if (message.content.toLowerCase().startsWith("!invite")) {

   message.channel.send(` \t **Íme a bot meghívó linkje:** \n  https://discordapp.com/api/oauth2/authorize?client_id=667793688910626816&permissions=8&scope=bot`);

 
  } else if (message.content.toLowerCase().startsWith("!stats")) {

      console.log(bot.guilds);

  }

}
    
    catch (err) {
        catchErr (err, message);
    }

} )
