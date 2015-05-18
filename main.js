var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);

var dough = 0;

function buydough(){
    var doughCost = Math.floor(20 * Math.pow(1.1,dough));     
    if(cookies >= doughCost){                                   
        dough = dough + 1;                                   
    	cookies = cookies - doughCost;                          
        document.getElementById('dough').innerHTML = dough;  
        document.getElementById('cookies').innerHTML = cookies;  
    };
    var nextCost = Math.floor(20 * Math.pow(1.1,dough));       
    document.getElementById('doughCost').innerHTML = nextCost;  
};

window.setInterval(function(){
	
	cookieClick(dough);
	
}, 990);

var worker = 0;

function buyworkers(){
    var workerCost = Math.floor(40 * Math.pow(1.1,worker));     
    if(cookies >= workerCost){                                   
        worker = worker + 1;                                   
    	cookies = cookies - workerCost;                          
        document.getElementById('worker').innerHTML = worker;  
        document.getElementById('cookies').innerHTML = cookies;  
    };
    var nextCost = Math.floor(40 * Math.pow(1.1,worker));       
    document.getElementById('workerCost').innerHTML = nextCost;  
};

window.setInterval(function(){
	
	cookieClick(worker);
	
}, 970);

var alter = 0;

function buyalters(){
    var alterCost = Math.floor(100000 * Math.pow(1.1,alter));     
    if(cookies >= alterCost){                                   
        alter = alter + 1;                                   
    	cookies = cookies - alterCost;                          
        document.getElementById('alter').innerHTML = alter;  
        document.getElementById('cookies').innerHTML = cookies;  
    };
    var nextCost = Math.floor(100000 * Math.pow(1.1,alter));       
    document.getElementById('alterCost').innerHTML = nextCost;  
};

window.setInterval(function(){
	
	cookieClick(alter);
	
}, 60);