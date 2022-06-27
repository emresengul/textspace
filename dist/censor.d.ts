import { emailCensorArgs, randomCensorArgs, censorArgs, censorWithNumbersArgs, censorDefinedTextArgs } from './interface/FuncArgs';
export declare const emailCensor: ({ email, censorCharacter, splitter }: emailCensorArgs) => string;
export declare const randomCensor: ({ text, size, censorCharacter }: randomCensorArgs) => string;
export declare const censor: ({ text, censorCharacter }: censorArgs) => string;
export declare const censorWithIndexes: ({ text, indexes, censorCharacter }: censorWithNumbersArgs) => string;
export declare const censorDefinedText: ({ text, definedText, censorCharacter }: censorDefinedTextArgs) => string;
