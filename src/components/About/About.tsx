import "./About.css";
import aboutPhoto from "../../assets/about/mejor.png";
import experienceIcon from "../../assets/about/experience1.png";
import educationIcon from "../../assets/about/education2.png";

export function About() {
	return (
		<section id="about" className="about">
			<p className="about__subtitle">Get To Know More</p>
			<h1 className="about__title">About Me</h1>

			<div className="about__container">
				<div className="about__image">
					<img src={aboutPhoto} alt="Bryan Turcios profile" className="about__photo" />
				</div>

				<div className="about__details">
					<div className="about__cards">
						<div className="about__card">
							<img src={experienceIcon} alt="Technical skills icon" className="about__icon" />
							<h3 className="about__card-title">Technical Skills</h3>
							<p className="about__card-text">
								C / C++ · TypeScript · JavaScript
								<br />
								React · Vite · Node.js
								<br />
								HTML · CSS · Git · GitHub
								<br />
								Docker · Docker Compose
							</p>
						</div>

						<div className="about__card">
							<img src={educationIcon} alt="Education icon" className="about__icon" />
							<h3 className="about__card-title">Education</h3>
							<p className="about__card-text">
								42 School
								<br />
								Software Development
							</p>
						</div>
					</div>

					<div className="about__text-container">
						<p className="about__text">
							I’m a software development student at 42 School, focused on building clean, efficient, and
							scalable applications. With a strong foundation in system programming (C/C++), I’m currently
							exploring fullstack development with React and TypeScript, where I’ve found a strong
							interest in creating modern web interfaces and user experiences.
						</p>

						<p className="about__text">
							Before tech, I worked in fast-paced environments like kitchens, where I developed
							discipline, teamwork, and the ability to perform under pressure — qualities I now bring into
							software development. I’m currently looking for an opportunity to grow as a developer and
							contribute to meaningful technical projects.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
