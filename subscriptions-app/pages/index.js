import Link from "next/link";
import { useRouter } from "next/router";

export default function SubscriptionsPage() {
	const { query } = useRouter();

	return (
		<div>
			<h3>Subscriptions for customer {query.cid}</h3>
			<ul>
				<li>
					<Link href="/subscription/1">
						<a>subscription 1</a>
					</Link>
				</li>
				<li>
					<Link href="/subscription/2">
						<a>subscription 2</a>
					</Link>
				</li>
			</ul>
			<a href="/">Dashboard</a>
		</div>
	);
}
