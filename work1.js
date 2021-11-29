//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
function isPrime(number){
   let total = 0;
    for(let index=2; index<number;index++){
        if(number%index==0){
            total++;
        }
    }if(total==0){
    return true;
}else{
    return false;
}
}

function findPrimes(...numbers){
    for(let i=0; i<numbers.length; i++){
        if(isPrime(numbers[i])){
            console.log(numbers[i] + ": Asal sayıdır.")
        }else{
            console.log(numbers[i] + ": Asal sayı değildir.")
        }

    }
}

findPrimes(4,7,56,9,13)



//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function friend(number){
    let total=0;
    for(let i=0; i<number; i++){
        if(number%i==0){
            total=total+i;
        }
    }return total;
}

function findFriend(number1, number2){
    if(friend(number1) == number2 && friend(number2) == number1){
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
    }else{
        console.log(number1 + " ve " + number2 + " arkadaş sayı değillerdir.")
    }
}

findFriend(220,284)

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumber(number){
    
    for(let i=1; i<number; i++){
        let total=0;
        for(let j=1; j<i; j++){
            if(i%j==0){
                total +=j;
            }
        }
        if(total == i){
            console.log(i + " mükemmel sayıdır.")
        }
    }

}

perfectNumber(1000)


//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
const MAX_NUMBER = 100000

function findPrimes() {
    let total = 1;
    let isPrime = true;
    for (let i = 3; i < MAX_NUMBER; i+=2) {
        isPrime = true;
        for(let x=3; x<i/2; x+=2){ 
            if(i%x==0){
                isPrime = false;
                break;  
            }
        }
        
        if(isPrime){
            console.log(i)
            total++;

        }
    }
    return total;
}

//Çalışma hızı ölçülmüştür ve buna göre optimize edilmiştir.
var startTime = performance.now();

console.log(findPrimes());

var endTime = performance.now();

console.log(`Call to findPrimes took ${endTime - startTime} milliseconds`);

