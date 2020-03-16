window.onload = function () {
    window.scrollTo(875, 625);
};
window.onbeforeprint = function () {
    window.scrollTo(875, 625);
};
const vis = document.querySelector('#vision');
let scale = 1, lastScale = 1, lastTimeStamp = 0;
vis.addEventListener('mousewheel', function (e) {
    if (Date.now() - lastTimeStamp < 75) return;
    lastTimeStamp = Date.now();
    if (e.wheelDelta > 0) {
        scale += 0.2;
        scale = Math.min(2.6, scale);
    } else if (e.wheelDelta < 0) {
        scale -= 0.2;
        scale = Math.max(scale, 0.2);
    }
    if (scale === lastScale) return;
    lastScale = scale;
    this.style.transform = `scale(${scale})`;
})