# Stock App
## AIMs:
The goal of this project was to create a simple webpage to check the values of stocks in real-time. It uses HTML, CSS, and Javascript using NODE.js as framework to set a dynamic web application, given the dynamic fluctuation of the stock market. A API key from https://iexcloud.io/ is used to pull data using GET and POST js protocols. The page uses semantic HTML elements and is a responsive website across different screen sizes. A gray color palette was chosen for this project using the Bootstrap framework version v5.1.3. The main aim is to allow the user to check the stock's value in a clean and straight.


![Imgur](https://i.imgur.com/v4YNxi0.png)
-

--

## Features

* The landing page shows the App name  and the search box in the nav elements. 
* The placeholder text invites the user to start a stock search positioned in the upright corner. 
* The default stock value shown in the landpage is Facebook, peharps the most popular name company nowadays, thus inviteing the user to try his/her own stock search
* This basic layout is kept over different pages for consistency.

![Imgur](https://i.imgur.com/29Ac4Azl.png)
---
* Page 2 give instructions to the user on how to use the Stock App
* It  also has a table listing the 50 most expensive companies nowadays and their respective standard code used in the marketplace, which indirectly invites users to search.
* This basic layout is kept over different pages for consistency.

![Imgur](https://i.imgur.com/pf8rteil.png)


--- 


## Testing

The page was tested in the following browsers:
* Chrome, Edge (PC)
* Safari (Ipad)

The responsiveness for the page was tested using the dev tools and  in the following devices:
* Xiaomi Mi 10T-Lite - responsive and clear reading
* Huawei p20 pro -  responsive and clear reading
* Ipad 8th generation - responsive and clear reading

The form also works perfectly in these devices.

---


## Code Validation

The code was tested at:
* W3C CSS Validation Service
![Imgur](https://i.imgur.com/mXyffC5l.png)

* Nu Html Checker
![Imgur](https://i.imgur.com/FDvtclql.png)

The code pass in both validations tools.

---


##Performance 

*The App was tested for lighthouse performance and pass with high scores
![Imgur](https://i.imgur.com/aENCWc8l.png)


## Bugs and limitations
The majority of major bugs were caused due the Heroku deployment in Gitpod
### Solved bugs

1. The Heroku Toolbelt:
For deployment in Heroku, a the Heroku Toolbelt is need, but it takes me a great time o figureout how to install it through gitpod. I achieve to install the Heroku toolbelt using the following command:

curl https://cli-assets.heroku.com/install-ubuntu.sh | sudo sh

The correct installation was checked using the command:

heroku --version

## limitation:

Every time the logout gitpod, the Heroku toolbelt needs to be reinstalled.

 2. Login fails to Heroku
 
*The regular command line  to login at Heroku is:
heroku login
But it fails to login due security reasons since gitpod probably use a proxy which Heroku detects.
I was able to overcome this limitation to login using: heroku login -i

## limitations:

The input search only accept the standard company codes. Otherwise, no data is retuned. I realized that the best user experience would be implementing an autocomplete functionality and return an clear response to the users if their searches  did not return any result due to wrong input

---

## Deployment

The page was deployed in the Heroku free pages following the instructions from Heroku documentation. The basic steps are:
*Install Heroku toolbelt:
curl https://cli-assets.heroku.com/install-ubuntu.sh | sudo sh 
*Login:
heroku login -i

with your Heroku login data, provide:
email to login 
provide password

*Add SSH key for your github directory:
Heroku keys:add
*Create your App:
heroku create

*Push your new Heroku App:
git push heroku main


The link to access is below:

[Stock App](https://nodejs-stockstockapp.herokuapp.com/)

---

## Credits:
Good practices to a good markdown:

https://www.markdownguide.org/basic-syntax/

Images used in this project are hosted in :
https://imgur.com/
 It offers links optimized for markdown

On-Line tool to minimize the excess of commits during tests*:

https://codepen.io/pen/tour/welcome/start

*I have used codepen to perfom tests the changes. It minimized the changes in the main project and optimized my commits.

Color contrast analyzer:

https://color.adobe.com/create/color-contrast-analyzer

Screenshot from responsive pages in different screens:

http://ami.responsivedesign.is/




