
// capitalise the first letter of each word in a string and decapitalise the rest (unless it is an all caps word)
export const capitalize = (s) => {
    const words = s.split(' ');
    return words.map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1).toLowerCase()}`).join(' ');
};