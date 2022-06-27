import { censorWithIndexes } from "./src/censor"

export * from "./src/censor"

// import { censor, censorWithIndexes, emailCensor, randomCensor, censorDefinedText } from "./src/censor"
// console.log('email censor=', emailCensor({ email: "latefrul@gmail.com" }))
// console.log('text Censor=', randomCensor({ text: 'emre sengul', size: 6 }))
// console.log('text Censor=', censor({ text: 'emresengul', censorCharacter: '*' }))
// console.log('censor with your array', censorWithIndexes({ text: 'emre sengul', indexes: [0, 2] }))
// console.log('censor with your array', censorDefinedText({ text: 'emre sengul', definedText: 'emre', censorCharacter: '*' }))