# DinoPoints
We built this Twitch-integrated Chat Points system live on Twitch!

## Instafluff ##
> *Come and hang out with us at the Comfiest Corner on Twitch!*

> https://twitch.tv/instafluff

> https://twitter.com/instafluffTV

## Credits ##
Thank you to all the participants of this project!

**nightsilas, That_MS_Gamer, Instafriend, Instafluff, vic_likadabooty, LostWorld_, Mikeystea, GeoRevilo, Neo_TA, Jerreper, samchitto, Cats4Hire, where_is_laughingman, wietlol, Kara_Kim, androidrexx, kaisuke, therealoliveryoutuber, MacabreMan2, BungalowGlow, kingswerv, Kisa__d1_1b, MerlinLeWizard, mr_grey, OhScee, Deitypotato, jellydance, Poolpourri, Kyoslilmonster, mallesbixie, Xynal, artkison, BluAlexa, TheHungerService, kroms, JustinZedly, Tomcii, malfunct, VioletOsK, TheSkiDragon, BatskyStarman, thegooseofwild, BeaverBoyB, DrJavaSaurus, sparky_pugwash, AntiViGames, shinageeexpress, j_rilla, KnitsAndScribbles, Ellesria, Maayainsane**

## Instructions ##

1. Install NodeJS - [https://nodejs.org/en/](https://nodejs.org/en/)
2. Open the directory in a Command Prompt/Terminal
3. Install Dependencies: `npm install`
4. Get a Twitch Chat OAuth Password Token - [http://twitchapps.com/tmi/](http://twitchapps.com/tmi/)
4. Create a file named `.env` that looks like this:
```javascript
PORT=8000
TWITCHUSER=[YOUR-USERNAME-HERE]
OAUTH=[YOUR-OAUTH-PASS HERE] # e.g. OAUTH=oauth:kjh12bn1hsj78445234
```
5. Run Server: `npm start`
6. View the webpage from your web browser! [http://localhost:8000](http://localhost:8000)
