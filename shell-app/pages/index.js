import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(import("../components/Header"));

export default function Home() {
	return (
		<div>
			<Header />
			<p>This is our Dashboard</p>
			<div>
				<a href="/customer/123456/subscriptions">Subscriptions</a>
				<a href="/customer/123456/orders">Orders</a>
			</div>
			<div>
				<Link href="/about">
					<a>About us</a>
				</Link>
			</div>
		</div>
	);
}
