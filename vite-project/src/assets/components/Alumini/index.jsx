export default function Alumini() {
  return (
    <>
      <div>
        <div className="flex items-center w-full max-w-[60vw] mx-auto mt-5">
          <hr className="flex-grow border-t border-gray-400" />
          <h1 className="mx-4 text-xl font-semibold">Alumini</h1>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        <div className="flex justify-end mr-20 mt-20">
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
    </>
  );
}
