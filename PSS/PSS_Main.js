// Note: Code uses (a lot of) constructors
var version = "   version 2   "; // version (dont configure it)

print("PSS V2 has loaded in successfully. Python Studios Script. DO NOT TWEAK TO MUCH. ALL RIGHTS RESERVED. EVERYTHING BELONGS TO PYTHON STUDIOS!!! NO COPYING" + version + "      ");

var versionloadedmess = false;
if (versionloadedmess === true) {
    println(version + "has loaded");
}
var button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 60;
    this.height = config.height || 50;
    this.label = config.label || "Click";
}; // auto button contrustor

var PosButton = function(config) {
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
    this.label = config.label;
    this.color = config.color || color(30, 181, 0);
    this.onClick = function() {};
}; // constructor for a button that moves an object.


PosButton.prototype.draw = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
    this.onClick = function() {};
}; // Position Button Drawing

var PositionButton1 = new PosButton ({
    x: 325,
    y: 335,
    label: "Move",
    width: 60,
    height: 50,
    color: color(33, 94, 18),
    onClick: function() {
        fill(255, 255, 255);
        println("Configure This Position button please to make it work");
    },
}); // position button maker

var NextButton = new button ({
    x: 325,
    y: 10,
    label: "Next"
}); // the next button built

button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
}; // checks if your mouse is inside the button

PosButton.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
}; // checks if your mouse is inside the button

mouseClicked = function() {
    if (NextButton.isMouseInside()) {
        println("Configure This. You will find it by button coding.."); // change this..
    } // tells you to configure this line to output what you want.
     if (PositionButton1.isMouseInside()) {
        println("Configure This. You will find it by button coding.."); // change this..
    } // tells you to configure this line to output what you want.
};
// make characters (KHAN ACADEMY) Note: if you are outside Khan Academy, delete this till you see a comment the says: deleteEnd
var KhanImage = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width || 40;
    this.height = height || 40;
    this.khanimg = getImage("creatures/Hopper-Happy"); // change img here if you like,
}; // build commands for the character (DEFUALT CHARACTER: Hopper)

KhanImage.prototype.draw = function() {
    image(this.khanimg, this.x, this.y, this.width, this.height);
}; // img model



var khanHopperChar = new KhanImage({
    x: 200,
    y: 200,
    width: 40,
    height: 40,
    khanimg: getImage("creatures/Hopper-Happy"),
});

// deleteEnd

// simple commands:
var circle = ellipse;
var rec = rect;
var Pt = point;
var ani = draw;
// Mouse Changers (use inside a ani command)
var RCM = function() {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);
    fill(0, 0, 0);
}; // RED MOUSE CIRCLE

// Text Sizes https://www.khanacademy.org/computer-programming/pss-v2-code-is-in-editor/4900564987035648
var TitleText = function() {
    textSize(30); // Title Text Size
};
var p = function() {
    textSize(15); // Defualt Text Size
};
var Heading1 = function() {
    textSize(25);
};
var Heading2 = function() {
    textSize(23);
};
var Heading3 = function() {
    textSize(20);
};

// DATA

var Players;
var Bots;

var Ids = true;
var PrintIds = false;
var MAXid = 100000000000000000000; // dont pass this limit

if (Ids === true) {
    var IID = random(0, MAXid);
    var IDNUM = round(IID);
    if (PrintIds === true) {
        print(IDNUM);
    }
} // auto Generate ids

var PrintUsers = false;

var ALLStats = false;



Players = ["User1"];
Bots = [""];
if (PrintUsers === true) {
    println("Player: " + Players);
}


if (ALLStats === true) {
    println("Player: " + Players);
    println("Bot: " + Bots);
    
    println("Id: " + IDNUM);
    println("MaxId: " + MAXid);
}

// END DATA

// Extra Commands (USE CUSTOM CONFIGURATION)


var JumpScare = function() {
    // Add your JumpScare here.
};
var DataTable = [];

// Game Functions






// Curency Values

var Coins;
var CoinsPerClick;
var CoinsPerSceond;

var Stages = [];
var StagesPassed = [];

// Key Information

var InfoCredits = "Made by Python Studios, 2018 - 2020, PSS is owned by Python Studios, all Rights reserved.";

 var keyPressed = function() {
    
    // Conditionally display based on string value 
    if (key.toString() === '!') {
        println(InfoCredits);
    }
};

/*

Custom Cursors Library, veiw full code at:
https://www.khanacademy.org/computer-programming/custom-cursors-library-in-progress-for-pss-v2/6443511326982144

*/

print("Custom Cursors has loaded in.");
// Import
    var Clkcursor = function() {
        strokeWeight(5);
        fill(230, 135, 135);
        rect(mouseX - 5, mouseY - 23, 63, 30);
        fill(0, 0, 0);
        textSize(25);
        
        textSize(16.3);
        strokeWeight(1);
        if (mouseIsPressed === false) {
            text("Click", mouseX, mouseY);
        }
        else {
            text("Clicked", mouseX, mouseY);
        }
    };
    var TargetCursor = function() {
        strokeWeight(10);
        stroke(255, 0, 0);
        ellipse(mouseX, mouseY, 50, 50);
        stroke(0, 0, 0);
        point(mouseX, mouseY);
        strokeWeight(1);
        stroke(0, 0, 0);
    };
    
    
// End Custom Cursors

// DATA COLLECTION IN PRINT

var DataShown = ["Data: ", "Players: ", Players, "Id: ", IDNUM,  ];

keyPressed = function() {
    if (key.toString() === '*') {
        println(DataShown);
    }
};


// END DATA COLLECTION


for (var abghy = 0; abghy > 6000000; abghy ++) {
    if (abghy >= 6000000) {
        background(133, 126, 126);
        println("[SYSTEM]: " + "You have been on this program for over 1 hour.");
    }
}

var SocialNames = [];

// DO NOT ADD ANYTHING IN THE Social variable(s)

    // Social Links Area
    // Configure Your Social Links here
    var Add_YT = SocialNames.push("Whyualwaylie"); // Change whyualwaylie to your own
    // You can add more
    
    keyPressed = function() {
        if (key.toString() === "l") {
            fill(0, 0, 0);
            text("Check out this YouTube account: " + SocialNames, mouseX, mouseY);
        }
    };
    