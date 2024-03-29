// Styles
import "./styles.css";

// Assets
import WordCloudMulti from "../../assets/About/wordcloud-light-multi.png";
import ContactPage from "../../components/Contact/ContactPage";

const AboutPage = () => {
	return (
		<main id="about" className="aboutMain">
			<section className="aboutSection">
				<h3 className="aboutTitle">Velkommen!</h3>
				{/* Introduction me */}
				<p>
					Mitt navn er Julie, er 25 år og bor i Bergen. Jeg begynte mitt kode eventyr Mai 2022, og
					startet på Kodehode August 2022. Gjennom Kodehode har jeg lært både frontend- og
					backend-utvikling, men jeg har en større interesse for design og bruker tilgjengelighet.
				</p>
				{/* Deeper in programming*/}
				<p>
					Web utvikling for meg er kreativitet. Som tidligere frisør, har kreativitet alltid vært
					drivkraften min til å være nyskjerrig og lære noe nytt. Å lage nettsider er et kreativt utløp
					med uendelige muligheter for evig utvikling. Jeg er en fullstack utvikler med interesse for de
					små detaljene.
				</p>

				{/* Deeper in personal */}
				<p></p>

				<ContactPage />
			</section>

			<section className="aboutSkills">
				{/* <h3 className={styles.aboutTitle}>Mine ferdigheter</h3> */}
				<img src={WordCloudMulti} alt="word cloud displaying my skills" />
			</section>
		</main>
	);
};

export default AboutPage;
