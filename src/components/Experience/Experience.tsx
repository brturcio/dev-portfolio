import "./Experience.css";

const itExperience = [
	{
		role: "IT Technician",
		company: "Institut National de Migration",
		period: "2014 – 2016",
		location: "Tegucigalpa, Honduras",
		description:
			"Started with a 3-month internship, then continued as an employee providing technical support and maintaining IT equipment.",
		items: [
			"Provided technical support to users",
			"Diagnosed and solved computer issues",
			"Installed, configured, and updated software",
			"Configured Windows workstations and peripherals",
			"Performed hardware maintenance and troubleshooting",
		],
	},
];

const otherExperience = [
	{
		role: "Cook",
		places: [
			{
				company: "Jean Cuistot Traiteur",
				period: "2024 – 2025",
				location: "Chives 17510, France",
			},
			{
				company: "L’Auberge de l’Abbaye",
				period: "2023 - 2024",
				location: "Saint-Amant-de-Boixe 16330, France",
			},
			{
				company: "TOC S.L",
				period: "2016 – 2022",
				location: "Salt-Girona 17190, Spain",
			},
		],
		description: [
			"Proven ability to work efficiently in fast-paced and high-pressure environments, maintaining a high level of organization and quality in results.",
			"Experience working in team-oriented settings, with strong communication and collaboration skills in demanding contexts.",
			"Highly organized and detail-oriented, with solid time management and task prioritization abilities.",
			"Disciplined, adaptable, and focused on continuous improvement and delivering consistent results.",
		],
	},
];

export function Experience() {
	return (
		<section id="experience" className="experience">
			<p className="experience__subtitle">Explore My</p>
			<h1 className="experience__title">Experience</h1>

			<div className="experience__block">
				<h2 className="experience__section-title">IT Experience</h2>

				<div className="experience__grid experience__grid--it">
					{itExperience.map((exp) => (
						<article className="experience__card experience__card--featured" key={exp.role}>
							<p className="experience__period">{exp.period}</p>
							<h3 className="experience__role">{exp.role}</h3>
							<p className="experience__company">{exp.company}</p>
							<p className="experience__location">{exp.location}</p>
							<p className="experience__description">{exp.description}</p>

							<ul className="experience__list">
								{exp.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>

			<div className="experience__block">
				<h2 className="experience__section-title">Other Experience</h2>

				<div className="experience__grid">
					{otherExperience.map((exp) => (
						<article className="experience__card" key={exp.role}>
							<h3 className="experience__role">{exp.role}</h3>

							<div className="experience__places">
								{exp.places.map((place) => (
									<div className="experience__place" key={place.company}>
										<p className="experience__period">{place.period}</p>
										<p className="experience__company">{place.company}</p>
										<p className="experience__location">{place.location}</p>
									</div>
								))}
							</div>

							<ul className="experience__list">
								{exp.description.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
