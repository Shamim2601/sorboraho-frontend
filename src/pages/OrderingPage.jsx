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

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://sorboraho-backend.onrender.com/api/clients/?phone1=${clientInfo.phone1}`
      );
      if (response.data.length > 0) {
        const client = response.data[0];
        setClientInfo(client);
        alert("গ্রাহকের তথ্য পাওয়া গেছে");
      } else {
        alert("গ্রাহক পাওয়া যায়নি। নতুন গ্রাহক হিসেবে অর্ডার করুন।");
      }
    } catch (error) {
      alert("গ্রাহকের তথ্য খুঁজে পাওয়া যায়নি।");
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
      alert("আপনার অর্ডার সফলভাবে গৃহীত হয়েছে।");
    } catch (error) {
      alert("অর্ডার প্রক্রিয়াকরণে সমস্যা হয়েছে।");
    }
  };

  const calculateTotalPrice = () => {
    return packages.reduce((total, pkg) => total + pkg.price * pkg.quantity, 0);
  };

  const handleDeletePackage = (index) => {
    const updatedPackages = packages.filter((_, i) => i !== index);
    setPackages(updatedPackages);
  };

  return (
    <div className="container mx-auto py-8 px-4 w-full max-w-[800px]">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">অর্ডার করুন</h1>
      </div>

      <div className="mb-4">
        <label htmlFor="phone1" className="font-bold block">ফোন নম্বর</label>
        <input
          type="tel"
          id="phone1"
          className="w-full p-2 border rounded-md"
          value={clientInfo.phone1}
          onChange={(e) => setClientInfo({ ...clientInfo, phone1: e.target.value })}
        />
        <div className="flex items-center mt-2">
          <p className="mt-1">ইতোপূর্বে অর্ডার করেছিলেন?</p>
          <button
            className="ml-4 px-1 bg-blue-500 text-white rounded-md"
            onClick={handleSearch}
          >
            হ্যা
          </button>
        </div>
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
          <label htmlFor="address" className="font-bold block">ডেলিভারি ঠিকানা</label>
          <input
            type="text"
            id="address"
            className="w-full p-2 border rounded-md"
            value={clientInfo.address}
            onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-4 mb-4">
        <label htmlFor="supplyDate" className="font-bold block mb-1">সরবরাহের তারিখ</label>
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

      <div className="mt-10 mb-4">
        <h2 className="text-2xl font-bold mb-4">প্যাকেজ নির্বাচন করুন</h2>
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr>
              <th className="border p-2 w-[40%]">বিবরণ</th>
              <th className="border p-2 w-[20%]">মূল্য</th>
              <th className="border p-2 w-[20%]">পরিমাণ</th>
              <th className="border p-2 w-[20%]">মুছে ফেলুন</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr key={index}>
                <td className="border p-2 w-[40%]">
                  <select
                    className="w-full p-2 border rounded-md"
                    value={pkg.id}
                    onChange={(e) => {
                      const newPackages = [...packages];
                      newPackages[index] = { ...pkg, id: e.target.value, price: e.target.value === "1" ? 300 : 500 };
                      setPackages(newPackages);
                    }}
                  >
                    <option value="1">৩ কেজি প্যাকেজ</option>
                    <option value="2">৫ কেজি প্যাকেজ</option>
                  </select>
                </td>
                <td className="border p-2 w-[20%]">{pkg.price} টাকা</td>
                <td className="border p-2 w-[20%]">
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
                <td className="border p-2 text-center w-[20%]">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded-md"
                    onClick={() => handleDeletePackage(index)}
                  >
                    মুছুন
                  </button>
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

      <div className="flex justify-around items-center mt-8">
        <div className="text-lg font-bold">মোট মূল্য : {calculateTotalPrice()} টাকা</div>
        <button
          className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md"
          onClick={handleOrder}
        >
          অর্ডার নিশ্চিত করুন
        </button>
      </div>
    </div>
  );
};

export default OrderingPage;
