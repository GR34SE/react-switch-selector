# [react-switch-selector](https://github.com/GR34SE/react-switch-selector) &middot; [![downloads](https://img.shields.io/npm/dm/react-switch-selector)](https://www.npmjs.com/package/react-switch-selector) [![version](https://img.shields.io/github/package-json/v/GR34SE/react-switch-selector)](https://github.com/GR34SE/react-switch-selector) [![HitCount](http://hits.dwyl.com/GR34SE/react-switch-selector.svg)](http://hits.dwyl.com/GR34SE/react-switch-selector)

### Examples
###### Default

![ReactSwitchSelector](examples/example-default.gif)

###### Custom colors

![ReactSwitchSelector](examples/example-custom.gif)

### Installation

```Shell
npm install react-switch-selector --save
```

or

```Shell
yarn add react-switch-selector
```

### Usage

SwitchSelector will stretch to fill it's parent size (both width and height), so it's required create dedicated div container.

```jsx
import SwitchSelector from "react-switch-selector";
```

```jsx
    const options = [
        {
            label: "Foo",
            value: {
                foo: "bar"
            },
            selectedBackgroundColor: "#0097e6",
        },
        {
            label: "Bar",
            value: null,
            selectedBackgroundColor: "#fbc531"
        }
    ];

    const onChange = (newValue) => {
        console.log(newValue);
    };

    const initialSelectedIndex = options.findIndex(({value}) => value === null);

    return (
        <div style={{width: 100, height: 30}}>
            <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#353b48"}
                fontColor={"#f5f6fa"}
            />
        </div>
    );
```

### Props

| Prop  name                 | Type                    | Default                 | Required  | Note                                                                             |
| -------------------------  | ----------------------- | ----------------------- | --------- | -------------------------------------------------------------------------------- |
| options                    | Array of OptionType     | []                      | true      | Options array to render. Each item has a label value and optional styling props  |
| onChange                   | Function                | (v) => (console.log(v)) | true      | onChange callback that returns selected Option's value                           |
| initialSelectedIndex       | number                  | 0                       | false     | Initially selected index of options array                                        |
| border                     | string/number           | 0                       | false     | Border of wrapping div                                                           |
| backgroundColor            | string                  | #ecf0f1                 | false     | Background color of wrapping div                                                 |
| selectedBackgroundColor    | string                  | #2ecc71                 | false     | Background of selected Option                                                    |
| wrapperBorderRadius        | number                  | 20                      | false     | Border radius of wrapping div                                                    |
| optionBorderRadius         | number                  | 18                      | false     | Border radius of Option component                                                |
| fontSize                   | number                  | 14                      | false     | Font size of Option's label                                                      |
| fontColor                  | string                  | #000                    | false     | Font color of Option's label                                                     |
| selectedFontColor          | string                  | #fff                    | false     | Font color of selected Option's label                                            |
| selectionIndicatorMargin   | number                  | 2                       | false     | Inner margin of selection indicator                                              |

#### OptionType

| Property  name             | Type                    | Default             | Required  | Note                                                                             |
| -------------------------  | ----------------------- | ------------------- | --------- | -------------------------------------------------------------------------------- |
| label                      | string                  | undefined           | true      | Option's text label                                                              |
| value                      | any                     | undefined           | true      | Option's value that is returned by onChange callback                             |
| selectedBackgroundColor    | string                  | undefined           | false     | Background of this selected Option                                               |
| fontColor                  | string                  | undefined           | false     | Font color of this Option's label                                                |
| selectedFontColor          | string                  | undefined           | false     | Font color of this selected Option's label                                       |

###### Overriding styles by pure css classes is available with react-switch-selector prefix:

- react-switch-selector-wrapper - component root div
- react-switch-selector-option - each option
- react-switch-selector-option-label - each option item's label