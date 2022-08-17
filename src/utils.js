
// capitalise the first letter of each word in a string and decapitalise the rest (unless it is an all caps word)
export const capitalize = (s) => {
    const words = s.split(' ');
    return words.map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1).toLowerCase()}`).join(' ');
};

export const inverse = (hex) => {
    if (hex.charAt(0) === '#') hex = hex.substring(1);
    return '#' + (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
}