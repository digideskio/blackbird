// Utility functions

var shuffle = function(array) {
    // Shuffle array
    var idx = array.length,
        temporaryValue,
        randomIdx ;

    while (0 !== idx) {
        // Pick a remaining element
        randomIdx = Math.floor(Math.random() * idx);
        idx -= 1;
        temporaryValue = array[idx];
        array[idx] = array[randomIdx];
        array[randomIdx] = temporaryValue;
    }
    return array;
};

var argsort = function(array) {
    // Sort array in increasing order (in place) and return indices
    for (var i = 0; i < array.length; i++) {
        array[i] = [i, array[i]];
    }

    array.sort(function(a, b) {
        return a[1] - b[1];
    });

    var sortedIndices = [];
    for (i = 0; i < array.length; i++) {
        sortedIndices.push(array[i][0]);
        array[i] = array[i][1];
    }

    return sortedIndices;
};

exports.shuffle = shuffle;
exports.argsort = argsort;
