// dummy variables to solve task 1
const n = 1000;
const prices = [4.1, 40, 950];
const pieces = [1, 11, 11*24];

// function to maximally save buyer’s money
const calculate = (n, prices, pieces) => {
    if(n < 1) console.log('Number of bottles should be larger than 0');
    else {
        const box = Math.floor(n/pieces[2]);
        const pack = Math.floor((n - box*pieces[2])/pieces[1]);
        const bottle = n - box*pieces[2] - pack*pieces[1];
        console.log([bottle, pack, box]);
        return [bottle, pack, box];
    }
};

// execute function
calculate(n, prices, pieces);
