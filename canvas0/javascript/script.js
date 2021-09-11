
function pageLoaded() {
    const canvas = document.getElementById("testcanvas");
    const context = canvas.getContext("2d");

    context.fillRect(200, 10, 100, 100);
    context.fillRect(50, 70, 90, 30);

    context.strokeRect(110, 10, 50, 50);
    context.strokeRect(30, 10, 50 , 50);

    context.clearRect(210, 20, 30, 20);
    context.clearRect(260, 20, 30, 20);
    context.clearRect(210, 80, 80, 20);


    // Rectangle
    context.beginPath();
    context.moveTo(10, 120);
    context.lineTo(10, 180);
    context.lineTo(110, 150);
    context.fill();

    context.beginPath();
    context.moveTo(140, 160);
    context.lineTo(140, 220);
    context.lineTo(40, 190);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(160, 160);
    context.lineTo(170, 220);
    context.lineTo(240, 210);
    context.lineTo(260, 170);
    context.lineTo(190, 140);
    context.closePath();
    context.stroke();


    context.beginPath();
    // Draw an arc at (400, 50) with radius 40 from 0 to 180 degrees, anticlockwise
    // PI radians = 180 degrees
    context.arc(100, 300, 40, 0, Math.PI, true);
    context.stroke();

    context.beginPath();
    context.arc(100, 300, 30, 0, 2 * Math.PI, true);
    context.fill();

    context.beginPath();
    context.arc(200, 300, 25, 0, 3 / 2 * Math.PI, false);
    context.stroke();


    context.fillText("This is some text...", 330, 40);

    context.font = "10pt Arial";
    context.fillText("This is in 16pt Arial...", 330, 60);

    context.font = "16pt ComicSans";
    context.strokeText("This is stroked in 16pt ComicSans...", 330, 80);


    context.fillStyle = "red";
    context.fillRect(310, 160, 100, 50);
    context.strokeStyle = "green";
    context.strokeRect(310, 240, 100, 50);

    context.fillStyle = "rgb(255, 255, 0)";
    context.fillRect(420, 160, 100, 50);
    context.fillStyle = "rgba(0, 255, 0, 0.6)";
    context.fillRect(450, 180, 100, 50);

    let fireImage = document.getElementById("fire");
    let pattern = context.createPattern(fireImage, "repeat");
    context.fillStyle = pattern;
    context.fillRect(420, 240, 130, 50);


    // context.drawImage(fireImage, 0, 350);
    context.drawImage(fireImage, 0, 400, 100, 25);
    // context.drawImage(fireImage, 0, 0, 60, 50, 0, 420, 60, 50);

    const image = document.getElementById("spaceship");
    context.drawImage(image, 0, 0, 70, 70, 300, 320, 100, 100);
    context.translate(0, 10);
    context.drawImage(image, 0, 0, 70, 70, 370, 320, 100, 100);

    // First: (Load single sprite sheet image)

    // Nine arguments: the element, source (x, y) coordinates,
    // source width and height (for cropping),
    // destination (x, y) coordinates, and
    // destination width and height (resize)

    // context.drawImage(this.spriteImage, this.imageWidth * (imageNumber), 0, this.imageWidth, this.imageHeight, x, y,
    //     this.imageWidth, this.imageHeight);

}
