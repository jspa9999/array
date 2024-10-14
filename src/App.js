import logo from './logo.svg';
import './App.css';

function App() {

   let charactersOfDoremon = ["Doremon","Nobitha","Takeshi","Shizuka","Suneo","Dorami","Jaiko","Goda","Miyoko","Morino",
    "Pisuke","Jaiko","Pappi","Lully","Chammy","sobi","Dorami"]

    return (
      <div className="App">
        <h1> Propertis and Methods </h1>
       <button type="button" onClick = {()=>{
             console.log(charactersOfDoremon.length);
            
             for (let i=0; i<charactersOfDoremon.length;i++){
              console.log(charactersOfDoremon.at(i));
             }  

       }}>length</button>  
       <button type="button" onClick = {()=>{
        console.log(charactersOfDoremon);
        console.log (charactersOfDoremon.toString());
        console.log(charactersOfDoremon.join("|"));
       }}>toString</button>  


       <button type="button" onClick = {()=>{
        console.log(charactersOfDoremon);
        delete charactersOfDoremon[10];
        console.log(charactersOfDoremon);
       }}>delete</button>  


       <button type="button" onClick = {()=>{
        console.log(charactersOfDoremon);
        charactersOfDoremon.pop();
        console.log(charactersOfDoremon);
       }}>pop</button>  


       <button type="button" onClick = {()=>{
         console.log(charactersOfDoremon);
         charactersOfDoremon.shift();
         console.log(charactersOfDoremon);
       }}>shift</button>  

       <button type="button" onClick = {()=>{
        console.log(charactersOfDoremon);
        charactersOfDoremon.push("Haribo");
        console.log(charactersOfDoremon);
       }}>push</button>  


       <button type="button" onClick = {()=>{
        console.log(charactersOfDoremon);
        charactersOfDoremon.unshift("Mejina");
        console.log(charactersOfDoremon);
       }}>unshift</button>  


       <button type="button" onClick = {()=>{
        console.log(charactersOfDoremon);
        charactersOfDoremon.splice(charactersOfDoremon.length-2,0,"peko","chan",); 
        console.log(charactersOfDoremon);
       }}>splice</button>  


       <button type="button" onClick = {()=>{
        let fruits = ["Apple","orange","watermelon"]
        let veggies = ["onion","tomato","potato"]

        let treeProducts = veggies.concat(fruits);

        let treeProducts1 = [...veggies,...fruits]
        console.log(fruits);
        console.log(veggies);
        console.log(treeProducts);
       }}>concat</button>  
       <button type="button" onClick = {()=>{
        
        let tollywoodActors =["Anushka","Prabhas","pspk"] 

        let bollywoodActors = ["salman khan","sharukh khan","aishwarya rai"]

        let sandalwoodActors =["puneeth","yash","rashmika"]

        let actors = [tollywoodActors,bollywoodActors,sandalwoodActors]

        let actors2 = actors.flat();

          console.log(actors);
          console.log(actors2);

       }}>flat</button>  
       <button type="button" onClick = {()=>{

       let slicedArray= charactersOfDoremon.slice(5,11);
       console.log(charactersOfDoremon);
       console.log(slicedArray);
       }}>slice</button>  


       <button type="button" onClick = {()=>{

       let newArray= charactersOfDoremon.fill("dore",5,12)
       console.log(newArray);
       }}>fill</button>  


       <button type="button" onClick = {()=>{
        console.log(Array.from("AEIOU"));
       }}>from</button>  


       <button type="button" onClick = {()=>{
         console.log(charactersOfDoremon.includes("Suneo"));
       }}>includes</button> 


       <button type="button" onClick = {()=>{
        console.log(charactersOfDoremon.indexOf("Lully"));
        console.log(charactersOfDoremon.indexOf("Doremon"));
        console.log(charactersOfDoremon.lastIndexOf("Jaiko"))
       }}>indexOf</button>  


       <button type="button" onClick = {()=>{
       console.log(charactersOfDoremon.indexOf("Dorami"));
       console.log(charactersOfDoremon.lastIndexOf("Dorami"));
       }}>lastIndexOf</button>  


       <button type="button" onClick = {()=>{

        console.log(charactersOfDoremon);
        charactersOfDoremon.reverse();
        console.log(charactersOfDoremon);
       }}>reverse</button>  

       <button type="button" onClick = {()=>{
        console.log(Array.isArray("abc"));
        console.log(Array.isArray("true"));
        console.log(Array.isArray("156"));
        console.log(Array.isArray([1, 7, 9]));
       }}>isArray</button>  


       <button type="button" onClick = {()=>{

        charactersOfDoremon.forEach((ele,i)=>{
          console.log(`${i}--->${ele}`);
        })
       }}>forEach</button> 


       <button type="button" onClick = {()=>{
         
         let sreeMarks =[77,98,56,78,56,78];
         let passMarks = 35;

        let result = sreeMarks.every((ele,i)=>{
          return ele>=passMarks;
        })

        if (result == true) {
          console.log("student passed in tenth");
        }else{
          console.log("student failed in tenth");
        }
       }}>every</button>  


       <button type="button" onClick = {()=>{
        let sreeMarks =[77,98,56,78,56,78,89,67,75,56,45,89,45,67,65,90,98,97];
        let passMarks = 35;

        let filteredArray = sreeMarks.filter((ele,i)=>{
        return ele<70;
        
       })

         console.log(filteredArray);

       }}>filter</button>  


       <button type="button" onClick = {()=>{

        let marks = [89,67,54,67,78,65,98,97,78,67,58,94,78,83,90]

           
        let result= marks.find((ele,i)=>{
        return ele >80;

        })
        console.log(result);
       }}>find</button>  

        <button type="button" onClick = {()=>{
           let marks = [89,67,54,67,78,65,98,97,78,67,58,94,78,83,90]

           
           let result= marks.findIndex((ele,i)=>{
           return ele >90;
   
           })
           console.log(result);
          }}>findIndex</button>  
   

       <button type="button" onClick = {()=>{
         let marks = [89,67,54,67,78,65,98,97,78,67,58,94,78,83,90]

         let  totalMarks = marks.reduce((ele, total)=>{

          return (total+=ele);
         })
         console.log(totalMarks);
       }}>reduce</button>  


       <button type="button" onClick = {()=>{
         let marks = ["A","E","I","O","U"]

         let  totalMarks = marks.reduce((ele, total)=>{

          return (total+=ele);
         })
         console.log(totalMarks);

       }}>reduceRight</button>  


       <button type="button" onClick = {()=>{

        let marks = [56,78,43,78,89,87,56,887,90]
        marks.sort((a,b)=>{return a-b});
        
        console.log(marks);
        marks.reverse();
        console.log(marks);

       }}>sort</button> 


       <button type="button" onClick = {()=>{
        
        let freedomFightersOfIndia = ["APJ Abdul Kalam", "Jawaharlal Nehru","Sarojini Naidu","Swami Vivekananda"]

       let newArray = freedomFightersOfIndia.map((ele,i)=>{

        return `Shri.${ele}`;
       })
        console.log(freedomFightersOfIndia);
        console.log(newArray);
       }}>map</button>
        
       <button type="button" onClick = {()=>{
        let marks = [67,89,54,73,82,91,80]

        let newMarks = marks.map((ele,i)=>{
          return ele+5;
        })
        console.log(marks);
        console.log(newMarks);
       }}>map</button> 

       <button type="button" onClick = {()=>{}}></button>  

      </div>
      
     );
    }
export default App;
