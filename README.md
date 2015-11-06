React-Conditionals
==============

React component for easy conditional logic packaged for Meteor

This package is a wrapper around [react-conditional-component](https://github.com/ziad-saab/react-conditional-component)
### Adding it to your project

~~~
meteor add praneybehl:react-conditionals
~~~

Usage
=====
This component displays its children only if they satisfy their predicate:

```jsx
<Conditional value={someValue}>
  <span showIfEquals={10}>The value is 10 or "10"</span>
  <span showIfStrictlyEquals={10}>The value is 10</span>
  <span showIfLte={10}>The value is lower than or equal to 10</span>
  ...
</Conditional>
```

## Example

```html
/**
* @jsx React.DOM
*/
var Demo = React.createClass({
  getInitialState: function() {
    return {someValue: 10};
  },

  componentDidMount: function() {
    // Change the value after 1 second
    setTimeout(function() {
      this.setState({value: 0});
    }.bind(this), 1000);
  },

  render: function() {
    return (
      <Conditional value={this.state.someValue}>
        <span showIfEquals={10}>The value is 10 or "10"</span>
        <span showIfStrictlyEquals={10}>The value is 10</span>
        <span showIfLte={10}>The value is lower than or equal to 10</span>
        <span showIfTrue>The value is true</span>
        <span showIfTruthy>The value is truthy</span>
      </Conditional>
    );
  }
});


```

## Predicates

The available predicates are: `showIfDefined`,`showIfUndefined`,`showIfTrue`,`showIfTruthy`,`showIfFalse`,`showIfFalsy`,`showIfEquals`,`showIfStrictlyEquals`,`showIfLte`,`showIfLt`,`showIfGte`,`showIfGt`.

## License

MIT.
