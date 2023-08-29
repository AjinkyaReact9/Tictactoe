let flag = true;
let value = [1,0,1,0,1,0,0,1,0]
let player1count = 0;
let player2count = 0;
let winnerIndex = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let p1;
let p2;
document.querySelector('.page2').style.display = 'none';


document.querySelector('.main').addEventListener('click', function(e)
{
    var index = e.target.id;
    if(value[index]== 1 || value[index]== 0)
    {
        e.target.innerHTML = getVal()
        value[index] = getVal()
        flag = !flag
        getWinner();
    }
    else{
        alert('not allowed')
    }
    
    console.log(getVal());
});

 

function getVal()
{
    return (flag)? 'X' : 'O';
    
}

function getWinner()
{
    for(let i=0; i < winnerIndex.length; i++)
    {
        let  [a,b,c] = winnerIndex[i];
        if(value[a]==value[b] && value[b]==value[c])
        {
            getScore(a,b,c);
            

            break;
            
        }
        
    }
    
}

function getScore(x,y,z)
{
    if (flag)
    {
        player2count++;
        document.querySelector('.Pl2').innerHTML = player2count
        alert(document.querySelector('.Player2').innerHTML + ' is winner')
    }
    else
    {
        player1count++;
        document.querySelector('.Pl1').innerHTML = player1count
        alert(document.querySelector('.Player1').innerHTML + ' is winner')
    }
    document.getElementsByClassName('box')[x].style.backgroundColor = 'orange';
    document.getElementsByClassName('box')[y].style.backgroundColor = 'orange';
    document.getElementsByClassName('box')[z].style.backgroundColor = 'orange';
    value=[];
    flag = true;
}

// document.querySelector('.newReset').addEventListener('click', function()
function Reset()
{
    var divs = document.querySelectorAll('.box')
    for (let i=0; i < divs.length; i++)
    {
        divs[i].innerHTML = '';
        divs[i].style.backgroundColor = 'grey';
    }
    value = [1,0,1,0,1,0,0,1,0]
    flag =true;
}

document.querySelector('.newRestart').addEventListener('click', function()
{
    
    document.querySelector('.page1').style.display = 'block';
    document.querySelector('.page2').style.display = 'none';
    
    var divs = document.querySelectorAll('.box')
    for (let i=0; i < divs.length; i++)
    {
        divs[i].innerHTML = '';
        divs[i].style.backgroundColor = 'grey';
        p1.value= '';
        p2.value = '';
        document.querySelector('.Pl1').innerHTML = 0;
        document.querySelector('.Pl2').innerHTML = 0;
    }
    // var div1 = document.querySelectorAll('.box')
    // let player1 = document.querySelector('.Player1')
    // let player2 = document.querySelector('.Player2')
    // let pl1 = document.querySelector('.Pl1')
    // let pl2 = document.querySelector('.Pl2')
    // let p1 = document.querySelector('.p1')
    // let p2 = document.querySelector('.p2')
    // for (let i=0; i < div1.length; i++)
    // {
    //     div1[i].innerHTML = '';
    //     player1.innerHTML = 'Player 1';
    //     player2.innerHTML = 'Player 2';
    //     pl1.innerHTML= '0';
    //     pl2.innerHTML = '0';
    //     p1.value= '';
    //     p2.value = '';
    // }
    value = [1,0,1,0,1,0,0,1,0]
    flag =true;

    
})

document.querySelector('.start').addEventListener('click', function()
{
    p1 = document.querySelector('.p1').value;
    p2 = document.querySelector('.p2').value;
    document.querySelector('.p1').value = '';
    document.querySelector('.p2').value = '';
    if(p1 == '' || p2 == '')
    {
        alert('Please Enter Player Name');
        
    }
    else
    {
        document.querySelector('.Player1').innerHTML = p1;
        document.querySelector('.Player2').innerHTML = p2;
        document.querySelector('.page2').style.display = 'inline';
        document.querySelector('.page1').style.display = 'none';
    }
    
})