import React, {Component} from "react"
import Card from "../Card" 
import PlaySpace from "../PlaySpace" 
import "./cardDeck.css"

export default class cardDeck extends Component{
	cards = [
		"AC","AD","AH","AS",
		"2C","2H","2D","2S",
		"3C","3H","3D","3S",
		"4C","4H","4D","4S",
		"5C","5H","5D","5S",
		"6C","6H","6D","6S",
		"7C","7H","7D","7S",
		"8C","8H","8D","8S",
		"9C","9H","9D","9S",
		"JC","JH","JD","JS",
		"QC","QH","QD","QS",
		"KC","KH","KD","KS",
	]

	CardDeck = this.cards.map((card,index)=>{
		return <Card name = {card} img = {"../../images/PNG/"+card+".png"} key = {card} index = {index} />
	})
	

	cardsOreder = ["2","3","4","5","6","7","8","9","J","Q","K","A"]
	render(){
		return (
			<React.Fragment>
				{this.CardDeck}
			</React.Fragment>
			)
	}
} 