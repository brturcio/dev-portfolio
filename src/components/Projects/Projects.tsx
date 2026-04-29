import transcendenceImg from "../../assets/projects/transcender.png";
import minishellImg from "../../assets/projects/minishell.png";
import ircImg from "../../assets/projects/irc.png";
import pushSwapImg from "../../assets/projects/push_swap.png";
import cub3dImg from "../../assets/projects/cub3d.png";
import inceptionImg from "../../assets/projects/inception.png";
import "./Projects.css";

const projects = [
	{
		title: "Transcendence",
		image: transcendenceImg,
		description:
			"Fullstack web application built at 42 School using React, TypeScript and Vite. Focused on client-server architecture and teamwork.",
		tech: ["React", "TypeScript", "Vite", "Node.js", "i18n"],
		github: "https://github.com/brturcio/ft_transcendence",
	},
	{
		title: "MiniShell",
		image: minishellImg,
		description:
			"Unix shell inspired by Bash, built in C. Handles processes, signals, pipes, redirections, parsing and command execution.",
		tech: ["C", "Unix", "Processes", "Parsing"],
		github: "https://github.com/brturcio/minishell/tree/main",
	},
	{
		title: "ft_irc",
		image: ircImg,
		description:
			"IRC server implementation in C++, focused on sockets, client-server communication, users and channels management.",
		tech: ["C++", "Sockets", "Networking"],
		github: "https://github.com/brturcio/ft_irc",
	},
	{
		title: "Push_swap",
		image: pushSwapImg,
		description: "Algorithmic sorting project in C, focused on stacks, optimization and complexity analysis.",
		tech: ["C", "Algorithms", "Stacks"],
		github: "https://github.com/brturcio/Push_swap",
	},
	{
		title: "Cub3D",
		image: cub3dImg,
		description:
			"Simple 3D game engine inspired by Wolfenstein 3D, built in C. Focused on raycasting, texture rendering, event handling, and map parsing.",
		tech: ["C", "Raycasting", "Graphics", "Parsing"],
		github: "https://github.com/brturcio/Cub_3D",
	},
	{
		title: "Inception",
		image: inceptionImg,
		description:
			"DevOps project focused on Docker and containerization. Built a multi-container architecture using Docker Compose, including NGINX, WordPress, and MariaDB, with networking and volume management.",
		tech: ["Docker", "Docker Compose", "NGINX", "WordPress", "MariaDB"],
		github: "https://github.com/brturcio/Inception",
	},
];

export function Projects() {
	return (
		<section id="projects" className="projects">
			<p className="projects__subtitle">Browse My Recent</p>
			<h1 className="projects__title">Projects</h1>

			<div className="projects__grid">
				{projects.map((project) => (
					<article className="projects__card" key={project.title}>
						<img
							src={project.image}
							alt={`${project.title} preview`}
							className="projects__image"
						/>
						<div className="projects__content">
							<h2 className="projects__name">{project.title}</h2>
							<p className="projects__description">{project.description}</p>

							<div className="projects__tech">
								{project.tech.map((tech) => (
									<span className="projects__tag" key={tech}>
										{tech}
									</span>
								))}
							</div>
						</div>

						<a className="projects__button" href={project.github} target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
					</article>
				))}
			</div>
		</section>
	);
}
