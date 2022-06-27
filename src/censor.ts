import { isEmail } from './common/validations';
import { ERROR_TYPES } from './enums';
import { setError } from './errors';
import { emailCensorArgs, randomCensorArgs, censorArgs, censorWithNumbersArgs, censorDefinedTextArgs } from './interface/FuncArgs';


export const emailCensor = ({ email, censorCharacter = "*", splitter = "@" }: emailCensorArgs): string => {
    if (!isEmail(email)) {
        throw setError(ERROR_TYPES.EMAIL_VALIDATION)
    }
    const splited = email.split(splitter);
    const censored = censor({ text: splited[0], censorCharacter });
    return censored + splitter + splited[1]
}
export const randomCensor = ({ text, size = 3, censorCharacter = "*" }: randomCensorArgs): string => {

    const randomArray: number[] = []
    while (randomArray.length < size) {
        const randomValue = Math.floor(Math.random() * text.length)
        !randomArray.find((val) => val === randomValue) && randomArray.push(randomValue)
    }
    return censorWithIndexes({ text, indexes: randomArray, censorCharacter })
}

export const censor = ({ text, censorCharacter = '*' }: censorArgs): string => {
    const numberArray = Array.from({ length: text.length }, (v, i) => i)
    // Deleting first and last character from array because of we are not want to censored first and last character 
    numberArray.shift()
    numberArray.pop()
    return censorWithIndexes({ text, indexes: numberArray, censorCharacter })
}


export const censorWithIndexes = ({ text, indexes, censorCharacter = '*' }: censorWithNumbersArgs): string => {
    const splitedText = text.split("")
    indexes.forEach(value => splitedText[value] = censorCharacter)
    return splitedText.join("")
}

export const censorDefinedText = ({ text, definedText, censorCharacter = '*' }: censorDefinedTextArgs): string => {
    const numberArray = Array.from({ length: definedText.length }, (arrItem) => "*")
    return text.replace(definedText, numberArray.join(""))
}