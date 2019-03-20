import React from "react"
import "./card.scss"
import like, {ReactComponent as LikeIcon} from "../static/icons/like.svg"

export const Card = ({avatarUrl, cardTitle, cardText, cardPicture, timeOfActivity, numOfMembers, like, dislike}) => (
	<div className="card">
		<button className="button card__menu-button">
			{/*  заимпортить икноку */}
		</button>
		<div className="card__header">
			<div className="card__logo">
				{/*  вот тут или bg или делать абсолютом и с object-fit */}
				<img src={avatarUrl} alt="user avatar"></img>
			</div>
			<div className="card__info">
				<h3 className="card__title"> { cardTitle } </h3>
				<span className="card__blog-info">{ timeOfActivity }</span>
				<span className="card__blog-info">{ numOfMembers }</span>
			</div>
		</div>
		<div className="card__body">
			<p className="card__text"> { cardText } <a href="#" className="card__link card__link--more">Ещё</a> </p>
		</div>
		<div className="card__voting voting">
			<button className="button voting__button">
				<LikeIcon className="voting__icon" />
			</button>
			<span className="card__voting-rate">{ like }</span>
			<button className="button voting__button">
				<LikeIcon className="voting__icon voting__icon--180deg" />
			</button>
			<span className="voting__rate">{ dislike }</span>
		</div>
	</div>
)