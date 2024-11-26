import { useState } from "react"
import axios from "axios"

const ComplaintPage = () => {
  const [complaint, setComplaint] = useState({
    name: "",
    email: "",
    phone: "",
    order_no: "",
    message: "",
  })

  const [toast, setToast] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("https://sorboraho-backend.onrender.com/api/complaints/", complaint)
      setToast({
        type: "success",
        title: "অভিযোগ জমা হয়েছে",
        description: "আপনার অভিযোগ সফলভাবে জমা হয়েছে",
      })
      setComplaint({ name: "", email: "", phone: "", order_no: "", message: "" })
    } catch (error) {
      console.error("Error submitting complaint:", error)
      setToast({
        type: "error",
        title: "ত্রুটি",
        description: "অভিযোগ জমা দেওয়ার সময় একটি সমস্যা হয়েছে",
      })
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-2">
      {toast && (
        <div
          className={`p-4 mb-6 rounded-md ${
            toast.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          <strong className="block font-semibold">{toast.title}</strong>
          <p>{toast.description}</p>
        </div>
      )}
      <h1 className="text-3xl font-semibold text-center mb-8">অভিযোগ জমা দিন</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg mb-2">
            নাম
          </label>
          <input
            type="text"
            id="name"
            value={complaint.name}
            onChange={(e) => setComplaint({ ...complaint, name: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg mb-2">
            ইমেইল
          </label>
          <input
            type="email"
            id="email"
            value={complaint.email}
            onChange={(e) => setComplaint({ ...complaint, email: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg mb-2">
            ফোন নম্বর
          </label>
          <input
            type="tel"
            id="phone"
            value={complaint.phone}
            onChange={(e) => setComplaint({ ...complaint, phone: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="order_no" className="text-lg mb-2">
            অর্ডার নম্বর (ঐচ্ছিক)
          </label>
          <input
            type="text"
            id="order_no"
            value={complaint.order_no}
            onChange={(e) => setComplaint({ ...complaint, order_no: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg mb-2">
            অভিযোগের বিবরণ
          </label>
          <textarea
            id="message"
            value={complaint.message}
            onChange={(e) => setComplaint({ ...complaint, message: e.target.value })}
            rows="5"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
        >
          অভিযোগ জমা দিন
        </button>
      </form>
    </div>
  )
}

export default ComplaintPage
