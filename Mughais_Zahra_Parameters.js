function greet(name){
    console.log('good day, '+ name + '!');
}

greet('Anakin');

//Level 2: Further customize your function by including the time of day in your greeting.

function greetByTheTime(name,timeOfDay){
    console.log('good ' + timeOfDay + ', '+ name + '!');
}

greetByTheTime('Anakin','Morning');

//You and Count Dooku have beef. Further customize your code to to say, "I'm coming for you, Dooku!" 
//if your function is called with "Count Dooku".

function greetSpecial(name){
    if (name == 'Count Dooku'){
        console.log('I\'m coming for you, Dooku!');
    } else {
        console.log('good Day, '+ name + '!');
    }
}

greetSpecial('Count Dooku');
greetSpecial('Zahra');