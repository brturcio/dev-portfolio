import "./Navbar.css";

export function Navbar() {
	return (
		<nav className="desktop-nav">
			<div className="logo">Bryan Turcios</div>

			<ul className="nav-links">
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}

