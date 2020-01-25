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
    fill(255, 0, 0);


draw = function() {
    // Cursor Testing
    background(255, 255, 255);
    
    var CursorUsing = "None"; // Change name to one of the cursors
    
    var CustomCursor = function(config) {
        this.x = config.x || mouseX;
        this.y = config.y || mouseY;
        this.hasText = false;
        this.InText = config.InText;
        this.BorderColor = config.BorderColor || color(0, 0, 0);
        this.InsideColor = config.InsideColor || color(255, 255, 255);
        this.Name = config.Name || "NewCursor";
    };
    
    CustomCursor.prototype.draw = function() {
        text("Edit this yourself on line 62", this.x, this.y);
    };
    
    var MyCursor = new CustomCursor ({
        
    });
    
    if (CursorUsing === "Clkcursor") {
        Clkcursor();
    }
    else if (CursorUsing === "TargetCursor") {
        TargetCursor();
    }
    else {
        // Ignore It
    }
    
};


