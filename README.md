# CSS Shorthand Properties

A simple way to list all "shorthand" CSS properties and which properties they expand to, as defined on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS).

I tried to search for an existing simple list but couldn't find one, so I trawled through MDN and collated the data.

## Usage

Available on npm as `css-shorthand-properties`, or in the browser as a global called `cssShorthandProps`

### Properties

#### shorthandProperties

The core data as a simple JS object. Each key is a CSS shorthand property. Each value is a compacted list of CSS properties that the shorthand expands to.

There is a convenience method (listed below) that means you shouldn’t need to access this list directly, but it’s available for other use cases.


### Methods

#### expand

* Takes a CSS shorthand property and returns a list of longhand properties
* **Parameters**:
	* `property` _(String)_ Shorthand property to expand.
	* `recurse` _(Boolean – optional, default `false`)_ If true, each longhand property will also be run through `expand()`. This is only useful for the `border` property.
* **Returns**: _Array_ with a list of longhand properties that the given property expands to. If the property is not a shorthand, the array contains only the original property.

```js
// Standard usage
cssShorthandProps.expand('list-style');
// ['list-style-type', 'list-style-position', 'list-style-image']

// Non-shorthand properties return themselves in an array
cssShorthandProps.expand('color');
// ['color']

// Using 'border' in normal mode...
cssShorthandProps.expand('border');
// ['border-width', 'border-style', 'border-color']

// ...but the border properties are also shorthands
cssShorthandProps.expand('border-width');
// ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width']

// Using 'border' with recursion returns an array of arrays
cssShorthandProps.expand('border', true);
/*
[
  ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
  ['border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style'],
  ['border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color']
]
*/
```

## Licence

MIT: [http://gilmoreorless.mit-license.org/]()

