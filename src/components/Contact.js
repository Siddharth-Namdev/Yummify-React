// const Contact = ()=>{
//     return(
//         <div>
//             <h1>Welcome Siddharth !!</h1>
//             <h2>This is your Contact page</h2>
//         </div>
//     )
// }

// export default Contact;


const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-4">Contact Siddharth Namdev</h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          I'm a student at NIT Kurukshetra, Haryana. Feel free to reach out to me!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-xl p-4 shadow">
              <h2 className="text-xl font-semibold text-indigo-700">📧 Email</h2>
              <p className="text-gray-700">namsiddharth19@gmail.com</p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4 shadow">
              <h2 className="text-xl font-semibold text-indigo-700">📱 Phone</h2>
              <p className="text-gray-700">+91 95891 25346</p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4 shadow">
              <h2 className="text-xl font-semibold text-indigo-700">🏫 College</h2>
              <p className="text-gray-700">NIT Kurukshetra, Haryana</p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4 shadow">
              <h2 className="text-xl font-semibold text-indigo-700">🌐 LinkedIn</h2>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/your-profile
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Send Message 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
