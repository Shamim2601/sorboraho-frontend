import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const Forum = () => {
  return (
    <div className="max-w-screen-xl py-8 px-4 mx-auto text-center">
      <div className="space-y-12">
        {/* Articles Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">ব্লগ</h2>
          <div className="space-y-8">
            {/* Article 1 */}
            <div className="bg-gray-100 p-6 rounded-md shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                গরুর মাংস কেনার সময় যে বিষয়গুলো লক্ষ্য করবেন
              </h3>
              <p className="text-gray-700 leading-relaxed">
                গরুর মাংস কেনার সময় কিছু বিষয় খেয়াল রাখা অত্যন্ত জরুরি। ভালো মানের 
                মাংসের রং উজ্জ্বল লাল হওয়া উচিত এবং ফ্যাট সাদা বা হালকা হলুদ হওয়া উচিত। 
                গন্ধে যেন কোনো অস্বাভাবিকতা না থাকে এবং এটি যেন তাজা মনে হয়। বাজার থেকে 
                সরাসরি প্রসেস করা মাংস কেনা আরও নিরাপদ। এছাড়াও, মাংসের ধরন (হাড় সহ, 
                বোনলেস, বা প্রয়োজন অনুযায়ী কাটা) সম্পর্কে পরিষ্কার নির্দেশনা দিয়ে 
                কিনুন।
              </p>
            </div>

            {/* Article 2 */}
            <div className="bg-gray-100 p-6 rounded-md shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                গরুর মাংস সংরক্ষণ করার সঠিক উপায়
              </h3>
              <p className="text-gray-700 leading-relaxed">
                গরুর মাংস সংরক্ষণ করার সময় কয়েকটি ধাপ অনুসরণ করুন। প্রথমে মাংস 
                পরিষ্কার করে কেটে ছোট ছোট অংশে ভাগ করুন। সংরক্ষণের আগে মাংসকে 
                এয়ারটাইট প্যাকেটে বা প্লাস্টিক র‍্যাপে পেঁচিয়ে নিন। ফ্রিজে 
                ৩-৪ দিনের জন্য তাজা মাংস রাখা যায়, কিন্তু দীর্ঘমেয়াদী সংরক্ষণের 
                জন্য ডিপ ফ্রিজ ব্যবহার করুন। ডিপ ফ্রিজে মাংস ৩-৬ মাস পর্যন্ত 
                ভালো থাকে, তবে ব্যবহারের আগে সঠিকভাবে ডিফ্রস্ট করা প্রয়োজন।
              </p>
            </div>

            {/* Article 3 */}
            <div className="bg-gray-100 p-6 rounded-md shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                গরুর মাংসের পুষ্টিগুণ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                গরুর মাংস উচ্চমাত্রায় প্রোটিন, আয়রন, এবং ভিটামিন বি১২ এর সমৃদ্ধ উৎস। 
                এটি শরীরের পেশী শক্তিশালী করতে সাহায্য করে এবং আয়রনের ঘাটতি জনিত 
                রক্তস্বল্পতা প্রতিরোধে গুরুত্বপূর্ণ ভূমিকা পালন করে। তবে, মাংসের 
                সঠিক পরিমাণ গ্রহণ করা প্রয়োজন কারণ অতিরিক্ত মাংস খাওয়া শরীরের 
                জন্য ক্ষতিকারক হতে পারে। স্বাস্থ্যকর ডায়েটের জন্য সপ্তাহে ২-৩ বার 
                পরিমিত পরিমাণে গরুর মাংস অন্তর্ভুক্ত করুন।
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">যোগাযোগ করুন</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:shamim2601@gmail.com"
              className="text-teal-500 hover:text-cyan-500"
            >
              <FaEnvelope className="text-4xl" />
            </a>
            <a
              href="https://m.me/samamun60"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-cyan-500"
            >
              <FaFacebook className="text-4xl" />
            </a>
            <a
              href="tel:+8801703902176"
              className="text-teal-500 hover:text-cyan-500"
            >
              <FaPhone className="text-4xl" />
            </a>
            <a
              href="https://wa.me/+8801703902176"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-cyan-500"
            >
              <FaWhatsapp className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
