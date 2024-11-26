import { Link as RouterLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-teal-500 px-4 text-white">
      <div className="h-16 flex items-center justify-between">
        <RouterLink to="/">
          <div className="font-bold">সরবরাহ</div>
        </RouterLink>
        <div className="flex items-center">
          <RouterLink to="/" className="mr-4 hover:text-gray-200">
            হোম
          </RouterLink>
          <RouterLink to="/order" className="mr-4 hover:text-gray-200">
            অর্ডার
          </RouterLink>
          <RouterLink to="/complaint" className="mr-4 hover:text-gray-200">
            অভিযোগ
          </RouterLink>
          <RouterLink to="/admin">
            <button className="border-2 border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-600 hover:text-white">
              অ্যাডমিন
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
