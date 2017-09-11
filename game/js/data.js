const SYMBOLS = {
    energy: "&#x26E8;",
    ants: "&#x265F;",
}

const TEXTS = {
    scoutFound: "<div><p>After sending <b>%1</b> ants to scout a radius of <b>%2m</b> after food:</p><p class=\"msghighlight\">You've found <b>%3</b>. There's about (e) <b>%4</b> energy in this resource.</p><p>How many ants do you wish to send to pick the resource?</p></div>",
    hatchResults: "<p>You successfully hatched <b>%1</b> eggs!</p>",
    buildRoomPrompt: "<p>To build another room in the colony you'll need <b>%1</b> energy and <b>%2</b> ants to complete in about <b>%3</b> days.</p>",
    buildRoomError: "<p class=\"msgerror\">Ops, you can't do that right now.</p>",
    buildRoomResult: "<p class=\"msghighlight\">You successfully built another room in your colony.</p>"
};

const MESSAGE_INTRO = [
    ["Welcome, <b>Queen Lisa</b>. I'm Antherous, and I'm here to give you another chance.", 3],
    ["Ok, I know you might be lost now. But I'll explain...", 2],
    ["I don't know how to tell you that, but... you went mad. You led your colony to ashes.", 4],
    ["All the ants died a terrible death when the <b>War</b> came, you couldn't protect your own ants.", 6],
    ["I managed to create this virtual interface for you so you can control our colony once again.", 5],
    ["Remember to", 5],
];

const PLACES = [
    { d: 5, n: "Shattered Soda Can", e: 5 },
    { d: 10, n: "Smashed Candy", e: 10 },
    { d: 25, n: "Fallen Ice Cream", e: 50  },
    { d: 40, n: "Piece of Chocolate", e: 70  }
];

const SOUNDS = {
    message: jsfxr([2,,0.09,,0.49,0.34,,0.0525,,,,0.28,0.29,,,,,,1,,,,,0.5]),
    progress_start: jsfxr([2,0.08,0.3967,,0.52,0.3191,,0.104,,,,,,0.2888,,,,,0.7558,,,,,0.4]),
    dialog_open: jsfxr([3,,0.0346,,0.1453,0.5152,,-0.86,-0.26,,,-0.38,,,,,,,1,,,,,0.5]),
    dialog_close: jsfxr([3,,0.0346,,0.1453,0.5152,,-0.86,-0.26,,,-0.84,,,,,,,1,,,,,0.5]),
    fade_out: jsfxr([3,0.29,0.2779,0.4006,0.3918,0.8028,,-0.3415,,,,,,,,,0.3766,-0.0329,1,,,,,0.4]),
    fade_in: jsfxr([3,0.19,0.25,0.75,0.3918,0.8028,,-0.3415,0.48,,,0.02,,,,,0.3766,-0.0329,1,,,,,0.4]),
    warn: jsfxr([0,0.08,0.14,0.31,0.44,0.854,,,,,,0.3732,0.5938,,0.1999,,,0.02,0.44,,,,-0.02,0.3])
};

const MAP_COLUMNS = 7;
const MAP = [
    [{c: 3}],
    [{c: 1, l: [0]}, {c: 5, l: [0]}],
    [{c: 2, l: [1]}, {c: 6, l: [2]}],
    [{c: 0, l: [3]}, {c: 2, l: [3]}, {c: 4, l: [4]}, {c: 6, l: [4]}],
    // [{c: 1}, {c: 4}]
];
