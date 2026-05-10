let img = document.querySelector("#final");

let buttons = document.querySelectorAll(".btn");

let factBtn = document.querySelector("#factBtn");

let result = document.querySelector("#result");

let correctBreed = "";

const breeds = [
    "husky",
    "pug",
    "beagle",
    "boxer",
    "dalmatian",
    "labrador",
    "bulldog",
    "pomeranian"
];


// LOAD NEW DOG QUESTION
async function loadDog(){

    try{

        // remove old colors
        buttons.forEach((btn)=>{
            btn.classList.remove("correct");
            btn.classList.remove("wrong");
        });

        result.innerText = "";

        // choose random correct breed
        correctBreed =
        breeds[Math.floor(Math.random()*breeds.length)];

        // fetch dog image
        let url =
        `https://dog.ceo/api/breed/${correctBreed}/images/random`;

        let res = await fetch(url);

        let data = await res.json();

        // set image
        img.src = data.message;

        // create options array
        let options = [correctBreed];

        while(options.length < 4){

            let randomBreed =
            breeds[Math.floor(Math.random()*breeds.length)];

            if(!options.includes(randomBreed)){
                options.push(randomBreed);
            }
        }

        // shuffle options
        options.sort(()=>Math.random()-0.5);

        // set button text
        buttons.forEach((btn,index)=>{
            btn.innerText = options[index];
        });

    }
    catch(err){

        result.innerText =
        "Could not load dog image.";

        console.log(err);

    }

}


// CHECK ANSWER
buttons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        if(btn.innerText === correctBreed){

            btn.classList.add("correct");

            result.innerText =
            "Correct Answer ✅";

            setTimeout(()=>{
                loadDog();
            },1000);

        }
        else{

            btn.classList.add("wrong");

            result.innerText =
            `Wrong Answer ❌ Correct Breed: ${correctBreed}`;

        }

    });

});


// FETCH DOG FACT FROM API
// FETCH DOG FACT

factBtn.addEventListener("click", async ()=>{

    try{

        result.innerText = "Loading fact...";

        let res = await fetch(
            "https://dogapi.dog/api/v2/facts"
        );

        let data = await res.json();

        result.innerText =
        data.data[0].attributes.body;

    }
    catch(err){

        console.log(err);

        result.innerText =
        "Could not fetch fact.";

    }

});
// factBtn.addEventListener("click",async () =>{
//     let fact=await getFacts();
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// });

// let url="https://some-random-api.com/animal/dog";

// async function getFacts() {
//     try {
//         let res=await axios.get(url);
//         return res.data.fact;
//     }catch(e) {
//         console.log("error -",e);
//         return "No fact found";
//     }
// }


// INITIAL LOAD
loadDog();