const createElement = (tagName) => (strings, ...args) => ({
    type: tagName,
    template: strings.reduce((acc, currentString, index) =>
        acc + currentString + (args[index] || ""), ""
    )
})



export const h1 = createElement('h1')

