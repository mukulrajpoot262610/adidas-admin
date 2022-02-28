import { useRouter } from "next/router"

export default function OrderTable({ orders, users }) {

    const router = useRouter()

    return (
        <div className="overflow-x-auto w-full py-2">
            <div className="overflow-hidden border-2 border-black border-t-0">
                <table className="w-full divide-y-2 divide-black">

                    <thead className="bg-black text-white">
                        <tr>
                            <th
                                scope="col"
                                className="py-3 px-6 text-left"
                            >
                                Order No.
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Customer
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Payment
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Status
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Total</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y-2 divide-black">
                        {orders?.map((order, i) => (
                            <tr key={order._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    #000{i + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="">
                                        <div className="text-sm font-bold capitalize">{order.createdAt.split("T")[0]}</div>
                                        <div className="text-xs text-gray-400">YYYY-MM-DD</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm capitalize text-gray-900">{users.find(e => e._id === order.user)?.firstName}</div>
                                    <div className="text-sm text-gray-500"></div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.isPaid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} `}>
                                        {order.isPaid ? "Fully Paid" : "Unpaid"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.isDelivered ? "Delivered" : "On the Way"}</td>
                                <td className="whitespace-nowrap text-sm">
                                    <button className="p-3 px-6 bg-black text-white" onClick={() => router.push(`/order/order-details?order=${order._id}`)}>View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}