
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

<!-- **Note: Delete this note and update the table of contents based on what sections you keep.** -->

## Overview

### The challenge

Users should be able to:

- Display time of current location.
- Display a random quote.
- Display some stats based on time and location.

### Screenshot

![](<./images/screenshot.png>)

<!-- Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above. -->

<!-- **Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.** -->

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->

- Live Site URL: [Live Site](https://clock-app-sooty.vercel.app/)

## My process

html, css, js.

### Built with

- html
- css
- js

### What I learned

How to use api to render location and quote.

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge. -->

<!-- To see how you can add code snippets, see below: -->

```html
 <div id="myDIV">
        <div class="currentTimezone">
            <p>CURRENT TIMEZONE</p>
            <p class="currentPlace stats"></p>
        </div>
        <div class="dayYear">
            <p>DAY OF THE YEAR</p>
            <p class="currentDayYear stats"></p>
        </div>
        <div class="dayWeek">
            <p>DAY OF THE WEEK</p>
            <p class="currentDayWeek stats"></p>
        </div>
        <div class="weekNumber">
            <p>WEEK NUMBER</p>
            <p class="currentWeekNumber stats"></p>
        </div>
```

```css
#refresh {
	background-color: transparent;
	font-size: xx-large;
	color: none;
	border: none;
}

.main {
	display: flex;
	flex-direction: column;
	margin-top: 300px;

	align-items: center;
	/* aligns items in x axis */
}
```

```js
window.onload = function () {
	showTime();
	updateQuote();
	findMe();
	document.getElementById('myDIV').style.display = 'none';
};
```

<!-- If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more. -->

<!-- **Note: Delete this note and the content within this section and replace with your own learnings.** -->

### Continued development

<!-- Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect. -->

I don't know 🤷‍♂️ .

<!-- **Note: Delete this note and the content within this section and replace with your own plans for continued development.** -->

### Useful resources

- [w3schools](https://www.w3schools.com/react/default.asp) - This helped me for learning how to operate with api's.
- [quotes](https://api.quotable.io/random) - Random quotes.
- [location](https://openweathermap.org/api) - Location.
<!-- - [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.** -->

## Author

- Website - [Michael Satumba](https://mkeport.vercel.app/)
<!-- - Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername) -->

<!-- **Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.** -->

## Acknowledgments

<!-- This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit. -->

Thank you frontend mentor for giving me a template to work of off.

<!-- **Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.** -->

