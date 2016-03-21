# A simple container for text that gets copied when clicked

## Installation
The package is not published to Meteor yet, so from your app do:

```shell
$ mkdir -p packages
$ cd packages
$ git clone https://github.com/gsabran/meteor-copy-text.git
```

and add `gsabran:copy-text` in your `./meteor/packages`

## What is does
- creates an input (with fixed value) that contains the text you want to be copied on click
- when the input is clicked for the first time:
  - select the entire text in the input
  - tries to copy it (success will depend on browser support)
  - if the property `onCopied` is specified, call it with:
    - if copy is successful: `onCopied(true, text)`
    - if not: `onCopied(false)`

## Example usage
```jsx
import {CopyText} from 'meteor/gsabran:copy-text';
class SomeComponent extends Component {
  render() {
    var text = '<iframe width="560" height="315" src="https://www.youtube.com/embed/x056ioqqn8A" frameborder="0" allowfullscreen></iframe>'

    return <CopyText text={text} />

    /* or */

    // showConfirmationPopup will be called when the text is clicked
    const showConfirmationPopup = (success, text) => {
      if (success)
        alert('the text has been copied');
      else
        console.log('unable to auto copy');
    }
    return <CopyText text={text} onCopied={showConfirmationPopup}/>
  }
}

```
