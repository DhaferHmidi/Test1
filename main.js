


function square (x){
	return x*x
}
function square1(x){
	return x*x;
}
function square2(x){
	return x*x;
}
function square3(x){
	return x*x;
}


function cube(x){
	return x*x*x;
}
function fullname(name,lastname) {
		
	return (name+' ' +lastname);
	}
function average (a,b){
	return (a+b)/2;
}
function greeter(name){
	return 'hello '+ name;
}
function favouriteFood(word){
	return 'MY favourite food is '+ word ;
}
///////////////////////////////////////////////////////////////////////////////////


function oldEnoughToDrive(age) {
	if(age>= 16){
		return true;
	}
	return false; 
    }
    function sameLength(word1, word2){
    	var word1=word1 . length 
    	var word2=word2 . length
    	if(word1 === word2 ){
    		return true ;
    }
    	return false ;
    }
    function passwordLongEnough(password){
    	var password=password . length

    if (password>= 12){
    	return true;
    }
        return false ;
    }
    function rentalCar (name,age ){
    	if ( age >= 21 ){
    	return name +' have fun driving' ;
         
    }
   	 return name+' you cannot have the keys';
   	}
    
    
    
    function max(x,y){
    	if (x>y){
    		return x ;

    }
    else if (x<y){
    	return y ;
    }
    else{
    	return 'they have the same value';
    }
    }
    function min(a,b){
    	if (a>b){
    		return b;
    }
   
    	else if (a<b){
    		return a 
    }
    	else {
    		return 'they have the same value;'
    }
    }
    function larger(w1,w2){
    if(w1.length<w2.length){
    	return w2;
    }
    else if(w1.length>w2.length) {
    	return w1 ;
    }
    else
    	{ return 'they have the same length';
     }
     }
     function smaller(wo1,wo2){
     	if(wo1.length<wo2.length){
     		return wo1 ;
     	}
     	else if (wo1.length>wo2.length){
     		return wo2;
     	}
     	else {
             return 'they have the same length';
     }
     }
     function even (men){
     	if (men%2===0){
     		return true ;
     }
      {
      	return false;
     }
     }
     function odd (menb){
     	if (menb%2 !== 0){
     		return true;
     	}
     	{return false ;
     }
     }
     function positive(meb){
     	if(meb >=0){
     		return true;
     	}

     	return false;
     }

     function positive2(num){
     	return num >=0;
     }
function negativee(menb){
	return ! positive2(menb);
}
function randInt(n){
	return  Math.random()* (n-1) ;
}
function weather(temperature){
	if(temperature <= 26){
		return 'it is cold today';
	}
	return 'it is warm today';
}
function dog(wghte){
	if(wghte<=16){
		return 'it is a french bulldog';
	}
	return 'it is a boston terrier';
}
function scorToGrade (m1,m2){
	var a = (m1  + m2)

	if (a >= 30) {
		return 'A' ;
	}
	else if (a>100 || a <0 ){
		return 'INVALID SCORE';
	}
       return 'B';
}
function counter(mb){
	var mb;{
		return (mb+1);
	}
}
function guessMyNumber(sa){
	
	if (sa>5){
		return"out of bounds !Please try another number";
	}else if (sa === randInt(5)){
		return "you guessed my number";
	}
	return "nope! That wasn't it";
}

    

	

