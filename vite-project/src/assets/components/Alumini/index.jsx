export default function Alumini() {
  return (
    <>
      <div>
        <div className="flex items-center w-full max-w-[60vw] mx-auto mt-5">
          <hr className="flex-grow border-t border-gray-400" />
          <h1 className="mx-4 text-xl font-semibold">Alumini</h1>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        <div className="flex justify-evenly my-20">
        <div className="flex gap-10 mx-2">
          <div className="relative w-[20vw] h-[30vh]">
              <img
                  src="https://images.assettype.com/nationalherald/2023-10/f5831f0f-cc57-425e-b5d5-f9cfbe4a98a2/1735399089."
                  alt="Hover to see card"
                  className="h-full w-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white opacity-0 hover:opacity-80  duration-700">
                  <div className="p-4 text-center">
                      <h3 className="font-bold">Rohit Sharma</h3>
                      <p className="mt-2">Rohit Sharma is celebrated for his elegant batting style, ability to play spin well, and proficiency in pacing innings. His contributions have made him one of the leading batsmen in modern cricket.

                      </p>
                  </div>
              </div>
          </div>
          <div className="relative w-[20vw] h-[30vh]">
              <img
                  src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdSDmtyYFGVTcVtLhiHQlp6UJboaM75ugOA&usqp=CAU"
                  alt="Hover to see card"
                  className="h-full w-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white opacity-0 hover:opacity-80  duration-700">
                  <div className="p-4 text-center">
                      <h3 className="font-bold">Lionel Messi</h3> 
                      <p className="mt-2">Lionel Messis impact on the game and his exceptional talent have made him an icon in the world of sports.
                      </p>
                  </div>
              </div>
          </div>
          <div className="relative w-[20vw] h-[30vh]">
              <img
                  src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPuz9bmOKCsETK-GsByVvxyuWYJ5FtHr5zeFHbPXwuw&s"
                  alt="Hover to see card"
                  className="h-full w-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white opacity-0 hover:opacity-80  duration-700">
                  <div className="p-4 text-center">
                      <h3 className="font-bold">Micheal Phelps</h3>
                      <p className="mt-2">Lionel Messis impact on the game and his exceptional talent have made him an icon in the world of sports.
                      </p>
                  </div>
              </div>
          </div>
        </div>
        <div >
          <ul className="flex flex-col gap-3 ">
            <li>
              <button className="flex items-center px-4 py-2 bg-gray-300 text-black border  rounded-lg hover:bg-gray-400">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRb3SzPlum5JWByheo63w0Be9LnTazy_bqA&s"
                  alt="Student life"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <span>Student life</span>
              </button>
            </li>
            <li>
              <button className="flex items-center px-4 py-2 bg-gray-300 text-black border rounded-lg hover:bg-gray-400">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSval03fMH1v122FB2BdGGTbdhmbqVFZ-q5Ig&usqp=CAU"
                  alt="Admissions open"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <span>Admissions</span>
              </button>
            </li>
            <li>
              <button className="flex items-center px-4 py-2 bg-gray-300 text-black border rounded-lg hover:bg-gray-400">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/generic-06/100/Artboard_131-512.png"
                  alt="Know more"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <span>Know more</span>
              </button>
            </li>
          </ul>
        </div>
        </div>
        
        
      </div>
    </>
  );
}
