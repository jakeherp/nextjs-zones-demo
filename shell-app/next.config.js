const { ORDERS_APP_URL, SUBSCRIPTIONS_APP_URL } = process.env;

module.exports = {
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: `/:path*`,
			},
			{
				source: "/customer/[cid]/subscriptions",
				destination: `${SUBSCRIPTIONS_APP_URL}/subscriptions`,
			},
			{
				source: "/customer/[cid]/subscriptions/:path*",
				destination: `${SUBSCRIPTIONS_APP_URL}/subscriptions/:path*`,
			},
			{
				source: "/customer/[cid]/orders",
				destination: `${ORDERS_APP_URL}/orders`,
			},
			{
				source: "/customer/[cid]/orders/:path*",
				destination: `${ORDERS_APP_URL}/orders/:path*`,
			},
		];
	},
};
