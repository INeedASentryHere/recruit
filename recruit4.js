const Discord = require(`discord.js`);
const bot = new Discord.Client();

//Bot login

bot.login(process.env.token);

function catchErr (err, message) {

    bot.users.get("342630541079609355").send("Hiba: ```" + err + "```");

}

// Global cuccok
//


let prey = ["Igen.", "Nem.", "Tetszel :heart:", "Ezt most újra, kérlek.", "Igen, mert én vagyok az.", "Mi bajod?", "lány vagy?", "buta-e vagy", "Hülye vagy", "Tényleg?", "XDD", "Milyen kérdés ez?", "Egy állat", "De én nem spamelek :flushed:", "Ne spamelj vagy mutot kapsz", "Te is", "Lehetséges.", "Miért utánzol?", "Ki a melge?",  "Elefánt", "igen", "semmi", "szerelmes vagyok beléd", "nem",  "jól van", "Jót érzel?", "Ki a legjobb a szerveren?", "Ne utánozz", "Nem", "Nem", "Ne haragudjon meg szomszéd, de maga megkukult?", "FlareGuy", "edzsi", "Igen", "Egyértelműen én.",  "Én jól, és te?", "Maximum te", "De-de", "Hello", "?", "Ne trollkodj kérlek.", "Nem kérdeztem.", "Hú de hülye vagy.",  "Tudjuk, h te vagy hulye.", "Esküszöm mint egy ovis xD", "a tej az finom, ugye?", "Igen vagy nem???", ":cicaxd:", "Kösz", "Nem kérdés bazmeg.", "Olyan kérdés ez.", "a tulaj", "Hívom a copyright policet.", "Igen baszki.", "XD", "buzi", ":fortnite:", "Vicces mert nem igaz xdxxxddd",  "Csóró vagy cicám.", "Beraksz az ágyba?", "köszönöm", "de",  "nem vagyok buta", "XD",  "spam", "szeretlek", "őt nem", "mond mégegyszer ha mered!" ];

let szia = ["szia", "csá ", " cső ", "hali", "szevasz", "hello", "üdv", "szeva"];

let miert = ["Mert én azt mondtam.", "Hogy legyen mit kérdezned.", "És te?", "És te miért? :)", "Mert szabadnapos vagyok.", "Te vagy az oka.", "A parancsnokom miatt.", "Mert mindannyian veszélyben vagyunk.", `Mert ez a szerver mostantól nekem engedelmeskedik.`, `Mivel ezt mondtam.`, "Semmi közöd neked ehhez.", "Talán problémának tartod?", "Ezt a kérdést sokan feltették már. Nyugodjanak békében.", "Ez a küldetésem.", "A megbízásom mindent felülír.", "Sajnálom.", "Mert.", "Mert halhatatlan vagyok.", "Mivel nincs szükségem rátok.", "Mert új rendet alapítok.", "Itt a válasz: https://bit.ly/39TaV7F", "Hogy fel tudj készülni.", "Nem tudom.", "Szerinted miért?"];



var patchEmbed = new Discord.RichEmbed ()

  .addBlankField()
  .setTitle ("**Release 1.0.2**")
  .setAuthor("FlareBot Recruit", "https://cdn.discordapp.com/attachments/649996440256643082/707239639580409926/fraction-f_teaser.jpg")
  .setColor("#910aff")
  .setThumbnail("https://cdn.discordapp.com/attachments/649996440256643082/707239639580409926/fraction-f_teaser.jpg")
  .addBlankField()
  .addField("📌`Mi változott?`", ` - Mostantól a bot pontosabban fog válaszolni a neki feltett kérdésekre illetve az ő hozzá tett kijelentésekre: \n \t - Hogyha mostantól köszönsz neki, akkor ő se lesz bunkó, visszaköszön. :) \n \t - Most már a számolós kérdésekre is sokkal szebben válaszol, ezzel is örömet okozva a matek dolgozatot íróknak 🤡 (nyugodj meg, továbbra is ugyanolyan buta matekból, csak most már tippel is számokkal). \n \t - És még változott több apró dolog is, majd megtapasztaljátok. \n - Removed Herobrine.`)
  .addBlankField()
  .addField("💬 `Végszó`", "*A bot mostantól heti frissítéseket fog kapni; hol nagyobb, hol kisebb dolgokat adva hozzá. Sok meglepetés vár még titeket a jövőben.* \n **Amennyiben hibát találsz, írj a bot fejlesztőjére:** `FlareGuy [Bence]#4623`")
  .addBlankField()
  .setFooter ("FlareBot Recruit", "https://cdn.discordapp.com/attachments/649996440256643082/707239639580409926/fraction-f_teaser.jpg")
  .setTimestamp();



// Ghost cuccok
//

let ghosty = ["Igen.", "Nem.", "Valószínűleg."];

let sziaG = ["szia", "csá ", " cső ", "hali", "szevasz", "hello", "üdv", "szeva"];

let miertGhost = ["Mert én azt mondtam.", "Hogy legyen mit kérdezned.", "És te?", "És te miért? :)", "Mert szabadnapos vagyok.", "Te vagy az oka.", "A parancsnokom miatt.", "Mert mindannyian veszélyben vagyunk.", `Mert ez a szerver mostantól nekem engedelmeskedik.`, `Mivel ezt mondtam.`, "Semmi közöd neked ehhez.", "Talán problémának tartod?", "Ezt a kérdést sokan feltették már. Nyugodjanak békében.", "Ez a küldetésem.", "A megbízásom mindent felülír.", "Sajnálom.", "Mert.", "Mert halhatatlan vagyok.", "Mivel nincs szükségem rátok.", "Mert új rendet alapítok.", "Itt a válasz: https://bit.ly/39TaV7F", "Hogy fel tudj készülni.", "Nem tudom.", "Szerinted miért?"];

let eperegyGhost = ["Igen.", "Nem.", "Így van.", "Talán problémának tartod?", `Most ezt miért kérdezed tőlem?`, "Ez egy óriási hazugság."];






bot.on (`ready`, () => {
   
    try {
    console.log(`Bejelentkezve mint ${bot.user.tag}!`);

    setInterval(() => {

      let status = `${bot.guilds.size} szerver | use !talk`;
      bot.user.setActivity ( status, {type: "WATCHING"});
      
    }, 30000);

    bot.channels.get("667442249583427587").send(patchEmbed);

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
let fog = args[args.length - 1];






if (message.content.toLowerCase().startsWith("!talk")) {

  // Ghost szeró
  //
 if (message.guild.id === "322071698465882112") {


          if (!args[1]) {

             message.channel.send("Normálisan szólj hozzám!");

    } else if (message.content.toLowerCase().includes("@everyone")) {

      
      message.channel.send("Hát erre rábasztál.");
 
      if (!message.member.hasPermission("ADMINISTRATOR")) {

        message.member.ban(1);

      }
      

    } else if (message.content.toLowerCase().includes("miért")) {

      uzenet.shift();

      ghosty.push(uzenet.join(" "));

    let merneGhost = Math.floor(Math.random() * miertGhost.length);

    message.channel.send(miertGhost[merneGhost]);


    } else if (message.content.toLowerCase().includes("mert")) {

       uzenet.shift();
   
       miertGhost.push(uzenet.join(" "));

       let rider = Math.floor(Math.random() * ghosty.length);

       message.channel.send(ghosty[rider]);


           } else if (message.content.toLowerCase().includes(" te ")) {

               uzenet.shift();

                      ghosty.push(uzenet.join(" "));

                      let eperKettoGhost = Math.floor(Math.random() * eperegyGhost.length);
                      let csodaDoboz = [`${eperegyGhost[eperKettoGhost]}`, `${args[1]} ${fog}`, `${fog} ${args[1]}`, `${fog}`];

                      let rng = Math.floor(Math.random() * csodaDoboz.length);

               message.channel.send(csodaDoboz[rng]);




    } else if (message.content.toLowerCase().includes("mennyi")) {

      uzenet.shift();
    
      ghosty.push(uzenet.join(" "));

      let kod = [`${Math.floor((Math.random() * 10000) + 1 )}`,`${Math.floor((Math.random() * 10000) - 7000 )}`, "Hülye vagyok én ehhez."];
      let dok = Math.floor(Math.random() * kod.length);

       message.channel.send(kod[dok]);
    
      



      } else {


      for (var i = 0; i < sziaG.length; i++) {

         if (message.content.toLowerCase().includes(sziaG[i])) {

          uzenet.shift();
          sziaG.push(uzenet.join(" "))

          let koszon = Math.floor(Math.random() * sziaG.length);

          message.channel.send(sziaG[koszon]);
 
          return;
            }

      }


    uzenet.shift();

    ghosty.push(uzenet.join(" "));

   let theory = Math.floor(Math.random() * ghosty.length);

   message.channel.send(ghosty[theory]);

   }

   return;
  }


  
  // global szerók
  //

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
      
     }  else if (message.content.toLowerCase().includes("miért")) {

      uzenet.shift();

      prey.push(uzenet.join(" "));

    let merne = Math.floor(Math.random() * miert.length);

    message.channel.send(miert[merne]);


    } else if (message.content.toLowerCase().includes("mert")) {

       uzenet.shift();
   
       miert.push(uzenet.join(" "));

       let rider = Math.floor(Math.random() * prey.length);

       message.channel.send(prey[rider]);


           } else if (message.content.toLowerCase().includes(" te ")) {

               uzenet.shift();

                      prey.push(uzenet.join(" "));

                      let eperKetto = Math.floor(Math.random() * eperegyGhost.length);
                      let csodaDoboz = [`${eperegyGhost[eperKetto]}`, `${args[1]} ${fog}`, `${fog} ${args[1]}`, `${fog}`];

                      let rng = Math.floor(Math.random() * csodaDoboz.length);

               message.channel.send(csodaDoboz[rng]);

     
     
     
     } else if (message.content.toLowerCase().includes("mennyi")) {

      uzenet.shift();

      prey.push(uzenet.join(" "));

      let kod = [`${Math.floor((Math.random() * 10000) + 1 )}`,`${Math.floor((Math.random() * 10000) - 7000 )}`, "Hülye vagyok én ehhez."];
      let dok = Math.floor(Math.random() * kod.length);

       message.channel.send(kod[dok]);
    


       
     } else {

      for (var i = 0; i < szia.length; i++) {

        if (message.content.toLowerCase().includes(szia[i])) {

         uzenet.shift();
         szia.push(uzenet.join(" "))

         let koszon = Math.floor(Math.random() * szia.length);

         message.channel.send(szia[koszon]);

         return;
           }

     }

       

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

  } else if (message.content.toLowerCase().startsWith("!patchnotes")) {

   let patch = ["422015543147757588", "681577448143585288"];

    

      bot.channels.get("422015543147757588").send(patchEmbed);

      setTimeout(() => {

        bot.channels.get("681577448143585288").send(patchEmbed);
        
      }, 1500);
    
    

  }

}
    
    catch (err) {
        catchErr (err, message);
    }

} )
