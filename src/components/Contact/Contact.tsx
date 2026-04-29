import "./Contact.css";
import emailIcon from "../../assets/contact/mail2.png";
import linkedinIcon from "../../assets/socials/linkedin.png";

export function Contact() {
	return (
		<section id="contact" className="contact">
			<p className="contact__subtitle">Get in Touch</p>
			<h1 className="contact__title">Contact Me</h1>

			<div className="contact__container">
				<a className="contact__item" href="mailto:btjosueturcios@gmail.com">
					<img src={emailIcon} alt="Email icon" className="contact__icon" />
					<span>btjosueturcios@gmail.com</span>
				</a>

				<a
					className="contact__item"
					href="https://www.linkedin.com/in/brturcio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={linkedinIcon} alt="LinkedIn icon" className="contact__icon" />
					<span>LinkedIn</span>
				</a>
			</div>
		</section>
	);
}
