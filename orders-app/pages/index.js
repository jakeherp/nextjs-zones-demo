import Link from "next/link";
import { useRouter } from "next/router";

export default function SubscriptionsPage() {
	const { query } = useRouter();

	return (
		<div>
			<h3>Orders for customer {query.cid}</h3>
			<ul>
				<li>
					<Link href="1">
						<a>Order 1</a>
					</Link>
				</li>
				<li>
					<Link href="2">
						<a>Order 2</a>
					</Link>
				</li>
			</ul>
			<a href="/">Dashboard</a>
		</div>
	);
}
