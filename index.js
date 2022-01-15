function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    const hello = 'HELLO';
    console.log(hello);
}
function logWhisper(string) {
    const whisper = 'HELLO';
    console.log(whisper.toLowerCase());
}
function dinnerDate(string) {
    return "Let's have dinner together!";
}

function sayHiToHeadphonedRoommate(string) {
    if (whisper(string) === string) {
        return "I can\'t hear you!";
    }
    if (shout(string) === string) {
        return "YES INDEED!";
    }
    if (dinnerDate(string) === string) {
        return "I would love to!";
    }
}

