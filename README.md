# Core Computing Concepts: Web

## Stage 0: Plain Text as an HTML File

A plain-text document comprising a couple of headings and three paragraphs.

## Stage 1: Structuring the Page using HTML ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-1))

* It is good practice to specify which version of HTML is used at the start of each document.
  * We use HTML5 (the latest version).
  * This is indicated by a special `<!doctype html5>` tag at the beginning of the file.
* The tags we added at this stage are structural: they define the hierarchy of the HTML document.
* HTML documents are just plain text with added 'tags'.
  * A tag is made using "angle brackets" `<` and `>`
  * Inside these brackets is the name of the tag, e.g. `<body>`.
  * In HTML when we use tags we often use them in pairs.
* The top level element is `<html>`: this contains two elements; a `<head>` and a `<body>`.
* Elements in the `<head>` are informational: they tell the browser useful things about the document.
  * The head is initially empty.
* Elements in the `<body>` are the content that should be displayed on the page.
  * The body contains all of the original plain text.

## Stage 2: Marking-Up A Heading ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-2))

* We have marked-up the heading using the `<h1>` tag.
  * The first tag marks the start of an element (e.g. `<h1>` is the start of our heading).
  * The second tag marks the end of the element.  To distinguish it from a nested start tag, we add a slash before the element name (e.g. `</h1>` ends the heading).
* There are six different tags for headings, reflecting different levels: `<h1>` through to `<h6>`.

## Stage 3: Marking-Up Paragraphs ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-3))

* We have marked-up each of the three paragraphs using the `<p>` tag.
* This creates three paragraph _elements_.

## Stage 4: Adding Emphasis ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-4))

* The purpose of the text is to establish the importance of the web platform, and the potential for you to do great things with it, so adding emphasis will help with this.
* We therefore add `<em>` tags around "the most important platform in computing history".
* Furthermore we add `<strong>` emphasis around the words "knowledge", "skills" and "inspiration".

## Stage 5: A title ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-5))

* If the document appears in a window or a tab, it will help if we give it a title, we have done this using the `<title>` element.
* All HTML5 documents must include a title in order to be considered _valid_.
  * Browsers will always try to render HTML files, even if they're _invalid_.
  * NB: An _invalid_ document is one that does not conform to the HTML Recommendation document published by the W3C.

## Stage 6: Adding a Basic Style ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-6))

* It is good practice to separate form from content (style from substance).
* So far we have developed the content (the substance).  Now we give it a form by adding a _stylesheet_.
* We have created a file called `style.css`, and to that:
  * Added a single rule that sets the background of the body to black and the text color to white.
  * Note that the syntax of CSS is different to HTML.

## Stage 7: Font and Colour Improvements ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-7))

* Now we improve our stylesheet so the page starts to take on the appearance of opening text in Star Wars.
* We changed the font from the default (which is whatever the browser is set to use) to a specific named typeface, in this case we just choose a font without serifs.
* The text colour is changed from white to a Star Wars yellow.
  * There are several ways of describing colour in HTML, often these require a little understanding of how mixing different levels of red, green and blue light can produce different hues.
  * The colour we use is `#ffd23e`.
* No change is made to the HTML in this stage.

## Stage 8: Centring Page Text ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-8))

* HTML contains elements that help us describe the content.
* Elements don't just compartmentalise the page, they add meaning.
* We added an `<article>` tag around the content to describe it as such.
* Added a new rule to the stylesheet fixes the width of the content to `15em` wide (as a rule of thumb, 1 `em` is around the same width as a capital M in the current font).
* The `text-align` property spreads the text on each line so that it uses the full width of the `<article>` element.
* Finally, we adjusted the margins of the `<article>`.  Setting this value to `auto` allows the browser to add equal margin space either side of the element, so it becomes centred.

## Stage 9: Centred Heading(s) ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-9))

* "University of Portsmouth" and "A New Platform" are now centred.  We achieved this by:
  * Grouping the elements in a parent element: we use `<header>` here as it's a more appropriate and descriptive tag than `<div>`.
  * Adding a style rule that centres all the content of that element.
  * note that CSS uses the US spelling of centre: `center`
  * Note that HTML and CSS use American spellings (despite the web's inventor, Sir Tim Berners-Lee being British, and despite his working in Switzerland, for a European funded particle physics experiment (CERN) when he invented it.)

## Stage 10: Tweaks ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-10))

* To get the text as close as possible to the original a couple of small changes were needed.  Browsers include a _default stylesheet_ which specifies things how large a heading should be, and how much space to go around it.  There are two things we need to override in this sheet.
  * In the original movie intro, the text "Death Star" was in all-caps but not bold - a CSS tweak achieves this.
  * We also added a background of stars.

## Stage 11: Simplify ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-11))

* One of the design aims of HTML5 was to make writing content simpler, so some elements don't _need_ a closing tag: `<p>` is one such element, so we simplified the document a little by removing these.
* We don't _need_ html body and head tags either.  The browser will assume (once it sees a `<!doctype html>`) that each element should go in the `<head>` until it sees something that should be displayed, for example, an  `<article>` tag.
* The resulting document is a lot easier to read and maintain.

## Stage 12: A Screen Full of Text ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-12))

* Next made the text take up the full width of the browser.
* The part of the browser that shows the page is called the _viewport_.
* The width and height of the viewport are available as a unit of measurement when styling the page.
  * `vw` and `vh` are 1% of the width and height of the viewport respectively.
* Earlier we set our text to be `15em` wide, so since we want those 15 characters to fill the width of the screen we calculate 100/15 (which is 6.66 recurring), and set that as the font size, thus `font-size: 6.66vw`;
* By default the body has a small `body` margin which must now be removed in order for the new wider text to fit.

## Stage 13: Tilting the Text ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-13))

* We tilt the text down to give the perspective of the text leaning away from you as it appears in the movie.
* The text is now anchored to bottom of the viewport for later animation

## Stage 14: Animate the Crawl ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-14))

* Stylesheets can include animation, so we can move the text.

## Stage 15: Add "A long time ago..." ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-15))

* The movie intro also includes the famous line "A long time ago in a galaxy far, far away....", our story however happens "Right here, right now....".

## Stage 16: The Logo ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-16))

* To complete the intro we add the flying logo.

## Stage 17: Theme ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-17))

* We add the theme so that it begins to play as the logo animation begins.

## Stage 99: Extras ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-99))

* When presenting the finished 'movie' we added all sorts of extra bits like a play button and a fade out.  You're welcome to look at how we did this.
