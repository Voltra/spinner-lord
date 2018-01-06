# spinner-lord
>  A CSS bulk of animated spinners used for loading



# What is `spinner-lord` ?

`spinner-lord` is a CSS only library that provides multiple lightweight circular loading spinners.

It provides several ready-to-use spinners as well as the ability to create your own easily.

# Why should I care ? Do I even need a loading spinner ?

The web as evolve since its first premises, now many rely on web applications, single page applications, heavy websites and so on.

The common factor is that sometimes, it is not easy for you to provide every single resource needed in a correct amount of time, even for the very minimal requirements (the page itself, stylesheets, scripts, etc...).

One solution to this problem would be to use a loading icon, in our case a loading spinner. This should grant you enough time to load your precious resources in the background while keeping the user visually distracted.

# How do I get started ?

First things first, you need to download this library.

You can :

* Download the source files directly from [github](https://github.com/Voltra/spinner-lord)
* Download it using npm : `npm install --save spinner-lord`



Once downloaded, you'll find yourself with a `css` folder within which a `variants` folder is contained.

You'll need two (or three) thing(s) : the library's core file (`spinner-lord.css`), a reset sheet (don't panic, `reset.css` is here if you don't have one) and your eventual variant.



Once those two are ready, you can proceed to use them in your page :

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- [...] -->
    <link rel="stylesheet" href="path/to/your/reset/sheet"/>
    <link rel="stylesheet" href="path/to/spinner-lord.css"/>
    <link rel="stylesheet" href="path/to/variant/if/you/want/to/use/one.css"/>
    <!-- [...] -->
  </head>
  <body>
    <div id="spinner-lord" class="active"> <!-- your variant might need a class here -->
      <span></span>
      <!-- eventual additionnal spans (for variants), check the @span-amount in your variant's stylesheet -->
    </div>
    <!-- [...] -->
  </body>
</html>
```



However, the above will only display the spinner and nothing else, you might want to remove it dynamically :

```
- add the "active" class dynamically upon start
- replace the "active" class by the "inactive" class once everything is fully loaded
- Once the transition finished, you can remove #spinner-lord from the DOM
```

If you use jQuery or a jQuery-like library, the `js/removeSpinnerLord.js` file provides a function to remove it from the DOM (as well as `js/removeSpinnerLord.es6.js` which is the es6 module version of the above).

