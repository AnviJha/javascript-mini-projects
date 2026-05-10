let url="http://universities.hipolabs.com/search?country=";

let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;

    console.log(country);

    changeBackground(country);

    let college= await getColleges(country);

    console.log(college);

    show(college);
});

//to print the list of colleges
function show(college){

    let list=document.querySelector("#list");

    list.innerHTML="";

    // object for grouping states
    let states={};

    // group colleges by state
    for(let col of college){

        let state=col["state-province"];

        // if null
        if(state===null){
            state="Other";
        }

        if(states[state]){
            states[state].push(col);
        }
        else{
            states[state]=[col];
        }
    }

    // sort state names
    let sortedStates=Object.keys(states).sort();

    // display
    for(let state of sortedStates){

        // state heading
        let heading=document.createElement("h2");

        heading.innerText=state;

        list.appendChild(heading);

        // sort colleges alphabetically
        states[state].sort((a,b)=>{
            return a.name.localeCompare(b.name);
        });

        // display colleges
        for(let col of states[state]){

            let li=document.createElement("li");

            let a=document.createElement("a");

            a.innerText=col.name;

            a.href=col.web_pages[0];

            a.target="_blank";

            li.appendChild(a);

            list.appendChild(li);
        }
    }
}
//enter press input 
let input=document.querySelector("input");
input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        btn.click();
    }
});

async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(e) {
        console.log("error : ",e);
        return [];
    }
}

//this api change the background statci university library pic 
function changeBackground(country){

    let imageUrl=
    `https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80`;
    document.body.style.backgroundImage=
    `linear-gradient(rgba(0,0,0,0.45),
    rgba(0,0,0,0.45)),
    url("${imageUrl}")`;
}