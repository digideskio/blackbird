// Keybindings
// -----------

var blackbird = blackbird || {};

blackbird.ipc = require("ipc");

// Global keybindings
blackbird.ipc.on("ping", function(arg) {
    switch (arg) {
    case "play-pause":
        blackbird.player.pause(function(playState) {
            blackbird.updatePlayPause(playState);
        });
        break;
    case "next":
        blackbird.player.next();
        break;
    case "prev":
        blackbird.player.previous();
        break;
    }
});
