import { useState } from "react";
import axios from "axios";

const OrderingPage = () => {
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone1: "",
    phone2: "",
    address: "",
  });
  const [supplyDate, setSupplyDate] = useState("");
  const [packages, setPackages] = useState([{ id: "", description: "", price: 0, quantity: 1 }]);
  const [toastMessage, setToastMessage] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://sorboraho-backend.onrender.com/api/clients/?phone1=${clientInfo.phone1}`
      );
      if (response.data.length > 0) {
        const client = response.data[0];
        setClientInfo(client);
      } else {
        setToastMessage({
          type: "info",
          title: "গ্রাহক পাওয়া যায়নি",
          description: "নতুন গ্রাহক হিসেবে অর্ডার করুন",
        });
      }
    } catch (error) {
      setToastMessage({
        type: "error",
        title: "ত্রুটি",
        description: "গ্রাহকের তথ্য খুঁজে পাওয়া যায়নি",
      });
    }
  };

  const handleOrder = async () => {
    try {
      const orderData = {
        client: clientInfo,
        supply_date: supplyDate,
        packages: packages,
      };
      await axios.post("https://sorboraho-backend.onrender.com/api/orders/", orderData);
      setToastMessage({
        type: "success",
        title: "অর্ডার সফল",
        description: "আপনার অর্ডার সফলভাবে গৃহীত হয়েছে",
      });
    } catch (error) {
      setToastMessage({
        type: "error",
        title: "ত্রুটি",
        description: "অর্ডার প্রক্রিয়াকরণে সমস্যা হয়েছে",
      });
    }
  };

  return (
    <div className="container mx-auto py-8 px-2">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">অর্ডার করুন</h1>
      </div>

      {toastMessage && (
        <div className={`mb-4 p-4 ${toastMessage.type === "success" ? "bg-green-100 text-green-800" : toastMessage.type === "info" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"} rounded-md`}>
          <strong>{toastMessage.title}</strong>
          <p>{toastMessage.description}</p>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="phone1" className="font-bold block">ফোন নম্বর</label>
        <input
          type="tel"
          id="phone1"
          className="w-full p-2 border rounded-md"
          value={clientInfo.phone1}
          onChange={(e) => setClientInfo({ ...clientInfo, phone1: e.target.value })}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSearch}
        >
          খুঁজুন
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="font-bold block">নাম</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-md"
            value={clientInfo.name}
            onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="font-bold block">ইমেইল</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            value={clientInfo.email}
            onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone2" className="font-bold block">অতিরিক্ত ফোন নম্বর</label>
          <input
            type="tel"
            id="phone2"
            className="w-full p-2 border rounded-md"
            value={clientInfo.phone2}
            onChange={(e) => setClientInfo({ ...clientInfo, phone2: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="address" className="font-bold block">ঠিকানা</label>
          <input
            type="text"
            id="address"
            className="w-full p-2 border rounded-md"
            value={clientInfo.address}
            onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="supplyDate" className="font-bold block">সরবরাহের তারিখ</label>
        <select
          id="supplyDate"
          className="w-full p-2 border rounded-md"
          value={supplyDate}
          onChange={(e) => setSupplyDate(e.target.value)}
        >
          <option value="2023-05-01">১লা মে, ২০২৩</option>
          <option value="2023-05-02">২রা মে, ২০২৩</option>
          <option value="2023-05-03">৩রা মে, ২০২৩</option>
        </select>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">প্যাকেজ নির্বাচন করুন</h2>
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">বিবরণ</th>
              <th className="border p-2">মূল্য</th>
              <th className="border p-2">পরিমাণ</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr key={index}>
                <td className="border p-2">
                  <select
                    className="w-full p-2 border rounded-md"
                    value={pkg.id}
                    onChange={(e) => {
                      const newPackages = [...packages];
                      newPackages[index] = { ...pkg, id: e.target.value };
                      setPackages(newPackages);
                    }}
                  >
                    <option value="1">৩ কেজি প্যাকেজ</option>
                    <option value="2">৫ কেজি প্যাকেজ</option>
                  </select>
                </td>
                <td className="border p-2">{pkg.price} টাকা</td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    min={1}
                    value={pkg.quantity}
                    onChange={(e) => {
                      const newPackages = [...packages];
                      newPackages[index] = { ...pkg, quantity: parseInt(e.target.value) };
                      setPackages(newPackages);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setPackages([...packages, { id: "", description: "", price: 0, quantity: 1 }])}
        >
          আরও প্যাকেজ যোগ করুন
        </button>
      </div>

      <button
        className="mt-4 px-6 py-3 bg-teal-500 text-white text-lg rounded-md"
        onClick={handleOrder}
      >
        অর্ডার নিশ্চিত করুন
      </button>
    </div>
  );
};

export default OrderingPage;
