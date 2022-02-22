import Link from "next/link";
import { useRouter } from "next/router";

export default function SubscriptionPage() {
	const { query } = useRouter();

	return (
		<div>
			<h3>Order #{query.sid}</h3>
			<p>Lorem ipsum</p>
			<Link href={`/customer/${query.cid}/orders`}>
				<a>Back to Orders</a>
			</Link>
		</div>
	);
}
