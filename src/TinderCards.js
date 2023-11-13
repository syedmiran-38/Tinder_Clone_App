import React,{useState} from 'react'
import "./TinderCards"
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:"Elon Musk",
            url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FElon_Musk&psig=AOvVaw0zCOzEAjYTgW81OY5OacPl&ust=1603977333133000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjS2quv1-wCFQAAAAAdAAAAABAD"
        },
        {
            name:"Jeff Bezos",
            url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fprofile%2Fjeff-bezos%2F&psig=AOvVaw0_T-eWp9P4vSq358jgarmo&ust=1603977722604000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjtseWw1-wCFQAAAAAdAAAAABAD"
        }
    ]);

    const swiped = (direction,nameToDelete)=>{
        console.log("removing"+nameToDelete)
        // setLastDirection(direction);
    }
    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person)=>(
               <TinderCard
               className="swipe"
               key={person.name}
               preventSwipe={["up","down"]}
               onSwipe={(dir)=>swiped(dir,person.name)}
               onCardLeftScreen={()=>outOfFrame(person.name)}
               >
                <div style={{backgroundImage:`url(${person.url})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
               </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
