interface CensorMainArgs {
    censorCharacter?: string;
}
export interface emailCensorArgs extends CensorMainArgs {
    email: string;
    splitter?: string;
}
export interface randomCensorArgs extends CensorMainArgs {
    text: string;
    size?: number;
}
export interface censorArgs extends CensorMainArgs {
    text: string;
}
export interface censorWithNumbersArgs extends CensorMainArgs {
    text: string;
    indexes: number[];
}
export interface censorDefinedTextArgs extends CensorMainArgs {
    text: string;
    definedText: string;
}
export {};
