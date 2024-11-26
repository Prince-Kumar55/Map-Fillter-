// map ,fillter, arrow fnc

// How to write arrow fnc

//Simple way to write function
function sum(a,b){
    return a+b;
};

// Arrow fnc
const sum =(a,b) => {
    return a+b;
};

// This is tottaly different way 

//Simple way to write function

app.get("/", function(req,res) {

});

// Arrow fnc

app.get("/", (req,res) => {

});



const ans = sum(10,6);

console.log(ans);