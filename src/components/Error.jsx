import { Link } from "react-router-dom"


const Error = () => {
  return (
    <div className="flex flex-col gap-5 px-4 py-4 items-center justify-center">
        <h1 className="text-red-500">Error Page Not Found</h1>
        <Link to="/" className="bg-orange-500 text-white px-2 py-2 rounded-lg">Back To Home</Link>
    </div>
  )
}
export default Error