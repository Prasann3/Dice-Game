
const player_1=document.querySelector('.player--0');
const player_2=document.querySelector('.player--1');
const roll_button=document.querySelector('.btn--roll');
const hold_button=document.querySelector('.btn--hold');
const new_button=document.querySelector('.btn--new');
const dice_img=document.querySelector('.dice');
let random_roll=function(){
    let dice=Math.round(6*Math.random());
    if(dice==0)dice=1;
    if(dice==1)return 6;
    // if(Math.round(6*Math.random())<=1)dice=1;
    return dice;
}

roll_button.addEventListener('click',function(){
    let dice_number=random_roll();
    let dice_src=`dice-${dice_number}.png`;
     dice_img.src=dice_src;
     const player=document.querySelector('.player--active');
     let play1=player_1.classList.contains('player--winner');
     let play2=player_2.classList.contains('player--winner');
     if(play1 || play2)return;
     let current_score=Number(player.querySelector('.current-score').textContent);

     if(dice_number!=1){
        current_score+=dice_number;
        player.querySelector('.current-score').textContent=current_score;
     }
     else{
        current_score=0;
        player.querySelector('.current-score').textContent=current_score;
        player_1.classList.toggle('player--active');
        player_2.classList.toggle('player--active');
     }
     
    
});

hold_button.addEventListener('click',function(){
    let play1=player_1.classList.contains('player--winner');
    let play2=player_2.classList.contains('player--winner');
    if(play1 || play2)return;
    const player=document.querySelector('.player--active');
    let current_score=Number(player.querySelector('.current-score').textContent);
    let player_score=Number(player.querySelector('.score').textContent);
    player_score+=current_score;
    current_score=0;
    player.querySelector('.current-score').textContent=current_score;
    player.querySelector('.score').textContent=player_score;
 
    if(player_score>=100){
        player.classList.add('player--winner');
        dice_img.style.display='none';
        return;
    }


    player_1.classList.toggle('player--active');
    player_2.classList.toggle('player--active');
});

new_button.addEventListener('click',function(){
    player_1.classList.remove('player--winner');
    player_2.classList.remove('player--winner');
    player_2.classList.remove('player--active');
    player_1.classList.add('player--active');
    player_1.querySelector('.current-score').textContent=0;
    player_1.querySelector('.score').textContent=0;
    player_2.querySelector('.current-score').textContent=0;
    player_2.querySelector('.score').textContent=0;
    dice_img.style.display='block';
})