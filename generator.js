function fibonacciGenerator (n) {
    var fibonacci = [];
    if (n <= 3) {
        forOneToThree(n);
    }
    else if (n > 3) {
        fibonacci = [0, 1, 1];
        for (var i = 0; i <= n - 4; i++) {
            calculate(n);  
        }
        }
    return(fibonacci);
            



    
function calculate(n) {
            var finalNumber;
            var lastElement = fibonacci[fibonacci.length - 1];
            var lastSecondElement = fibonacci[fibonacci.length - 2];
            finalNumber = lastElement + lastSecondElement;
            fibonacci.push(finalNumber);
            return (finalNumber);   
    
}

function forOneToThree(n) {
    if (n == 1) {
        fibonacci = [0];
    }
    else if (n == 2) {
        fibonacci = [0, 1];
    }
    else if (n == 3) {
        fibonacci = [0, 1, 1];
    }
    else {
        fibonacci == [0, 1, 1];
    }
    
}
}

fibonacciGenerator();
