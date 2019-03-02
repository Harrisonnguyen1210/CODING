'use strict';

const bottles = document.getElementById('bottles');
const chocolate = document.getElementById('chocolate');
const biscuits = document.getElementById('biscuits');
const bottles_piece_p = document.getElementById('bottles_piece');
const bottles_pack_p = document.getElementById('bottles_pack');
const bottles_box_p = document.getElementById('bottles_box');
const chocolate_piece_p = document.getElementById('chocolate_piece');
const chocolate_pack_p = document.getElementById('chocolate_pack');
const biscuits_piece_p = document.getElementById('biscuits_piece');

// JSON data for front-end
const json = {
    "pricelist": [
        {
            "piece": {"name": "Bottle", "quantity": 1, "price": 4.10},
            "pack": {"name": "11-pack", "quantity": 11, "price": 40},
            "box": {"name":  "Big box", "quantity": 264, "price": 950}
        },
        {
            "piece": {"name": "Chocolade bar", "quantity": 1, "price": 300},
            "pack": {"name": "Chocolade pack", "quantity": 5, "price": 1450}
        },
        {
            "piece": {"name": "Biscuit", "quantity": 3, "price": 450}
        }
    ]
};

const bottle_prices = [json.pricelist[0].piece.price, json.pricelist[0].pack.price, json.pricelist[0].box.price];
const chocolate_prices = [json.pricelist[1].piece.price, json.pricelist[1].pack.price];
const biscuit_prices = [json.pricelist[2].piece.price];
const bottle_pieces = [json.pricelist[0].piece.quantity, json.pricelist[0].pack.quantity, json.pricelist[0].box.quantity];
const chocolate_pieces = [json.pricelist[1].piece.quantity, json.pricelist[1].pack.quantity];
const biscuit_pieces = [json.pricelist[2].piece.quantity];

// calculate optimal number of bottles should be bought
const calculateBottle = (n, prices, pieces) => {
    if(n < 1) return [0, 0, 0];
    else {
        const box = Math.floor(n/pieces[2]);
        const pack = Math.floor((n - box*pieces[2])/pieces[1]);
        const piece = n - box*pieces[2] - pack*pieces[1];
        return [piece, pack, box];
    }
};

// calculate optimal number of chocolate should be bought
const calculateChocolate = (n, prices, pieces) => {
    if(n < 1) return [0, 0];
    else {
        const pack = Math.floor(n/pieces[1]);
        const piece = Math.floor((n - pack*pieces[1])/pieces[0]);
        return [piece, pack];
    }
};

// calculate optimal number of biscuits should be bought
const calculateBiscuit = (n, prices, pieces) => {
    if(n < 1) return [0];
    else {
        const piece = Math.floor(n/pieces[0]);
        return [piece];
    }
};

// show result
const calculateUserInput = () => {
    bottles_piece_p.innerText = calculateBottle(bottles.value, bottle_prices, bottle_pieces)[0] + ' bottle(s)';
    bottles_pack_p.innerText = calculateBottle(bottles.value, bottle_prices, bottle_pieces)[1] + ' pack(s)';
    bottles_box_p.innerText = calculateBottle(bottles.value, bottle_prices, bottle_pieces)[2] + ' box(ex)';
    chocolate_piece_p.innerText = calculateChocolate(chocolate.value, chocolate_prices, chocolate_pieces)[0] + ' chocolate bar(s)';
    chocolate_pack_p.innerText = calculateChocolate(chocolate.value, chocolate_prices, chocolate_pieces)[1] + ' chocolate pack(s)';
    biscuits_piece_p.innerText = calculateBiscuit(biscuits.value, biscuit_prices, biscuit_pieces) + ' biscuit piece(s)';
};



