// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}

// Initialize first row
function fill_first( ctx )
{
    ctx.save();
    let p1 = new Path2D();
    p1.rect(190,0,10,10);
    ctx.fill(p1);
    ctx.restore();
}

// Process and fill next row
function fill_rows( ctx )
{
    let _width = 390;
    let _height = width;
    let tempy = 0;
    ctx.save();
    for(var it = 0; it <= _width; it += 10)
    {
        if(it == 0)
        {
            var leftpoint = false;
            if(!ctx.IsPointInPath(it+5,tempy +5))
            {
                let p = new Path2D;
                p.rect(it,tempy,10,10);
                ctx.fill(p);
            }
        }
    }
}