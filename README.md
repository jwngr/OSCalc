# OSCalc

OSCalc is an open source calculator library demonstrating how to organize an open source
JavaScript project. The library is for demonstration purposes only and is not actually meant to be
used in a production application.


## Tutorial

You can follow along the development of this library on the [Gun.io blog](https://gun.io/blog/).

1. [Project Organization](https://gun.io/blog/maintaining-an-open-source-project/)
2. Automating Tasks With Gulp *(coming soon)*
3. Testing, Testing, Testing *(coming soon)*
4. Deploying To The World *(coming soon)*


## Live Demo

Live demos coming soon!


## Downloading OSCalc

** WARNING: This library is not yet available and the following section is just a placeholder. **

In order to use OSCalc in your project, you need to include the file in your HTML:

```html
<!-- OSCalc -->
<script src="js/oscalc.min.js"></script>
```

You can download the minified and un-minified versions of the OSCalc library from the
[releases page of this GitHub repository](https://github.com/firebase/oscalc/releases).

You can also install OSCalc via npm or Bower and its dependencies will be downloaded automatically:

```bash
$ npm install oscalc --save
```

```bash
$ bower install oscalc --save
```


## API Reference

### new OSCalc()

Creates a new `OSCalc` instance.

```javascript
var calc = new OSCalc();
```

### add(a, b)

Returns the sum of two numbers, `a` and `b`.

```javascript
calc.add(2, 2);     // === 4
calc.add(-2, 2);    // === 0
calc.add(5.2, 2.4); // === 7.6
calc.add(0, -6.7);  // === -6.7
```

### subtract(a, b)

Returns the difference between two numbers. `b` is subtracted from `a`.

```javascript
calc.add(2, 2);     // === 4
calc.add(-2, 2);    // === 0
calc.add(5.2, 2.4); // === 7.6
calc.add(0, -6.7);  // === -6.7
```

### multiply(a, b)

Returns the product of two numbers, `a` and `b`.

```javascript
calc.add(2, 2);     // === 4
calc.add(-2, 2);    // === 0
calc.add(5.2, 2.4); // === 7.6
calc.add(0, -6.7);  // === -6.7
```

### divide(a, b)

Returns the quotient of two numbers, where `a` is the dividend and `b` is the divisor.

```javascript
calc.add(2, 2);     // === 4
calc.add(-2, 2);    // === 0
calc.add(5.2, 2.4); // === 7.6
calc.add(0, -6.7);  // === -6.7
```

## Contributing

If you'd like to contribute to OSCalc, you'll need to run the following commands to get your
environment set up:

```bash
$ git clone https://github.com/jwngr/oscalc.git
$ cd oscalc             # go to the oscalc directory
$ npm install -g gulp   # globally install gulp task runner
$ npm install -g bower  # globally install Bower package manager
$ npm install           # install local npm build / test dependencies
$ bower install         # install local JavaScript dependencies
$ gulp watch            # watch for source file changes
```

`gulp watch` will watch for changes in the `src/` directory and lint, concatenate, and minify the
source files when a change occurs. The output files - `oscalc.js` and `oscalc.min.js` - are written
to the `dist/` directory.
