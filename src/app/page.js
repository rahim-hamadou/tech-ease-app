// @ts-nocheck
import "animate.css";

import NavBar from "./components/navBar/NavBar.js";
import Footer from "./components/footer/Footer.js";
import Card from "./components/cards/Card.js";
import Textanime from "./components/textanime/Textanime.js";
import ImgComponent from "./components/contain_img/ImgComponent.js";

const name = "TechEase";
export default function Home() {
	let data = {
		name: "TechEase",
		title: "Besoin d'un service informatique ",
		message_header: `Salut,

		Bienvenue sur notre plateforme  ${name}  dédiée au dépannage informatique, aux services divers et à la création de sites web! 🚀
		
		Chez TechEase, nous sommes fiers de mettre à ta disposition une panoplie de services adaptés à tes besoins:
		`,

		services: {
			depannage: `💻  Dépannage Informatique: Des solutions rapides pour résoudre tes problèmes, quel que soit le souci.`,
			web: `🌐  Création de Sites Web: Donnes vie à tes idées avec notre équipe créative et expérimentée.`,
			divers: `🛠️ Services Divers Informatiques: Installation, configuration, et dépannage de divers équipements, y compris caméras, imprimantes, et bien plus encore.`,
		},
		message_footer: `	Nous sommes une entreprise expérimentée, forte de plusieurs années dans le domaine. Notre équipe qualifiée est prête à relever tous les défis techniques que tu pourrais rencontrer.
		
			N'hésite pas à prendre contact avec nous. Ton aventure digitale commence ici! 💬🚀  
			
			À bientôt,`,

		dataImg: {
			tel: "/phonecall.svg",
			mail: "/email.svg",
			width: 100,
			height: 100,
			alt: "icon contact",
		},
	};
	return (
		<>
			<NavBar />

			<div id="banner" className="banner_app">
				<Textanime />
			</div>
			<div className="container_body">
				<div className="head_body">
					{/* Head */}

					<div className="Home_header_container">
						<div className="home_section">
							<div className="action_call">
								<h1 className="home_header_title">{data.title} </h1>
								<div className="icon">
									<a className="icon_el" href="mailto:techeaseassociation@gmail.com">
										<ImgComponent
											src="/email.svg"
											width={data.dataImg.width}
											height={data.dataImg.height}
											alt={data.dataImg.alt}
										/>
									</a>
									<a className="icon_el" href="tel:0785221344">
										<ImgComponent
											src="/phonecall.svg"
											width={data.dataImg.width}
											height={data.dataImg.height}
											alt={data.dataImg.alt}
										/>
									</a>
								</div>
							</div>
							<p className="home_header_message">{data.message_header}</p>
							<ul className="service_list">
								<li className="services_items repair animate__bounce">{data.services.depannage}</li>
								<li className="services_items web">{data.services.web}</li>
								<li className="services_items else">{data.services.divers}</li>
							</ul>

							<p className="home_header_message_footer">{data.message_footer}</p>
						</div>
					</div>
				</div>

				<div className="main_body"></div>
			</div>

			<footer>
				<Footer />
			</footer>
		</>
	);
}
