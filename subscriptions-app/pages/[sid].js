import Link from "next/link";
import { useRouter } from "next/router";

export default function SubscriptionPage() {
	const { query } = useRouter();
	return (
		<div>
			<h3>Subscription {query.sid}</h3>
			<p>Lorem ipsum</p>
			<Link href={`/customer/${query.cid}/subscriptions`}>
				<a>Back to Subscriptions</a>
			</Link>
		</div>
	);
}
