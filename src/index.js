var words = exports;


words.wordsToBytes = function(words) {
    var bytes = [],
        i = 0,
        il = words.length * 32;

    while (i < il) {
        bytes.push((words[i >>> 5] >>> (24 - i % 32)) & 0xFF);
        i += 8;
    }

    return bytes;
};

words.bytesToWords = function(bytes) {
    var words = [],
        i = -1,
        il = bytes.length - 1,
        b = 0;

    while (i++ < il) {
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
        b += 8;
    }

    return words;
};
