const Discord = require(`discord.js`);
const bot = new Discord.Client();


bot.login(process.env.token);

function catchErr (err, message) {

    bot.users.cache.get("342630541079609355").send("Hiba: ```" + err + "```");

}

// Global cuccok
//


let prey = ["Igen.", "Nem.", "Tetszel :heart:", "Ezt most újra, kérlek.", "Igen, mert én vagyok az.", "Mi bajod?", "lány vagy?", "buta-e vagy", "Hülye vagy", "Tényleg?", "XDD", "Milyen kérdés ez?", "Egy állat", "De én nem spamelek :flushed:", "Ne spamelj vagy mutot kapsz", "Te is", "Lehetséges.", "Miért utánzol?", "Ki a melge?",  "Elefánt", "igen", "semmi", "szerelmes vagyok beléd", "nem",  "jól van", "Jót érzel?", "Ki a legjobb a szerveren?", "Ne utánozz", "Nem", "Nem", "Ne haragudjon meg szomszéd, de maga megkukult?", "FlareGuy", "edzsi", "Igen", "Egyértelműen én.",  "Én jól, és te?", "Maximum te", "De-de", "Hello", "?", "Ne trollkodj kérlek.", "Nem kérdeztem.", "Hú de hülye vagy.",  "Tudjuk, hogy te vagy hülye.", "Esküszöm mint egy ovis xD", "a tej az finom, ugye?", "Igen vagy nem???", ":cicaxd:", "Kösz", "Nem kérdés bazmeg.", "Olyan kérdés ez.", "a tulaj", "Hívom a copyright policet.", "Igen baszki.", "XD", "buzi",  "Vicces mert nem igaz", "xdxxxddd",  "Csóró vagy cicám.", "Beraksz az ágyba?", "köszönöm", "de",  "nem vagyok buta",   "spam", "szeretlek", "őt nem", "Az vagy te.", "De azért nyugodtan bejelölhetnéd." ];

let szia = ["szia", "csá ", " cső ", "hali", "szevasz", "hello", "üdv", "szeva"];

let miert = ["Mert én azt mondtam.", "Hogy legyen mit kérdezned.", "És te?", "És te miért? :)", "Mert szabadnapos vagyok.", "Te vagy az oka.", "A parancsnokom miatt.", "Mert mindannyian veszélyben vagyunk.", `Mert ez a szerver mostantól nekem engedelmeskedik.`, `Mivel ezt mondtam.`, "Semmi közöd neked ehhez.", "Talán problémának tartod?", "Ezt a kérdést sokan feltették már. Nyugodjanak békében.", "Ez a küldetésem.", "A megbízásom mindent felülír.", "Sajnálom.", "Mert.", "Mert halhatatlan vagyok.", "Mivel nincs szükségem rátok.", "Mert új rendet alapítok.", "Itt a válasz: https://bit.ly/39TaV7F", "Hogy fel tudj készülni.", "Nem tudom.", "Szerinted miért?"];

let argArr = [];







bot.on (`ready`, () => {
   
    try {
    console.log(`Bejelentkezve mint ${bot.user.tag}!`);

    setInterval(() => {

      let status = `${bot.guilds.cache.size} szerver | use !talk`;
      bot.user.setActivity ( status, {type: "WATCHING"});
      
    }, 30000);

    

}

catch (err) {
    catchErr (err, message);
}

});




bot.on ("message", async message => {

    try {

        if (message.author.bot || message.content.toLowerCase().includes("owo")) {
            return;
        }

 if (message.channel.type == "dm") {

function cecca () {
    let infEmbed = new Discord.MessageEmbed()
  .setTitle ("Privát üzenetet kaptam!")
  .setColor("RANDOM")
  .addField("\u200B", "\u200B")
  .addField("Üzenet küldője", `${message.author} \n ${message.author.username}`)
  .addField("\u200B", "\u200B")
  .addField("Üzenet tartalma", `${message.content}`)
  .addField("\u200B", "\u200B")
  .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
  .setTimestamp();

  
 bot.channels.cache.get("776440757455421451").send(infEmbed);
 
 message.author.send("\t **Amennyiben megtetszettem, használhatsz engem a saját szervereden is az alábbi meghívóval:** \n  https://discordapp.com/api/oauth2/authorize?client_id=667793688910626816&permissions=8&scope=bot");
 
}

cecca();

 return;
 
}

const args = message.content.substring().split(" ");
var uzenet = message.content.substring().split(" ");
var commUzenet = message.content.substring().split(" ");

commUzenet.shift();
commUzenet.shift();

if (message.author.id === "342630541079609355") {


  if (message.content.startsWith("!users")) {

      let guildMap = bot.users.cache.size;
      

      message.channel.send(`Jelenleg **${guildMap}** felhasználót vagyok képes elérni.`);

      return;
     }

  
  if (message.content.startsWith("!pub")) {

      bot.channels.cache.get(args[1]).send(`${commUzenet.join(" ")}`);


      return;

      } else if (message.content.startsWith("!dm")) {

            bot.users.cache.get(args[1]).send(`${commUzenet.join(" ")}`);
                        
            message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.cache.get(args[1]).username}** számára.`);

             return;
      }
}





let mainTrigger = /@|https:\/\//i;
let mertTrigger = /mert/i;
let koszonTrigger = /szia| csá| cső |hali|szevasz|hello|üdv|szeva| hi /i;

if (!mainTrigger.test(message.content)) {
  
  if (args[1]) {

    if (message.content.toLowerCase().startsWith("!")) {
           uzenet.shift();
    }

    if (koszonTrigger.test(message.content)) {

      szia.push(uzenet.join(" "));

      } else if (mertTrigger.test(message.content)) {

        miert.push(uzenet.join(" "));

        } else {

          prey.push(uzenet.join(" "));

        }


      }

}





if (message.content.toLowerCase().startsWith("!talk")) {

 
  
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
      
     } else if (message.content.toLowerCase().includes("www.pornhub.com")) {
      
      if (!message.member.hasPermission("ADMINISTRATOR")) {

        message.member.ban(1);

         } else {

            message.channel.send(`${message.member}, sajnos ***Adminisztrátori*** jogod van, ezért nem tudlak bannolni pornográf tartalom megosztásáért. :( `);

          }

    } else if (message.content.toLowerCase().includes("https://")) {


    let nolink = ["Menj innen a mocskos linkeddel!", `Áh, ${message.member}! Látom szereted kockáztatni a dolgaidat!`, "Próbálkozni szabad, de linkekkel nem mész semmire. :)", "Linkekért cserébe utalnod kell nekem havonta.", "Nem, nem és NEM!"];

    let arng = Math.floor(Math.random() * nolink.length);

    message.channel.send(nolink[arng]);
     
     
   } else {
       args.shift();

        for(var i = 0; i < prey.length; i++) {
          for(var j = 0; j < args.length; j++) {
            if(prey[i].includes(" " + args[j] + " ")) {
                  argArr.push(prey[i]);
                  bot.users.cache.get("342630541079609355").send(prey[i]);
            }
          }
        }


      let argRNG = Math.floor(Math.random() * argArr.length);

      if(argArr.length > 1) {
         message.channel.send(argArr[argRNG]);
          console.log("heo");
    } else {

      let funnyNumber = Math.floor(Math.random() * prey.length);

      message.channel.send(prey[funnyNumber]);

    }

    setTimeout(() => {
        argArr = [];
    }, 4000);
   }
     
     
  } else if (message.content.toLowerCase().startsWith("!getdata")) {

    if (prey.toString().length >= 1800 ) {
           
         
        message.channel.send(`***A szótáram meghaladja a 2000 karaktert. Innentől ezek a szavak már beépültek hozzám, erre a commandra többet nincs szükség. Mostmár minden halad előre magától.***`);

         

       } else {

         message.channel.send(`"${prey.join('", "')}"`);

       }

  } else if (message.content.toLowerCase().startsWith("!guilds")) {

    message.channel.send(`Elérhető vagyok **${bot.guilds.cache.size}** szerveren.`);


  } else if (message.content.toLowerCase().startsWith("!names")) {


    let szerverek = bot.guilds.cache.map(g => g.name);
    let szerverekID = bot.guilds.cache.map(g => g.id);
   

 

      for (let i = 0; i < szerverek.length; i++) {

          let memberCount = bot.guilds.cache.get(szerverekID[i]).members.cache.size;
          
          message.channel.send(`${szerverek[i]} --- **${memberCount}** tag`);
        
      }
        
        
       
    
 

  } else if (message.content.toLowerCase().startsWith("!invite")) {

   message.channel.send(` \t **Íme a bot meghívó linkje:** \n  https://discordapp.com/api/oauth2/authorize?client_id=667793688910626816&permissions=8&scope=bot`);

 
  } else if (message.content.toLowerCase().startsWith("!stats")) {

      console.log(bot.guilds);

  } 

}
    
    catch (err) {
        catchErr (err, message);
    }

} );

bot.on("guildMemberAdd", gui => {

  try {

      if (gui.guild.id == "432584846234091559") return;

    gui.send(`***Üdv a ${gui.guild.name} szerveren! \n Esetleg ha kíváncsi lennél a beszélgetős botunkra, itt egy meghívó, amivel felviheted őt a szerveredre társalogni:*** \n https://discord.com/oauth2/authorize?client_id=667793688910626816&permissions=8&scope=bot 😎`);

  }

  catch(err) {
    catchErr(err, message);
  }

});
