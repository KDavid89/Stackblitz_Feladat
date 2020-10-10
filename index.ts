// Import stylesheets
import './style.css';
import { Animal } from './Animal';
import { name } from './Animals.const';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


let allatok: Animal[]=[];

for(let i=0;i<50; i++)
{
let animal: Animal={
  name: RndName(),
  legsCount: RndNumber(1,4),
  isMammal: Math.random()>0.5
}
allatok.push(animal);
}

function RndName(): string {
  let randomnumber= RndInt(0, name.length);
  return name[randomnumber];
}

function RndInt( min: number, max: number): number {
      return Math.floor(Math.random()*(max-min))+min;
    }

function RndNumber( min: number, max: number): number {
      return Math.floor(Math.random()*(max-min))+min;
    }

let i=1;
allatok.forEach(x=>{
  let p: HTMLParagraphElement=document.createElement("p");
  
  
  
  p.innerHTML=`${i} - ${x.name} - ${x.legsCount} - <input type=checkbox ${x.isMammal ? "checked" : ""}>`;
  
  if(i%2==0){
    p.style.fontWeight="700";
  }
  
  document.body.appendChild(p);
  i++;
});
