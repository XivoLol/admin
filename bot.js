const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}bc`) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
  
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        });
      });
    });
  }
});
client.on('message', message => {
 let command = message.content.split(" ")[0];
   
    if (command === prefix + "ban") {
            if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply("**⚠ | `[ADMINSTRATOR]`لا يوجد لديك صلاحية**").catch(console.error);
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});
client.on('message', message => {
 
    let command = message.content.split(" ")[0];
   
    if (command === prefix + "ban") {
     if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply("**⚠ | `[ADMINSTRATOR]`لا يوجد لديك صلاحية**").catch(console.error);
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});
client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === prefix + "mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**`'Muted'`لا توجد رتبة** \n Muted سوي رتبة ").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**-mute <منشن الشخص> **').catch(console.error);
   
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** :cry: `Manage Roles` لا يوجد لدي برمشن**').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:mute: تم إعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: تم إعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  };
  });
 
     client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   //unmute
    if (command === prefix + "unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**⚠ | `[MUTE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**.unmute <منشن الشخص>**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اتكلم')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
 
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ⚠ | `[MANAGE_ROLES_OR_PERMISSIONS]`لا يوجد لديك صلاحية **').catch(console.error);
 
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:speaker: تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
 
  };
 
  });

client.on('message', message => {
if (message.content.startsWith(prefix + "ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
client.on('message', message => {
if (message.content.startsWith(prefix + "cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
         
        }
});
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
    let command = message.content.split(" ")[0];

    if (command === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
   
    if (command === prefix + "unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if (command === prefix + "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {//help msg
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
                   if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply("**⚠ | `[ADMINSTRATOR]`لا يوجد لديك صلاحية**").catch(console.error);
        message.react("☑")




        message.author.sendMessage(`**لتفعيل اللوق انشئ روم اسمه log**
        __**الاوامر الادارية :gear:**__
  ❖${prefix}** bc ** ==>**لارسال رسالة لكل الاعضاء**
  ❖${prefix}** role <user> ** ==>**لاعطاء شخص رتبة**
  ❖${prefix}** role all ** ==>**لاعطاء الكل الرتبة المحددة**
  ❖${prefix}** role users ** ==>**لاعطاء الاعضاء فقط**
  ❖${prefix}** role bots ** ==>**لاعطاء البوتات فقط**
  ❖${prefix}** ct ** ==>**لانشاء روم  كتابي**
  ❖${prefix}** cc ** ==>**لانشاء مستند**
  ❖${prefix}** cv ** ==>**لانشاء روم صوتي **
  ❖${prefix}** kick ** ==>**لطرد شخص من السيرفر**
  ❖${prefix}** band ** ==>**لحصر شخص من السيرفر**
  ❖${prefix}** mute ** ==>**لاسكات عضو في السيرفر**
  ❖${prefix}** unmute ** ==>**لفك الاسكات عن عضو في السيرفر**
  ❖${prefix}** clear ** ==>**لمسح كل رسائل الشات**`);
//  ** يشمل البوت اشياء كثيرة ومنها مانع التهكير - لـ تفعيل مانع التهكير ارفع رتبة البوت فوق كل رتب الادارة **


  }
  });


client.on('message', message => {//help
     if (message.content === "-help") {
                   if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply("**⚠ | `[ADMINSTRATOR]`لا يوجد لديك صلاحية**").catch(console.error);
  message.channel.send('**تم الارسال لك في الخاص | :ballot_box_with_check:**')
    }
});
client.on('message', message => {//role
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            }
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'users') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});

client.login(process.env.BOT_TOKEN);
