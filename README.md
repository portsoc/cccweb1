# Core Computing Concepts: Web

## Stage 0: Plain Text as an HTML File

* We start with a plain-text document comprising a couple of headings and three paragraphs.
* The browser shows all the text together because HTML does not use spaces and new lines for formatting.


## Stage 1: Separating Paragraphs ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-1))

* HTML documents are just plain text with added _tags_.
  * A tag is made using _angle brackets_ `<` and `>`
  * Inside these brackets is the name of the tag.
  * We tag the start of every paragraph with `<p>` – "p" is the name of the tag that means a paragraph.
  * Usually tags enclose a part of the document. The tag `<p>` marks the beginning of a paragraph, and there is a _closing tag_ `</p>` (notice the slash `/`) that marks where the paragraph ends.

## Stage 2: Marking Up Headings ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-2))

* Our document has two headings; the second one is the more important one.
  * HTML knows six levels of headings, from the main heading "h1" to the inner-most subheading "h6".
  * We use `<h1>` and `<h2>` to mark up our two headings.
  * We also mark where the headings end with `</h1>` and `</h2>`.
  * End tags need to match the appropriate start tags.
* An HTML tag together with its content (everything up to the matching closing tag) is called an _element_.
  * Our document now contains five elements: two headings and three paragraphs.

## Stage 3: Adding Emphasis ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-3))

* Often we want to emphasize important bits of text.
* In our text, we first emphasize "the most important platform in computing history"; we use the `<em>` tag for that.
* Furthermore we add `<strong>` emphasis around the words "knowledge", "skills" and "inspiration".
* In our document, we use emphasis _inside_ paragraphs. This shows that HTML elements can contain other tags.
  * We say that the `em` element is _nested_ inside the second `p` element.

## Stage 4: Title ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-4))

* Documents on the web tend to have a title, which shows in the browser tab and in search results.
* Our document is called `index.html` because that's the _file name_ but that's not a good title.
* To specify a better title, we include the `<title>` element at the top of the document.

## Stage 5: Structuring the Page using HTML ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-5))

* A title is not part of the page content – it is _metadata_ – information about the document.
* Every HTML document has two sections: a "head" with such metadata, and the "body" with the actual content displayed on the page.
* So every HTML document, whether we write it or not, actually has three elements: `<html>`, `<head>` and `<body>` – the latter two are nested inside the `<html>` element.
  * All the elements together form a _hierarchy_ – in computing terms a _tree_.
* Our document now makes this hierarchical structure explicit.
  * `<title>` is inside `<head>`.
  * The rest is inside `<body>`.
  * The nesting is shown with indentation – this helps the human understand the HTML code better.
* It is good practice to specify that we use the latest version (also known as HTML5).
  * This is indicated by a special `<!doctype html>` tag at the beginning of the file.

## Stage 6: Adding a Basic Style ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-6))

* It is good practice to separate form from content (style from substance).
* So far we have developed the content (the substance).  Now we give it a form by adding a _stylesheet_.
* We have created a file called `style.css`, and there:
  * Added a single rule that sets the background of the body to black and the text color to white.
  * Note that the syntax of CSS is different to HTML.

## Stage 7: Font and Colour Improvements ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-7))

* Now we improve our stylesheet so the page starts to take on the appearance of opening text in Star Wars.
* We changed the font from the default (which is whatever the browser is set to use) to a specific named typeface – Arial.
* The text colour is changed from white to a Star Wars yellow.
  * There are several ways of describing colour in HTML, often these require a little understanding of how mixing different levels of red, green and blue light can produce different hues.
  * The colour we use is `#ffd23e`.
* No change is made to the HTML in this stage.

## Stage 8: Centring Page Text ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-8))

* HTML contains elements that help us describe the content.
* Elements don't just compartmentalise the page, they add meaning.
* We added an `<article>` tag around the content to describe it as such.
* Added a new stylesheet rule to fix the width of the content to `15em` wide (1em is the current font size).
* The `text-align` property spreads the text on each line so that it uses the full width of the `<article>` element.
* Finally, we adjusted the margins of the `<article>`.  Setting this value to `auto` directs the browser to add equal margin space either side of the element, so it becomes centred.

## Stage 9: Centred Heading(s) ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-9))

* "CCC Episode IV" and "A New Platform" are now centred.  We achieved this by:
  * Grouping the elements in a parent element: the `<header>` element is just right for a group of headings at the top of the page.
  * Adding a style rule that centres all the content of that element.
  * Note that HTML and CSS use American spellings even though the web's inventor, Sir Tim Berners-Lee, is British, and worked in Switzerland at CERN on European-funded particle physics experiments when he invented it.
     * So instead of "centre" we have to use "center"

## Stage 10: Tweaks ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-10))

* To get the text as close as possible to the original a couple of small changes were needed.  Browsers include a _default stylesheet_ which specifies things how large a heading should be, and how much space to go around it.  There are three things we need to override in this sheet:
  * In the original movie intro, the strongly emphasized text "Death Star" was in all-caps but not bold - a CSS tweak achieves this.
  * The main heading was also in all-caps.
  * We also added a background of stars.

## Stage 11: A Screen Full of Text ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-11))

* Next we make the text take up the full width of the browser.
* The part of the browser that shows the page is called the _viewport_.
* The width and height of the viewport are available as a unit of measurement when styling the page.
  * `vw` and `vh` are 1% of the width and height of the viewport respectively.
* Earlier we set our text to be `15em` wide, so since we want those 15 characters to fill the width of the screen we calculate 100/15 (which is 6.66 recurring), and set that as the font size, thus `font-size: 6.66vw`;
* By default the body has a small margin which must now be removed in order for the new wider text to fit.

## Stage 12: Tilting the Text ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-12))

* We tilt the text to give the perspective of the text leaning away from you as it appears in the movie.
* The text is now anchored to bottom of the viewport for later animation.

## Stage 13: Animate the Crawl ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-13))

* Stylesheets can include animation, so we can move the text.
  * We'll get the timing right later, for now the animation runs quick whilst we make it work how we want.

## Stage 14: Add "A long time ago..." ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-14))

* The movie intro also includes the famous line "A long time ago in a galaxy far, far away....", our story however happens "Right here, right now....".

## Stage 15: The Logo ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-15))

* To complete the intro we add the flying logo.
  * The logo is drawn using SVG (Scalable Vector Graphics) – one of the many web image formats.
  * SVG images can scale to any size without pixelation, which is useful for our animation need.

## Stage 16: Music ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-16))

* We add the theme music such that it begins to play as the logo animation begins.
* Because web pages cannot just willy-nilly play music to us, we need to _interact_ with the page first: when loading this stage, we quickly click somewhere in the page and only then will the browser allow the music to play.

## Stage 99: Extras ([see the diff](https://github.com/portsoc/cccweb1/commit/stage-99))

* When presenting the finished 'movie' we added all sorts of extra bits like a play button and a fade out.  You're welcome to look at how we did this.
