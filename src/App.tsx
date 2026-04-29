import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
	return (
		<main className="portafolio">
			<Navbar />

			<Hero />

			<About />

			<Experience />

			<Projects />

			<Contact />
		</main>
	);
}

export default App;
