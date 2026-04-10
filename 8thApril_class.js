

hello=()=>{console.log("Hello")}

hello();

const sub=(a,b)=> console.log("array function",a-b)
sub(10,12)


// sub(20, 10);

// const sub=(a,b)=>  console.log("SUB", a-b);


function classA(strength){
    console.log("",strength );
}

function school(callback){
    callback("50");
}

school(classA);


function familyDetails(totalCount){


    console.log();
}

familyJourney();


function familyJourney(){

    let family = ["Suzuki"];

            marriage(family,  function(fam1){

        console.log("Inside callback:", fam1);
            });
}

function marriage(family, callback)  {

    family.push("Maruti");

    console.log("beforecallback", family);

    callback(family);

    console.log("AfterCallback", family);

}


sayHello();

function sayHello(){

console.log("helloooo", "Hello World")

    setTimeout(()=>{

    console.log("Say HELLO");

    }, 2000);



}