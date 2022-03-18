
playing  = true;

function verify(num){
    return (num == 3 || num == 2 || num ==1); 
}

while (playing==true){
    level = 0;
    answer = -1;
    tries = 0;
    i=1;
    target = 1 + Math.floor(10*Math.random());
    while(!verify(level)){
        console.log(level);
        level = prompt("Donner le niveau :\n1->10 essais(newbie)\n2->5 essais(medium) \n3-> 3essais(levelGod) ");
    }
    if(level ==1){
        tries =10;
    }
    else if(level ==2){
        tries =5;
    }
    else if(level ==3){
        tries =3;
    }
    console.log(tries);
    while(answer != target){
        answer = prompt("ESSAI N:"+i+" :");
        tries--;
        i++;
        if(tries<1){
            break;
        }
    }
    if(answer == target){
        alert("Congrats ! You made it <3 ");
    }
    else{
        alert("Next time ya noob :p");
    }
    replay = prompt("Do you want to retry Y/N ?");
    if (replay == 'N' || replay == 'n'){
        break;
    }

}
alert("Thanks for playing <3");