function challenge4(text, char) {
    var count = 0;
    var position = text.indexOf(char);

    while (position != -1) {
        count++;
        position = text.indexOf(char, position + 1);
    }
    return count;
}

console.log(challenge4("hello world", 'o'));
console.log(challenge4("aaa bbb a", 'a'));
console.log(challenge4("abc", 'd'));