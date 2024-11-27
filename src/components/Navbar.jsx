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
          <RouterLink to="/forum" className="mr-4 hover:text-gray-200">
              ফোরাম
          </RouterLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
