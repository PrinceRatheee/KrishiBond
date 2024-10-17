import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate(); 
    return (
        <>
      <main className="flex flex-col items-center justify-center w-full h-screen ">
        <h1 className="font-extrabold tracking-widest  text-9xl">
          404
        </h1>
        <div className="absolute px-2 text-sm text-white bg-black rounded rotate-12">
          Page Not Found
        </div>
        <button className="mt-5" onClick={() => navigate("/")}>
          <a className="relative inline-block text-sm font-medium text-[#fff] group active:text-yellow-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0" />

            <span
                
                className="relative block px-8 py-3 bg-green-400 border border-current
                rounded-md"
            >
              Go Back
            </span>
          </a>
        </button>
      </main>
    </>
    )
}

export default NotFound;