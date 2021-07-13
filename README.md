# [react-switch-selector](https://github.com/GR34SE/react-switch-selector) &middot; [![downloads](https://img.shields.io/npm/dm/react-switch-selector)](https://www.npmjs.com/package/react-switch-selector) [![version](https://img.shields.io/github/package-json/v/GR34SE/react-switch-selector)](https://github.com/GR34SE/react-switch-selector) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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
       label: <span>Foo</span>,
       value: {
            foo: true
       },
       selectedBackgroundColor: "#0097e6",
   },
   {
       label: "Bar",
       value: "bar",
       selectedBackgroundColor: "#fbc531"
   }
];

const onChange = (newValue) => {
    console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({value}) => value === "bar");

return (
    <div className="your-required-wrapper" style={{width: 100, height: 30}}>
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

| Prop name                  | Type                    | Default                 | Required  | Note                                                                             |
| -------------------------- | ----------------------- | ----------------------- | --------- | -------------------------------------------------------------------------------- |
| options                    | Array of OptionType     | []                      | true      | Options array to render. Each item has a label, value and optional styling props |
| onChange                   | Function                | (v) => (console.log(v)) | true      | onChange callback that returns selected Option's value                           |
| initialSelectedIndex       | number                  | 0                       | false     | Initially selected index of options array                                        |
| forcedSelectedIndex        | number                  | undefined               | false     | Force selectedIndex with this prop (can be also used to resetting the toggle)    |
| border                     | string/number           | 0                       | false     | Border of wrapping div                                                           |
| backgroundColor            | string                  | #ecf0f1                 | false     | Background color of wrapping div                                                 |
| selectedBackgroundColor    | string                  | #2ecc71                 | false     | Background of selected Option                                                    |
| wrapperBorderRadius        | number                  | 20                      | false     | Border radius of wrapping div                                                    |
| optionBorderRadius         | number                  | 18                      | false     | Border radius of Option component                                                |
| fontSize                   | number                  | 14                      | false     | Font size of Option's label                                                      |
| fontColor                  | string                  | #000                    | false     | Font color of Option's label                                                     |
| selectedFontColor          | string                  | #fff                    | false     | Font color of selected Option's label                                            |
| selectionIndicatorMargin   | number                  | 2                       | false     | Inner px margin of selected option indicator                                     |
| disabled                   | boolean                 | false                   | false     | Disabling the toggle                                                             |

#### OptionType

| Property name              | Type                                   | Default             | Required  | Note                                                                             |
| -------------------------- | -------------------------------------- | ------------------- | --------- | -------------------------------------------------------------------------------- |
| label                      | string/number/ReactElement/HTMLElement | undefined           | true      | Option's label                                                              |
| value                      | any                                    | undefined           | true      | Option's value that is returned by onChange callback                             |
| selectedBackgroundColor    | string                                 | undefined           | false     | Background of this selected Option                                               |
| fontColor                  | string                                 | undefined           | false     | Font color of this Option's label                                                |
| selectedFontColor          | string                                 | undefined           | false     | Font color of this selected Option's label                                       |

###### Overriding styles by pure css classes is available with react-switch-selector prefix:

- react-switch-selector-wrapper - component root div
- react-switch-selector-disabled - toggle in disabled state
- react-switch-selector-option - each option
- react-switch-selector-option-label - each option item's label