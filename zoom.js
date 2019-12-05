window.onload = function(){
    window.scrollTo(875,625);
};
window.onbeforeprint = function(){
    window.scrollTo(875,625);
};

const vis= document.querySelector('#vision');
let scale = 1, lastWidth = 2750, lastHeight = 1650,
tranX = 0, tranY = 0, 
winWidth = window.screen.availWidth , winHeight = window.screen.availHeight, timeStamp = 0;
vis.addEventListener('mousewheel', function(e){
    if(Date.now() - timeStamp < 300) return;
    timeStamp = Date.now();
    let lastScale = scale;
    if(e.wheelDelta>0){
        scale += 0.2;
        scale = Math.min(2.5,scale);
    }else if(e.wheelDelta<0){
        scale -= 0.2;
        scale = Math.max(scale,0.3);
    }
    // lastWidth *= scale;
    // lastHeight *= scale;
    // tranX += (0.5 - e.screenX/winWidth)*((scale - lastScale)*lastWidth)*0.2;
    // tranY += (0.5 - e.screenY/winHeight)*((scale - lastScale)*lastHeight)*0.2;
    // this.style.transform = `scale(${scale}) translate(${tranX}px, ${tranY}px)`;
    this.style.transform = `scale(${scale})`;
})

//原生拖拽
// let winX, winY;
// function movePage(e){
//     let targetX =  window.scrollX - (e.clientX - winX)/50,
//         targetY =  window.scrollY - (e.clientY - winY)/50;
//     window.scroll(targetX, targetY);
// }
// const body = document.querySelector('body');
// body.addEventListener('mousedown', function(e){
//     winX = e.clientX, winY = e.clientY;
//     body.addEventListener('mousemove', movePage);
// })
// body.addEventListener('mouseup', function(){
//     body.removeEventListener('mousemove', movePage, false);
// })