export default function Header() {
  return (
    <>
      <div className=" flex justify-around pt-10  items-center">
        <div className="flex justify-start items-center gap-3">
          <img src="aditya.jpg" className="h-10 w-10 rounded-3xl " />

          <h1 className="text-2xl font-bold text-[#cf2780]">
            ADITYA HIGH SCHOOL
          </h1>
        </div>
        <div>
            <ul className="flex gap-10">
                <li className="text-gray-900 cursor-pointer hover:text-red-800">Home</li>
                <li className="text-gray-900 cursor-pointer hover:text-red-800">Student life</li>
                <li className="text-gray-900 cursor-pointer hover:text-red-800">About us</li>
                <li className="text-gray-900 cursor-pointer hover:text-red-800">Contact us</li>
            </ul>
        </div>
        
      </div>
      
    </>
  );
}
