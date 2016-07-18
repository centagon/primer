# Centagon Primer

[![Bower version](https://badge.fury.io/bo/centagon-primer.svg)](https://badge.fury.io/bo/centagon-primer)

## Getting Started

The quickest way to get started is with a [basic download](https://github.com/centagon/primer/archive/master.zip).

Also, if you're rolling your own setup, you can install Primer
through bower.

```bash
$ bower install centagon-primer
```

## Javascript Utilities

#### Anchor

```javascript
import Anchor from './lib/Anchor';

// Register rel=external handlers.
(new Anchor).registerExternals();
```

#### Equalizer

```javascript
import Equalizer from './lib/Equalizer';

const equalizer = new Equalizer(selector = '.equalized');

// Register/boot the equalizer
equalizer.register(scope = window);

// Reset all equalized elements
equalizer.reset();
```

#### LazyLoader

```javascript
import LazyLoader from './lib/LazyLoader';

new LazyLoader(selector = 'img[data-src');
```

#### Scroll

```javascript
import Scroll from './lib/Scroll';

// Create a new Scroll instance that triggers 
const scroll = new Scroll({
	threshold: window.innerHeight / 2,
	onBeforeThreshold: () => console.log('Before the threshold'),
	onAfterThreshold: () => console.log('After the threshold')
});

// Animated scroll to a certain position on the page
Scroll.to(offset, speed = 250);

// Get the current scroll position in pixels.
Scroll.getPosition();
```

#### Social.Share

```javascript
import Share from './lib/Social/Share';
import { Facebook, Twitter } from './lib/Social/Networks';

const share = new Share(selector = '[data-social]');
share.register('facebook', Facebook);
share.register('twitter', Twitter);
share.boot();
```

#### Util.Array

```javascript
import { Array } from './Util';

Array.merge({ key: 'value' }, { key: 'awesome', another: 'value' });
// { key: 'value', another: 'value' } 
```

#### Util.Orientation

```javascript
import { Orientation } from './Util';

// Get the current device orientation
Orientation.get(); // portait / landscape.

// Listen to the orientation change event
Orientation.onChange((e) => {
	console.log('The orientation changed to ' + Orientation.get());
});
```

#### Util.Visibility

```javascript
import { Visibility } from './Util';

const element = document.getElementById('my-awesome-element');

// Determine that the element is visible.
Visibility.isVisible(element);

// Determine that the element is hidden.
Visibility.isHidden(element);
```

#### Util.Window

```javascript
import { Window } from './Util';

// Open a new popup window
Window.open(url, width = 600, height = 450, center = true);
```

## SCSS Utilities

```scss
$colors: (
	blue: rgb(0, 0, 255)
);

body {
	background-color: color-get('blue'); // rgb(0, 0, 255)
}
```


## Contributing

Have a bug? Please create an issue here on GitHub that conforms with
[our contributing guidelines](https://github.com/centagon/guidelines/blob/master/contributing.md).
You can also browse the [Help Wanted](https://github.com/centagon/primer/labels/help%20wanted)
tag in our issue tracker to find things to do.

## License

This package is available under the [MIT license](https://github.com/centagon/primer/blob/master/LICENSE).

Copyright (c) 2016 Centagon, B.V.