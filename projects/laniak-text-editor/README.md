# LaniakTextEditor

This library component is developed by Shashank Kawle for **Laniak**
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Overview

**Laniak Text Editor** is an Angular component to include basic text editor functionality in your web app.

```bash
npm i laniak-text-editor
```

## Usage

* Import Laniak Text Editor in your app.module.ts 
```typescript
import {LaniakTextEditorModule} from 'laniak-text-editor'
```

* Add module import entry in import array of app.module.ts
```typescript
 imports: [
    LaniakTextEditorModule
  ],
```

* In app.component.html add Laniak Text Editor component. Also add reference to editor to access the data. In below case we have added reference as `#editor1`
```html
 <lan-text-editor #editor1></lan-text-editor>
```

* In app.component.ts access the data as follows:
```typescript
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit
{

  @ViewChild('editor1') ed1: publicApiObjct | undefined

  constructor() 
  {}

  ngAfterViewInit()
  {
    this.ed1?.setTheme("dark");
  }

  display()
  {
    console.log(this.ed1?.getRawText());
  }
}
```

> Note: Don not change `publicApiObjct` as it is required to specify type of editor reference.

## APIs

`publicApiObject` type provides three API for Laniak Text Editor.

|API | Description|
|---- | ----------|
|setTheme() | Possible parameter values: `light` & `dark`. Default value is `light`. Use in **ngAfterViewInit** life cycle hook to specify default theme of editor.|
|getRawText() | Parameters : none. Use to get raw text (without HTML formatting) from text editor.|
|getFormattedText()| Parameters : none. Use to get HTML formatted text  from text editor.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)