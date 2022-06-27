
# Text Censor Package (textspace)
Censor your text with textspace package. It is a simple package to censor your text.
**Quick example**: latefrul@gmail.com => l******l@gmail.com
## Installation
```
npm install textspace
```
## Usage
```js

// Censor email address
const { emailCensor,censor } = require('textspace');

const emailCensorValue = emailCensor({email:'yourmail@gmail.com'})
// => Output = y******l@gmail.com

// Censor any text
const censorValue = censor({text:'emresengul',censorCharacter:'*'})
// => Output = e********l
```
## All Functions
| Functions         | Args                                     | Usage                                                            | Output                 |
| ----------------- | ---------------------------------------- | ---------------------------------------------------------------- | ---------------------- |
| emailCensor       | ```{email,censorCharacter,splitter}```   | ```emailCensor({email:'email@gmail.com'}) ```                    | ```e***l@gmail.com```  |
| randomCensor      | ```{text,size,censorCharacter}```        | ```randomCensor({text:'randomword',size:5}) ```                  | ```*an*om*o*d```       |
| censor            | ```{text,censorCharacter}```             | ```censor({text:'censor character'}) ```                         | ```c**************r``` |
| censorWithIndexes | ```{text,indexes,censorCharacter}```     | ```censorWithIndexes({text:'emre',indexes:[0,1]}) ```            | ```**re```             |
| censorDefinedText | ```{text,definedText,censorCharacter}``` | ```censorDefinedText({text:'emresengul',definedText:'emre'}) ``` | ```****sengul```       |




### Todo
- [ ] Write unit test
- [ ] Add new functions
	- [ ] Censor first N Character
	- [ ] Censor last N character

### In Progress
Nothing yet.


### Done ✓
- [x] Update README.md file
- [x] Add examples
- [x] Create documentation for package