import React,{Component} from 'react'
import ListItem from './ListItem'
import Mandje from './Mandje'
import "./list.css"
import InputField from './InputField' 

class List extends Component
{
   constructor(){super()
                 this.state={groceryItems:[{id:1,
                                            titel:"Rijst"},
                                           {id:2,
                                            titel:"Aardappelen"},
                                           {id:3,
                                            titel:"Melk"},
                                           {id:4,
                                            titel:"mango's"}
                                        ],
                              winkelMandje:[],
                              nieuwItem : "" 
                                      }
                  this.clickItem=this.clickItem.bind(this)
                  this.leegWinkelmand=this.leegWinkelmand.bind(this)
                  this.voegItemToe=this.voegItemToe.bind(this)
                }


   leegWinkelmand()
   {
     this.setState({winkelMandje:[]})
   }

   voegItemToe()
   { let nieuwItem=document.getElementById("nieuwItem")
     let waarde=nieuwItem.value 
     if (waarde){ 
          let nieuwId=this.state.groceryItems.length+1
          let nieuwLijstje=this.state.groceryItems 
          nieuwLijstje[nieuwId-1]={id:nieuwId,titel:waarde}
          this.setState({groceryItmes:nieuwLijstje})
          nieuwItem.value=""
        }
     else alert("Om een item toe te voegen moet je wel wat invullen")
   }

   clickItem(id)
   { const boodschapItem=this.state.groceryItems[id-1]
     let aangepastWinkelmandje=this.state.winkelMandje;
     aangepastWinkelmandje.push(boodschapItem)
     this.setState({winkelMandje:aangepastWinkelmandje})
   }

   render(){
       let groceryItems2=this.state.groceryItems.map(element => 
                   <ListItem key={element.id} item={element} clickItem={this.clickItem} className="list-item"/> )
       let winkelMandje2=this.state.winkelMandje.map(element =>
                   <Mandje key={element.id} item={element} className="mandje-item"/>)
       return ( <div>
                   <h1 className="algBoodschap">Boodschappenlijst</h1>
                   <div className="lijstjes">
                      <div className="lijstje">
                        <h1>Boodschappenlijst</h1>
                        <InputField voegItemToe={this.voegItemToe}/> 
                        <ul >
                          {groceryItems2}
                        </ul>
                      </div> 
                      <div className="lijstje">
                        <h1>Winkelmandje</h1>
                        <button onClick={this.leegWinkelmand}>Leeg de winkelmand</button>
                        <ul id="winkelmandje">
                            {winkelMandje2} 
                        </ul>
                      </div>
                   </div> 
               </div> 
       )
   }
}

export default List 