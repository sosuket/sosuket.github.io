

function main() {

    const elem = document.getElementById("wave-animation");
    const ctx = elem.getContext("2d");

    var dpr = window.devicePixelRatio;
    var rect = elem.getBoundingClientRect();
    elem.width = rect.width * dpr;
    elem.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = elem.width / dpr;
    const h = elem.height / dpr;
    draw(ctx, w, h, 0);
}

function draw(ctx, w, h, d) {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    ctx.beginPath();

    const bx = 0;
    const by =  h / 2;
    //
    ctx.strokeStyle = "#757575";
    ctx.moveTo(bx, by);
    const dist = Math.PI * 2.5;
    const dx = dist / w;
    for(let i = 0.0; i <= w; i++) {
        const x = bx + i;
        const y = by + Math.sin(i * dx + d) * 20 + Math.cos(i * dx / 2) * 8;
        ctx.lineTo(x, y);   
    }
    ctx.lineTo(w, h / 2);
    ctx.stroke() ;
    //
    ctx.beginPath();
    ctx.strokeStyle = "#aeaeae";
    ctx.moveTo(bx, by);
    for(let i = 0.0; i <= w; i++) {
        const x = bx + i;
        const y = by + Math.cos(i * dx + d * 1.5 * Math.PI) * 16 + Math.sin(i * dx) * 10;
        ctx.lineTo(x, y);   
    }
    ctx.lineTo(w, h / 2);
    ctx.stroke() ;
    setTimeout(() => {draw(ctx, w, h, d + 0.01);}, 20);
}
main();