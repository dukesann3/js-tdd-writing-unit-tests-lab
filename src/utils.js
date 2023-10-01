// Your code here
export function isPalindrome(word) {
    if (!word) {
        return false;
    }
    else if (typeof word !== 'string') {
        throw new Error('argument must be a string');
    }

    //word is going to be compared...
    const wordArray = word.split('');
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join('');

    if (word === reversedWord) {
        return true;
    }

    return false;
}
