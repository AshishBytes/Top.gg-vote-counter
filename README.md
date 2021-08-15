# Top.gg-vote-counter
Top.gg vote counter AKA DBL



### Developer
ǃ                         Ashish#0001(850938117422448670)


### Step 1: Create a Github Account
Visit https://github.com/join and create a Github Account.

### Step 1.5: Star the repository
[Visit here ](https://github.com/HAPPY7131/Top.gg-vote-counter/stargazers) and click the star button


### Step 1.7: Enable Developer Mode
In The Discord application go to Settings > Appearance > Turn on `Developer Mode`.

### Step 1.9: Creating a bot account
Don't worry, it's super simple.
#### Creating the application
To create the application, head to https://discord.com/developers/applications/. Log in, and you'll reach a page that may look like this:

![](https://github.com/HAPPY7131/Top.gg-vote-counter/blob/main/assets/imgs/Screenshot%20(211).png?raw=true)

Click on **Create an application**. This brings you to the following page, in which you should simply enter a name for the application. After clicking **Create**, you can also add an avatar. Click **Save Changes** afterwards.

![](https://github.com/HAPPY7131/Top.gg-vote-counter/blob/main/assets/imgs/Screenshot%20(212).png?raw=true)

#### Creating the bot account
After creating the application, we need to create the Bot User. Go to the `Bot` section on the left, then click on **Add Bot**, then **Yes, Do it**.

![](https://github.com/HAPPY7131/Top.gg-vote-counter/blob/main/assets/imgs/Screenshot%20(213).png?raw=true)

There's a few things you can change here. 
- Username: Change your bot's username on Discord
- Icon: Change the bot's avatar
- Public bot: Toggles the ability for other users to add your bot to their server.
- Require Oauth2 Code Grant: Don't check this. Just, don't.

#### Getting the token
Go back to the **Bot** page and copy the token. Save it somewhere, you will need that later.

![](https://github.com/HAPPY7131/Top.gg-vote-counter/blob/main/assets/imgs/Screenshot%20(214).jpg?raw=true)

#### Adding to your server
To generate the invite link, click on **Oauth2** in the app page, and scroll down to **Scopes**. Check the **Bot** scope to generate a link. You can also add additional permissions for the bot.

![](https://github.com/HAPPY7131/Top.gg-vote-counter/blob/main/assets/imgs/Screenshot%20(215).png?raw=true)

Copy the link and open it, select your server and click on **Authorize**. Cheers, it has been added to your server.

### Step 2: Hosting the bot
The bot will be hosted on Glitch.com , so you need to create a Glitch.com account first: https://glitch.com/login.

### Step 2.1: Import code
Click on **New Project** > **Import from GitHub** > **Copy this url `https://github.com/HAPPY7131/Top.gg-vote-counter/edit/main/README.md` Then past on it** > **Press `ok`**

### Step 2.2: Installation
1. Add your Discord BOT TOKEN to the .env file in the ' BOT_TOKEN=bottokenhere '

2. Add your DBL API key to the .env file in the ' TOPGG_TOKEN=top.ggtokenhere '

3. Add your Authorization password to the .env file as ' TOPGG_AUTH=passwrodhere '

4. Add your Discord Channel Id to the .env file as ' CHANNEL_ID=channelidhere '

5. Add your TOP.GG Vote Link to the .env file as ' VOTE_LINK=votelinkhere '

6. Add your EMBED COLOR to the .env file as ' EMBED_COLOR=embedcolorhere '

7. Add your BANNER LINK to the .env file as ' BANNER_LINK=bannerlinkhere '

8. Go to "https://top.gg/bot/YourBotID/edit" scroll down to "Webhook" the put the URL to "http://yourprojectname.glitch.me/dblwebhook" and set the "Authorization" to what you put in the .env file!

9. After all of that.. press "Save" on top.gg and then press "Test" and it should work!


