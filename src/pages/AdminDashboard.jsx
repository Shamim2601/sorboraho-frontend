import { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [supplyInfo, setSupplyInfo] = useState({ date: "", description: "" });
  const [packageInfo, setPackageInfo] = useState({ description: "", price: "" });
  const [packages, setPackages] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const [orders, setOrders] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [clients, setClients] = useState([]);
  const [modalData, setModalData] = useState(null);

  const handleAddSupply = async () => {
    try {
      await axios.post("https://sorboraho-backend.onrender.com/api/supplies/", supplyInfo);
      alert("সরবরাহ যোগ করা হয়েছে");
      setSupplyInfo({ date: "", description: "" });
    } catch (error) {
      console.error("Error adding supply:", error);
      alert("সরবরাহ যোগ করার সময় একটি সমস্যা হয়েছে");
    }
  };

  const handleAddPackage = async () => {
    try {
      await axios.post("https://sorboraho-backend.onrender.com/api/packages/", packageInfo);
      alert("প্যাকেজ যোগ করা হয়েছে");
      setPackageInfo({ description: "", price: "" });
    } catch (error) {
      console.error("Error adding package:", error);
      alert("প্যাকেজ যোগ করার সময় একটি সমস্যা হয়েছে");
    }
  };

  const fetchPackages = async () => {
    try {
      const response = await axios.get("https://sorboraho-backend.onrender.com/api/packages/");
      setPackages(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  const fetchSupplies = async () => {
    try {
      const response = await axios.get("https://sorboraho-backend.onrender.com/api/supplies/");
      setSupplies(response.data);
    } catch (error) {
      console.error("Error fetching supplies:", error);
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

  const fetchClients = async () => {
    try {
      const response = await axios.get("https://sorboraho-backend.onrender.com/api/clients/");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const fetchComplaints = async () => {
    try {
      const response = await axios.get("https://sorboraho-backend.onrender.com/api/complaints/");
      setComplaints(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const handleEdit = (item) => {
    setModalData(item); // Open modal with data
  };

  const handleDelete = (item) => {
    const confirmDelete = window.confirm("আপনি কি নিশ্চিত মুছে ফেলতে চান?");
    if (confirmDelete) {
      alert(`ID ${item.id} মুছে ফেলা হয়েছে`);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">অ্যাডমিন ড্যাশবোর্ড</h1>

      {/* Dropdown Menu */}
      <div className="mb-6">
        <select
          id="tabs"
          className="border border-gray-300 p-2 rounded w-full"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="supplies">সাপ্লাই</option>
          <option value="packages">প্যাকেজ</option>
          <option value="orders">অর্ডার</option>
          <option value="clients">গ্রাহক</option>
          <option value="complaints">অভিযোগ</option>
        </select>
      </div>

      {/* Supplies */}
      {activeTab === "supplies" && (
        <div className="mb-6">
          <div className="space-y-4">
            {/* Date Input */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                তারিখ
              </label>
              <input
                id="date"
                type="date"
                value={supplyInfo.date}
                onChange={(e) => setSupplyInfo({ ...supplyInfo, date: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                বর্ণনা
              </label>
              <textarea
                id="description"
                value={supplyInfo.description}
                onChange={(e) => setSupplyInfo({ ...supplyInfo, description: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>

            {/* Add Supply Button */}
            <div>
              <button
                onClick={handleAddSupply}
                className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 w-full"
              >
                সাপ্লাই যোগ করুন
              </button>
            </div>
          </div>

          <div className="mt-10">
            <button onClick={fetchSupplies} className="bg-teal-500 text-white py-2 px-4 rounded mb-4">
            সাপ্লাই লোড করুন
            </button>
            <table className="w-full border">
              <thead>
                <tr>
                  <th className="border p-2">ID</th>
                  <th className="border p-2">বর্ণনা</th>
                  <th className="border p-2">তারিখ</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {supplies.map((supply) => (
                  <tr key={supply.id}>
                    <td className="border p-2">{supply.id}</td>
                    <td className="border p-2">{supply.description}</td>
                    <td className="border p-2">{supply.date}</td>
                    <td className="border p-2 space-x-2">
                      <button onClick={() => handleEdit(supply)} className="bg-blue-500 text-white px-2 rounded">
                      📝
                      </button>
                      <button
                        onClick={() => handleDelete(supply)}
                        className="bg-red-500 text-white px-2 rounded"
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Packages */}
      {activeTab === "packages" && (
        <div className="mb-6">
          <div className="space-y-4">
            {/* Description Input */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                প্যাকেজ বর্ণনা
              </label>
              <input
                id="description"
                type="text"
                value={packageInfo.description}
                onChange={(e) => setPackageInfo({ ...packageInfo, description: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>

            {/* Price Input */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                মূল্য
              </label>
              <input
                id="price"
                type="number"
                value={packageInfo.price}
                onChange={(e) => setPackageInfo({ ...packageInfo, price: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>

            {/* Add Package Button */}
            <div>
              <button
                onClick={handleAddPackage}
                className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 w-full"
              >
                প্যাকেজ যোগ করুন
              </button>
            </div>
          </div>

          <div className="mt-10">
            <button onClick={fetchPackages} className="bg-teal-500 text-white py-2 px-4 rounded mb-4">
            প্যাকেজ লোড করুন
            </button>
            <table className="w-full border">
              <thead>
                <tr>
                  <th className="border p-2">ID</th>
                  <th className="border p-2">বর্ণনা</th>
                  <th className="border p-2">মোট মূল্য</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((packageItem) => (
                  <tr key={packageItem.id}>
                    <td className="border p-2">{packageItem.id}</td>
                    <td className="border p-2">{packageItem.description}</td>
                    <td className="border p-2">{packageItem.price}</td>
                    <td className="border p-2 space-x-2">
                      <button onClick={() => handleEdit(packageItem)} className="bg-blue-500 text-white px-2 rounded">
                      📝
                      </button>
                      <button
                        onClick={() => handleDelete(packageItem)}
                        className="bg-red-500 text-white px-2 rounded"
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Orders */}
      {activeTab === "orders" && (
        <div className="mb-6">
          <button onClick={fetchOrders} className="bg-teal-500 text-white py-2 px-4 rounded mb-4">
            অর্ডার লোড করুন
          </button>
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">গ্রাহক</th>
                <th className="border p-2">মোট মূল্য</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border p-2">{order.id}</td>
                  <td className="border p-2">{order.client}</td>
                  <td className="border p-2">{order.total_price}</td>
                  <td className="border p-2 space-x-2">
                    <button onClick={() => handleEdit(order)} className="bg-blue-500 text-white px-2 rounded">
                    📝
                    </button>
                    <button
                      onClick={() => handleDelete(order)}
                      className="bg-red-500 text-white px-2 rounded"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Clients */}
      {activeTab === "clients" && (
        <div className="mb-6">
          <button onClick={fetchClients} className="bg-teal-500 text-white py-2 px-4 rounded mb-4">
            গ্রাহক লোড করুন
          </button>
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2">নাম</th>
                <th className="border p-2">ইমেইল</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td className="border p-2">{client.name}</td>
                  <td className="border p-2">{client.email}</td>
                  <td className="border p-2 space-x-2">
                    <button onClick={() => handleEdit(client)} className="bg-blue-500 text-white px-2 rounded">
                    📝
                    </button>
                    <button
                      onClick={() => handleDelete(client)}
                      className="bg-red-500 text-white px-2 rounded"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Complaints */}
      {activeTab === "complaints" && (
        <div className="mb-6">
          <button onClick={fetchComplaints} className="bg-teal-500 text-white py-2 px-4 rounded mb-4">
            অভিযোগ লোড করুন
          </button>
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2">নাম</th>
                <th className="border p-2">ফোন</th>
                <th className="border p-2">মেসেজ</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td className="border p-2">{complaint.name}</td>
                  <td className="border p-2">{complaint.phone}</td>
                  <td className="border p-2">{complaint.message}</td>
                  <td className="border p-2 space-x-2">
                    <button onClick={() => handleEdit(complaint)} className="bg-blue-500 text-white px-2 rounded">
                    📝
                    </button>
                    <button
                      onClick={() => handleDelete(complaint)}
                      className="bg-red-500 text-white px-2 rounded"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <h2 className="text-xl font-semibold mb-4">Modal Content</h2>
            <p>{JSON.stringify(modalData)}</p>
            <button
              onClick={() => setModalData(null)}
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
