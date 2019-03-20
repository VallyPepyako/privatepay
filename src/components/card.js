import React from 'react'
import './card.scss'
import like, {ReactComponent as LikeIcon} from '../static/icons/like.svg'

export const Card = ({avatarUrl, cardTitle, cardText, cardPicture, timeOfActivity, numOfMembers, like, dislike}) => (
	<div className="card">
		<button className="card__menu menu"><span className="menu__icon"></span></button>
			<div className="card__header">
				<div className='card__logo'>
					<img src={avatarUrl} alt="user avatar"></img>
				</div>
				<div className="cadr__ueser-info-block">
					<h3 className='card__title'> { cardTitle } </h3>
					<span className="card__user-info card__user-info--time-online">{ timeOfActivity }</span>
					<span className="card__user-info card__user-info--num-of-member">{ numOfMembers }</span>
				</div>
			</div>
			<div className="card__body">
				<p className="card__text"> { cardText } <a href="#" className="card__link card__link--more">Ещё</a> </p>
			</div>
			<div className="card__rate">
				<button className="card__rate-btn card__rate-btn--like like">
					<LikeIcon className='like-ikon' />
				</button><span className="card__num-rate">{ like }</span>
				<button className="card__rate-btn card__rate-btn--dislike dislike">
					<LikeIcon className='like-ikon' />
				</button><span className="card__num-rate">{ dislike }</span>
			</div>
	</div>
)