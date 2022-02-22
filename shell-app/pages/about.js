import Link from "next/link";

const About = () => (
	<div>
		<p>This is the about page.</p>
		<div>
			<Link href="/">
				<a>Go Back</a>
			</Link>
		</div>
	</div>
);

export default About;
