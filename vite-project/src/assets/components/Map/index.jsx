export default function Map() {
  return (
    <>
      <div>
      <div className="flex items-center w-full max-w-[60vw] mx-auto mt-5">
          <hr className="flex-grow border-t border-gray-400" />
          <h1 className="mx-4 text-xl font-semibold">Map</h1>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.2297879233897!2d78.54068177487592!3d14.756079985748892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb47898752f2b27%3A0x63f6de4d1af7d883!2sAditya%20High%20School!5e0!3m2!1sen!2sin!4v1726657491257!5m2!1sen!2sin"
          allowfullscreen
           className="w-[40vw] h-[40vh] m-5"
          loading="lazy"
        ></iframe>
        <p className="text-right">Contact us.</p>
      </div>
    </>
  );
}
