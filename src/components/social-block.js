import React  from "react"
import "./social-block.scss"
import { NavLink } from "react-router-dom";
import facebook, {ReactComponent as FacebookIcon} from "../static/icons/facebook.svg"
import linkedin, {ReactComponent as LinkedinIcon} from "../static/icons/in.svg"
import twitter, {ReactComponent as TwitterIcon} from "../static/icons/twitter.svg"
import vk, {ReactComponent as VKIcon} from "../static/icons/vk.svg"

/*export  const SocialBlock = ({facebookUrl, linkedinUrl, twitterUrl, vkUrl}) => (
			<div className="social-block">
				{facebookUrl && <link href={ facebookUrl }><FacebookIcon /></link>}
				{linkedin && <link href={ linkedin }><LinkedinIcon /></link>}
				{twitterUrl && <link href={ twitterUrl }><TwitterIcon /></link>}
				{vkUrl && <link href={ vkUrl }><VKIcon /></link>}
			</div>
	)*/

const links = [
	{
		href: "facebook.com",
		icon: <FacebookIcon className='links-block__link links-block__link--facebook' />,
		mod: "facebook"
	},
	{
		href: "linkedin.com",
		icon: <LinkedinIcon className='links-block__link links-block__link--linkedin' />,
		mod: "linkedin"
	},
	{
		href: "twitter.com",
		icon: <TwitterIcon className='links-block__link links-block__link--twitter' />,
		mod: "twitter"
	},
	{
		href: "vk.com",
		icon: <VKIcon className='links-block__link links-block__link--vk' />,
		mod: "vk"
	}
]

export const SocialBlock = () => {
	return (
		<ul className="links-block">
			{links.map((item, index) => <li className={"links-block__item links-block__item--" + item.mod}>
					<NavLink key={index} to={"http://" + item.href} exact aria-label={item.href} className="links-block__link">
						{item.icon}
					</NavLink>
				</li>
			)}
		</ul>
	)
}