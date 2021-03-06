
const game = {
    // Start initializing objects, preloading assets and display start screen
    init: function() {
        // Get handler for game canvas and context
        game.canvas = document.getElementById("gamecanvas");
        game.context = game.canvas.getContext("2d");

        // Initialize objects
        levels.init();
        loader.init();

        // Hide all game layers and display the start screen
        game.hideScreens();
        game.showScreen("gamestartscreen");
    },

    hideScreens: function() {
        const screens = document.querySelectorAll(".gamelayer");

        // Iterate through all the game layers and set their display to none
        for (let i = screens.length - 1; i >= 0; i--) {
            let screen = screens[i];

            screen.style.display = "none";
        }
    },

    hideScreen: function(id) {
        const screen = document.getElementById(id);

        screen.style.display = "none";
    },

    showScreen: function(id) {
        const screen = document.getElementById(id);

        screen.style.display = "block";
    },

    showLevelScreen: function() {
        game.hideScreens();
        game.showScreen("levelselectscreen");
    },
};

const levels = {
    data: [
        {
            foreground: "desert-foreground",
            background: "clouds-background",
            entities: []
        },
        {
            foreground: "desert-foreground",
            background: "clouds-background",
            entities: []
        }
    ],

    init: function() {
        const levelSelectScreen = document.querySelector('#levelselectscreen');

        // An event handler to call
        const buttonClickHandler = function() {
            game.hideScreen('levelselectscreen');

            // Level label values are 1, 2. Levels are 0, 1
            levels.load(this.value - 1);
        };

        for (let i = 0; i < levels.data.length; i++) {
            let button = document.createElement('input');

            button.type = 'button';
            button.value = (i + 1); // Level labels are 1, 2
            button.addEventListener('click', buttonClickHandler);

            levelSelectScreen.appendChild(button);
        }

    },

    load: function(number) {
        // Declare a new currentLevel object
        game.currentLevel = { number: number };
        game.score = 0;

        document.getElementById("score").innerHTML = "Score: " + game.score;
        var level = levels.data[number];

        // Load the background, foreground, and slingshot images
        game.currentLevel.backgroundImage = loader.loadImage("images/backgrounds/" + level.background + ".png");
        game.currentLevel.foregroundImage = loader.loadImage("images/backgrounds/" + level.foreground + ".png");
        game.slingshotImage = loader.loadImage("images/slingshot.png");
        game.slingshotFrontImage = loader.loadImage("images/slingshot-front.png");

        // Call game.start() once the assets have loaded
        loader.onload = game.start;
    },
};

const loader = {
    loaded: true,
    loadedCount: 0,
    totalCount: 0,

    init: function() {
        const audio = document.createElement("audio");
        let mp3Support;

        // TODO other formats
        if (audio.canPlayType) {
            mp3Support = "" !== audio.canPlayType("audio/mpeg");
        } else {
            mp3Support = false;
        }

        let soundFileExtn = mp3Support ? ".mp3" : undefined;
    },

    loadImage: function(url) {
        this.totalCount++;
        this.loaded = false;

        game.showScreen("loadingscreen");

        let image = new Image();
        image.addEventListener("load", loader.itemLoaded, false);
        image.src = url;

        return image;
    },

    soundFileExtn: ".mp3",

    loadSound: function(url) {
        this.loaded = false;
        this.totalCount++;

        game.showScreen("loadingscreen");

        let audio = new Audio();

        audio.addEventListener("canplaythrough", loader.itemLoaded, false);
        audio.src = url + loader.soundFileExtn;

        return audio;
    },

    itemLoaded: function(ev) {
        ev.target.removeEventListener(ev.type, loader.itemLoaded, false);

        loader.loadedCount++;

        document.querySelector("#loadingmessage").innerHTML = "Loaded " + loader.loadedCount
            + " of " + loader.totalCount;

        if (loader.loadedCount === loader.totalCount) {
            loader.loaded = true;
            loader.loadedCount = 0;
            loader.totalCount = 0;

            game.hideScreen("loadingscreen");

            if (loader.onload) {
                loader.onload();
                loader.onload = undefined;
            }
        }
    },
};

window.addEventListener("load", function() {
    game.init();


});

