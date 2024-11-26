import { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [supplyInfo, setSupplyInfo] = useState({ date: "", description: "" });
  const [packageInfo, setPackageInfo] = useState({ description: "", price: "" });
  const [orders, setOrders] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [clients, setClients] = useState([]);
  const [toastMessage, setToastMessage] = useState({ title: "", description: "", status: "" });

  const handleAddSupply = async () => {
    try {
      await axios.post("https://sorboraho-backend.onrender.com/api/supplies/", supplyInfo);
      setToastMessage({
        title: "সরবরাহ যোগ করা হয়েছে",
        description: "",
        status: "success",
      });
      setSupplyInfo({ date: "", description: "" });
    } catch (error) {
      console.error("Error adding supply:", error);
      setToastMessage({
        title: "ত্রুটি",
        description: "সরবরাহ যোগ করার সময় একটি সমস্যা হয়েছে",
        status: "error",
      });
    }
  };

  const handleAddPackage = async () => {
    try {
      await axios.post("https://sorboraho-backend.onrender.com/api/packages/", packageInfo);
      setToastMessage({
        title: "প্যাকেজ যোগ করা হয়েছে",
        description: "",
        status: "success",
      });
      setPackageInfo({ description: "", price: "" });
    } catch (error) {
      console.error("Error adding package:", error);
      setToastMessage({
        title: "ত্রুটি",
        description: "প্যাকেজ যোগ করার সময় একটি সমস্যা হয়েছে",
        status: "error",
      });
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://sorboraho-backend.onrender.com/api/orders/");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const fetchComplaints = async () => {
    try {
      const response = await axios.get("https://sorboraho-backend.onrender.com/api/complaints/");
      setComplaints(response.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get("https://sorboraho-backend.onrender.com/api/clients/");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-2">
      <h1 className="text-3xl font-semibold text-center mb-8">অ্যাডমিন ড্যাশবোর্ড</h1>

      {/* Toast Notification */}
      {toastMessage.title && (
        <div
          className={`p-4 mb-4 rounded-lg text-white ${
            toastMessage.status === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <strong>{toastMessage.title}</strong>
          {toastMessage.description && <p>{toastMessage.description}</p>}
        </div>
      )}

      {/* Tabs */}
      <div className="mb-6">
        <ul className="flex space-x-6 border-b">
          <li className="cursor-pointer pb-2 px-4">সরবরাহ যোগ করুন</li>
          <li className="cursor-pointer pb-2 px-4">প্যাকেজ যোগ করুন</li>
          <li className="cursor-pointer pb-2 px-4">অর্ডার দেখুন</li>
          <li className="cursor-pointer pb-2 px-4">অভিযোগ দেখুন</li>
          <li className="cursor-pointer pb-2 px-4">গ্রাহক তালিকা</li>
        </ul>
      </div>

      {/* Supply Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">সরবরাহ যোগ করুন</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg">সরবরাহের তারিখ</label>
            <input
              type="date"
              value={supplyInfo.date}
              onChange={(e) => setSupplyInfo({ ...supplyInfo, date: e.target.value })}
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">বিবরণ</label>
            <textarea
              value={supplyInfo.description}
              onChange={(e) => setSupplyInfo({ ...supplyInfo, description: e.target.value })}
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            onClick={handleAddSupply}
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            সরবরাহ যোগ করুন
          </button>
        </div>
      </div>

      {/* Package Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">প্যাকেজ যোগ করুন</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg">প্যাকেজের বিবরণ</label>
            <input
              type="text"
              value={packageInfo.description}
              onChange={(e) => setPackageInfo({ ...packageInfo, description: e.target.value })}
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">মূল্য</label>
            <input
              type="number"
              value={packageInfo.price}
              onChange={(e) => setPackageInfo({ ...packageInfo, price: e.target.value })}
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            onClick={handleAddPackage}
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            প্যাকেজ যোগ করুন
          </button>
        </div>
      </div>

      {/* Orders */}
      <div className="mb-6">
        <button
          onClick={fetchOrders}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 mb-4"
        >
          অর্ডার লোড করুন
        </button>
        <table className="min-w-full table-auto border-separate border-spacing-0 border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">অর্ডার আইডি</th>
              <th className="border border-gray-300 p-2">গ্রাহকের নাম</th>
              <th className="border border-gray-300 p-2">তারিখ</th>
              <th className="border border-gray-300 p-2">মোট মূল্য</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border border-gray-300 p-2">{order.id}</td>
                <td className="border border-gray-300 p-2">{order.client.name}</td>
                <td className="border border-gray-300 p-2">{order.date}</td>
                <td className="border border-gray-300 p-2">{order.total_price} টাকা</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Complaints */}
      <div className="mb-6">
        <button
          onClick={fetchComplaints}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 mb-4"
        >
          অভিযোগ লোড করুন
        </button>
        <table className="min-w-full table-auto border-separate border-spacing-0 border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">নাম</th>
              <th className="border border-gray-300 p-2">ইমেইল</th>
              <th className="border border-gray-300 p-2">ফোন</th>
              <th className="border border-gray-300 p-2">বার্তা</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td className="border border-gray-300 p-2">{complaint.name}</td>
                <td className="border border-gray-300 p-2">{complaint.email}</td>
                <td className="border border-gray-300 p-2">{complaint.phone}</td>
                <td className="border border-gray-300 p-2">{complaint.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Clients */}
      <div className="mb-6">
        <button
          onClick={fetchClients}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 mb-4"
        >
          গ্রাহক লোড করুন
        </button>
        <table className="min-w-full table-auto border-separate border-spacing-0 border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">নাম</th>
              <th className="border border-gray-300 p-2">ইমেইল</th>
              <th className="border border-gray-300 p-2">ফোন</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="border border-gray-300 p-2">{client.name}</td>
                <td className="border border-gray-300 p-2">{client.email}</td>
                <td className="border border-gray-300 p-2">{client.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
