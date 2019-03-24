import React from "react"
import "./card.scss"
import like, {ReactComponent as LikeIcon} from "../static/icons/like.svg"
import menu, {ReactComponent as CardMenu} from "../static/icons/card-menu.svg"

const Card = ({avatarUrl, cardTitle, cardText, cardPicture, timeOfActivity, numOfMembers, like, dislike}) => (
	<div className="card">
		<button className="button card__menu-button">
			<CardMenu />
		</button>
		<div className="card__header">
			<div className="card__logo" style = {{ backgroundImage : `url( ${ avatarUrl })` }}></div>
			<div className="card__info">
				<h3 className="card__title"> { cardTitle } </h3>
				<span className="card__blog-info">{ timeOfActivity }</span>
				<span className="card__blog-info">{ numOfMembers }</span>
			</div>
		</div>
		<div className="card__body">
		
			<p className="card__text"> {cardPicture && <img src= {cardPicture} alt="card picture" className="card__picture"/>} { cardText } <a href="#" className="card__link card__link--more">Ещё</a> </p>
		</div>
		<div className="card__voting voting">
			<button className="button voting__button">
				<LikeIcon className="voting__icon" />
			</button>
			<span className="card__voting-rate voting__rate">{ like }</span>
			<button className="button voting__button voting__button--180deg">
				<LikeIcon className="voting__icon voting__icon--180deg" />
			</button>
			<span className="card__voting-rate voting__rate">{ dislike }</span>
		</div>
	</div>
)

export default Card