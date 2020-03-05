# Star Wars

## Stage 0: Plain Text as an HTML File

A plain-text document comprising a couple of headings and three paragraphs.

## Stage 1: Structuring the Page using HTML

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

## Stage 2: Marking-Up A Heading

* We have marked-up the heading using the `<h1>` tag.
  * The first tag marks the start of an element (e.g. `<h1>` is the start of our heading).
  * The second tag marks the end of the element.  To distinguish it from a nested start tag, we add a slash before the element name (e.g. `</h1>` ends the heading).
* There are six different tags for headings, reflecting different levels: `<h1>` through to `<h6>`.

## Stage 3: Marking-Up Paragraphs

* We have marked-up each of the three paragraphs using the `<p>` tag.
* This creates three paragraph _elements_.

## Stage 4: Adding Emphasis

* The purpose of the opening crawl text is to establish to the viewer that the Galactic Empire is evil, so emphasising the word _evil_ helps achieve this.
* We therefore add `<em>` tags around the word "evil".
* Furthermore we add `<strong>` emphasis around the name "Death Star".

## Stage 5: A title

* If the document appears in a window or a tab, it will help if we give it a title, we have done this using the `<title>` element.
* All HTML5 documents must include a title in order to be considered valid.
  * Browsers will always _try_ to render HTML files, even if they're invalid.

## Stage 6: Adding a Basic Style

* It is good practice to separate form from content (style from substance).
* So far we have developed the content (the substance).  Now we give it a form by adding a _stylesheet_.
* We have created a file called `style.css`, and to that:
  * Added a single rule that sets the background of the body to black and the text color to white.
  * Note that the syntax of CSS is different to HTML

## Stage 7: Font and Colour Improvements

* Now we have improved our stylesheet to make the text feel more in keeping with the movie.
* We changed the font from the default (which is whatever the browser is set to use) to a specific named typeface, in this case we just choose a font without serifs.
* The text colour is changed from white to a Star Wars yellow.
  * There are several ways of describing colour in HTML, often these require a little understanding of how mixing different levels of red, green and blue light can produce different hues.
  * The colour we use is `#ffd23e`.
* No change is made to the HTML in this stage.

## Stage 8: Centring Page Text

* HTML contains elements that help us describe the content.
* Elements don't just compartmentalise the page, they add meaning.
* We added an `<article>` tag around the content to describe it as such.
* Added a new rule to the stylesheet fixes the width of the content to `15em` wide (as a rule of thumb, 1 `em` is around the same width as a capital M in the current font).
* The `text-align` property spreads the text on each line so that it uses the full width of the `<article>` element.
* Finally, we adjusted the margins of the `<article>`.  Setting this value to `auto` allows the browser to add equal margin space either side of the element, so it becomes centred.

## Stage 9: Centred Heading(s)

* "Episode IV" and "A New Hope" are now centred.  We achieved this by:
  * Grouping the elements in a parent element: we use `<header>` here as it's a more appropriate and descriptive tag than `<div>`.
  * Adding a style rule that centres all the content of that element.
  * note that CSS uses the US spelling of centre: `center`

## Stage 10: Tweaks

* To get the text as close as possible to the original a couple of small changes were needed.  Browsers include a _default stylesheet_ which specifies things how large a heading should be, and how much space to go around it.  There are two things we need to override in this sheet.
  * In the original text "Death Star" was in all-caps.
  * In the original text "Death Star" was in all-caps but not bold.
  * We created two new rules to achieve this.
  * We also add a background of stars.

## Stage 11: Simplify

* One of the design aims of HTML5 was to make writing content simpler, so some elements don't _need_ a closing tag: `<p>` is one such element, so we can simplify the document a little by removing these.
* We don't _need_ html body and head tags either.  The browser will assume (once it sees a `<!doctype html>`) that each element should go in the `<head>` until it sees something that should be displayed, for example, an  `<article>` tag.
* The resulting document is a lot simpler.

## Stage 12: A Screen Full of Text

* Next we wish to make the text take up the full width of the browser.
* The part of the browser that shows the page is called the _viewport_.
* The width and height of the viewport are available as a unit of measurement when styling the page.
  * `vw` and `vh` are 1/100th of the width and height of the viewport respectively.
* Earlier we set our text to be `15em` wide, so since we want those 15 characters to fill the width of the screen we calculate 100/15 (which is 6.66 recurring), and set that as the font size, thus `font-size: 6.66vw`;
* By default the body has a small `body` margin which must now be removed in order for the new wider text to fit.

## Stage 13: Tilting the Text

* We can lay the text down as it appears in the movie.

## Stage 14: Animate the Crawl

* Stylesheets can include animation, so we can move the text.

## Stage 15: Add "A long time ago..."

* The movie intro also includes the famous line "A long time ago in a galaxy far, far away....".

## Stage 16: The Star Wars Logo

* To complete the intro we add:
  * the logo.




Original content below...




# Star Wars in CSS
## Summary

The introductory crawl from Star Wars is defined in `index.txt`.  This is marked up in `index.html`.  To see the development of a style sheet, edit the stylesheet definition changing the style from `style0` through to `style7`.

e.g.
```html
<link href="style/style0.css" rel="stylesheet">
```
becomes
```html
<link href="style/style1.css" rel="stylesheet">
```

Add a starfield, logo and score with the script below, note that for copyright reasons you'll have to source your own copy of the soundtrack and save it as `score.ogg` in order to enjoy the synchronised music.

```html
<script src="stars.js"></script>
```

# Files
## From TXT to HTML

We have added...
* a doctype
* an html element, defining the default language for all sub elements in this page
* a head section contianing:
    * declaration of the character set to be used
    * the page title (a requirement)
    * a link to the stylesheet to be used

* a body section
    * that contains an article, that contains a section, that contains all the content.
* a header that groups the two heading elements
* h1 elements arount the main title
* strong emphasis to the words First Order, Republic and Resistance.

## Style0 to Style1
* Flip the background and foreground colours
```css
body {
    background: black;
    color: white;
}
```

## Style1 to Style2
* Use the correct star wars colour
```css
    color: #ffd23e;
```

## Style2 to Style3
* Switched to a sans-serif font
```css
    font-family: arial;
```

* Styled the article so that it is justified and centered
```css
article {
    text-align: justify;
    margin: auto;
    width: 15em;
}
```

## Style3 to Style4

* Centre-aligned the all heading text
```css
article>section>header {
    text-align: center;
}
```

* Forced the main heading to be uppercase.
```css
article>section>header>h1 {
    text-transform: uppercase;
}
```
* Changed the default styling for strong text to be uppercase rather than bold.
```css
article>section strong {
    text-transform: uppercase;
    font-weight: normal;
}
```


## Style4 to Style5

* Made articel font size to be 6.66 hundredths of the width of the viewport.  The width is 15ems, and 100/15 is 6.66, so this scales the font so that 15ems fills the base of the screen.
```css
    font-size: 6.666vw;
```

## Style5 to Style6

* Set the screen perspective view-point to be half the height of the screen (rather than the default of infinity with infinite zoom, which would just give us squashed text, rather than text going into the distance).

```css
body {
  perspective: 50vh;
  overflow: hidden;
  height: 100vh;
}
```

* Anchor the base of the article to the bottom of the viewport.
* This baseline is then the origin of rotation when the article is tilted back (rotated around the x-axiz by 45 degrees).

```
article {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: center bottom;
  transform: rotate3d(1, 0, 0, 45deg);
}
```


## Style6 to Style7

* Add keyframe animation to scroll and fade the text

```css
article {
  animation: crawler 72s linear;
  animation-fill-mode: forwards;
}

@keyframes crawler {
0%
  {
    transform:  rotate3d(1, 0, 0, 45deg) translateY(100%);
    opacity: 1;
  }

90% {
    opacity: 1;
}
100%
  {
    transform:  rotate3d(1, 0, 0, 45deg) translateY(-50%);
    opacity: 0;
  }
}
```

## Style7 to Style8

* Our first change to index.html
* Add a JS-generated star field
* Adds the *STAR WARS* logo into the document, and a new keyframe animation to the css to shrink it
* Adjust the timings so the scrolling text waits for the logo to shrink.
* Adds the score

```html
<script src="stars.js"></script>
```
