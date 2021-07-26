import Head from "next/head";
import GetJoke from "../components/GetJokes";
import styles from "../styles/home.module.css";

export default function index() {
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Joke Generator</title>
				<link rel="icon" href="/icons/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/icons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="theme-color" content="#000000" />
				<script
					async
					src="https://unpkg.com/pwacompat"
					crossOrigin="anonymous"
				></script>
				<meta name="Description" content="An app full of funny jokes" />
			</Head>
			<div className={styles.container}>
				<h3 className={styles.title}>JOKE GENERATOR</h3>
				<GetJoke />
			</div>
		</div>
	);
}
