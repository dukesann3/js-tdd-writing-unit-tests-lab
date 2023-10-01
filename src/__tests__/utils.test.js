// Your tests here
import { isPalindrome } from "../utils";

describe('isPalindrome', () => {
    it('expects isPalindrome to comeback as true when argument is a palindrome', () => {
        const palindrome1 = 'racecar';
        const palindrome2 = 'aa';
        const palindrome3 = 'leeel';
        const palindrome4 = 'aaa';
        const palindrome5 = 'Hector';

        const result1 = isPalindrome(palindrome1);
        const result2 = isPalindrome(palindrome2);
        const result3 = isPalindrome(palindrome3);
        const result4 = isPalindrome(palindrome4);
        const result5 = isPalindrome(palindrome5);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
        expect(result4).toBe(true);
        expect(result5).toBe(false);
    }),
    it('expects isPalindrome to identify lower and uppercased words', ()=>{
        const palindrome1 = 'Heceh';
        const palindrome2 = 'Aaa';
        const palindrome3 = 'AaA';

        const result1 = isPalindrome(palindrome1);
        const result2 = isPalindrome(palindrome2);
        const result3 = isPalindrome(palindrome3);

        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(true);
    }),
    it('isPalindrome is expected to return false when argument is an empty string' ,()=>{
        const palindrome = '';

        const result = isPalindrome(palindrome);

        expect(result).toBe(false);
    }),
    it('isPalindrome will return an error if the argument is not a string', ()=>{
        const palindrome = 123;

        expect(()=>{
            isPalindrome(palindrome);
        }).toThrow(new Error('argument must be a string'));
    })

})
