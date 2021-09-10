
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

}
