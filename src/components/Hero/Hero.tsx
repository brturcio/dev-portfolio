import "./Hero.css";
import cvbrturcio from "../../assets/cv/cvbrturcio2026.pdf";
import profilePicture from "../../assets/imgprofile/00.jpeg";
import linkedin from "../../assets/socials/linkedin.png";
import github from "../../assets/socials/github-logo.png";
import { trackEvent } from "../../utils/analytics";

export function Hero() {
	return (
		<section className="hero">
			<div className="hero__image">
				<img src={profilePicture} alt="Bryan Turcios profile picture" />
			</div>

			<div className="hero__content">
				<p className="hero__greeting">Hello I'm</p>
				<h1 className="hero__name">Bryan Turcios</h1>
				<p className="hero__role">Frontend Developer</p>

				<div className="hero__buttons">
					<button
						className="hero__button hero__button--outline"
						onClick={() => {
							trackEvent("download_cv", {
								section: "hero",
								item: "cv",
							});
							window.open(cvbrturcio, "_blank", "noopener,noreferrer");
						}}
					>
						Download CV
					</button>
					<button
						className="hero__button hero__button--dark"
						onClick={() => {
							trackEvent("open_contact_info", {
								section: "hero",
								item: "contact_info",
							});
							window.location.href = "#contact";
						}}
					>
						Contact Info
					</button>
				</div>

				<div className="hero__socials">
					<a
						href="https://www.linkedin.com/in/brturcio"
						target="_blank"
						rel="noopener noreferrer"
						onClick={() =>
							trackEvent("open_social_profile", {
								section: "hero",
								platform: "linkedin",
							})
						}
					>
						<img src={linkedin} alt="LinkedIn" className="hero_socials-icon hero__img--linkedin" />
					</a>
					<a
						href="https://github.com/brturcio"
						target="_blank"
						rel="noopener noreferrer"
						onClick={() =>
							trackEvent("open_social_profile", {
								section: "hero",
								platform: "github",
							})
						}
					>
						<img src={github} alt="GitHub" className="hero_socials-icon hero__img--github" />
					</a>
				</div>
			</div>
		</section>
	);
}
