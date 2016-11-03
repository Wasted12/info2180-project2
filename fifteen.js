var blankX;
var blankY;
var shuff = [];
var pic = "background.jpg";
var rmove = 0;
var dmove = 0;

window.onload = function()
{
    var pieces = document.getElementById("puzzlearea").children;
    arrange(pieces);

    $("#shufflebutton").onclick = reset;
}

function arrange(pieces)
{
    for (var i=0; i<pieces.length; i++)
    {
        pieces[i].className = "puzzlepiece";

        pieces[i].style.top = dmove + "px";
        pieces[i].style.left = rmove + "px";

        rmove += 100;

        if(rmove > 300)
        {
            dmove += 100;
            rmove = 0;
        }

        pieces[i].style.backgroundPosition = "-" + pieces[i].style.left +" " + "-" + pieces[i].style.top;
        piece.style.backgroundImage = "url('./img/"+pic+"')";;
        pieces.style.backgroundSize = "400px 400px";
    }
}

function shuffle(nums)
{
    for (var i=0; i<nums.length;i++)
    {
        var rnum = Math.floor(Math.random()*i);    
        for(var x=0; x<nums.length; x++)
        {
            shuff.push(rnum);
        }
    }
    return shuff;
}

function reset()
{
    arrange(shuff);

    shuff[i].onmouseover = function()
    {
        if(moves(this.style.left,this.style.top)===true)
        {
                this.classList.add("moveablepiece");
        }
    }

    shuff[i].onmouseout = function()
    {
        this.classList.remove("moveablepiece");
    }

    shuff[i].onmousedown = function()
    {
        if(moves(this.style.top, this.style.left))
        {
            var change = swap(this.style.top, this.style.left);
            this.style.top = change[0];
            this.style.left = change[1];
        }
    }

}
    
function swap(top, left)
{
    var temp = left;
    left = blankX;
    blankX = temp;

    var temp = top;
    top = blankY;
    blankY = temp;
}

function moves(top, left)
{
    x = parseInt(top);
    y = parseInt(left);

    var movable = false;

    if(x+100 === rmove && y===dmove)
    {
        movable = true;
    }
    if(x-100 === rmove && y===dmove)
    {
        movable = true;
    }
    if(x === rmove && y-100 === dmove)
    {
        movable = true;
    }
    if(x === rmove && y+100 === dmove)
    {
        movable = true;
    }

    else
    {
        movable = false;
    }

    return movable;
}