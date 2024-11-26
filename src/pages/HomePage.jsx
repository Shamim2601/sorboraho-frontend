import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import rawBeefImage from '../assets/raw-beef-1.jpg'

const HomePage = () => {
  return (
    <div className="max-w-screen-xl py-8 px-2 mx-auto">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">স্বাগতম সরবরাহ-তে</h1>
          <p className="text-xl">আমরা সেরা মানের গরুর মাংস সরবরাহ করি</p>
        </div>

        {/* Promo Image */}
        <div className="text-center">
          <img src={rawBeefImage} alt="Beef" className="rounded-md" />
        </div>

        {/* Promotions Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">এক নজরে...</h2>
          <div className="space-y-4">
            <div className="bg-teal-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">৩ কেজি প্যাকেজ</h3>
              <p>মূল্য : ২২৫০/- + ডেলিভারি চার্জ : ৫০/-</p>
            </div>
            <div className="bg-teal-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">৫ কেজি প্যাকেজ</h3>
              <p>মূল্য : ৩৭৫০/- + ডেলিভারি চার্জ : ০/-</p>
            </div>
            <div className="bg-teal-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">১০% ছাড়!</h3>
              <p>নতুন গ্রাহকদের জন্য প্রথম অর্ডারে ১০% ছাড়</p>
            </div>
            <div className="bg-teal-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">বিনামূল্যে ডেলিভারি</h3>
              <p>৫ কেজি বা তার বেশি অর্ডারে বিনামূল্যে ডেলিভারি</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">যোগাযোগ করুন</h2>
          <div className="flex justify-center space-x-4">
            <a href="mailto:shamim2601@gmail.com" className="text-teal-500 hover:text-teal-700">
              <FaEnvelope className="text-3xl" />
            </a>
            <a href="https://m.me/samamun60" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="tel:+8801703902176" className="text-teal-500 hover:text-teal-700">
              <FaPhone className="text-3xl" />
            </a>
            <a href="https://wa.me/+8801703902176" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
              <FaWhatsapp className="text-3xl" />
            </a>
            {/* <a href="https://twitter.com/sorboraho" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="https://instagram.com/sorboraho" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
              <FaInstagram className="text-3xl" />
            </a> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage
