import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const ContactNote = () => {
  return (
    <section id="Contact" className="py-20 bg-[#fdfaf5]">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Section Title */}
        <h2 className="font-handwriting text-4xl text-gray-800 mb-4">
          Let’s make something
        </h2>
        <p className="text-gray-700 font-typewriter mb-12">
          Drop me a line and let’s start a conversation.
        </p>

        {/* Notepaper Card */}
        <div className="relative max-w-lg mx-auto bg-[#fffdf5] border border-gray-300 shadow-xl rounded-md p-8 font-typewriter text-left"
             style={{ backgroundImage: "repeating-linear-gradient(#f0ebe1, #f0ebe1 38px, #fffdf5 39px)" }}>
          
          {/* Pushpin */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border-2 border-red-700"></div>

          {/* Text Content */}
          <h3 className="italic font-handwriting text-xl text-gray-800 mb-4">
            Contact Me
          </h3>

          <p className="flex items-center gap-3 mb-3 text-gray-800">
            <Mail className="w-5 h-5 text-gray-600" /> nukalavishal6@gmail.com
          </p>
          <p className="flex items-center gap-3 mb-3 text-gray-800">
            <Phone className="w-5 h-5 text-gray-600" /> +91 9618462331
          </p>
          <p className="flex items-center gap-3 mb-6 text-gray-800">
            <MapPin className="w-5 h-5 text-gray-600" /> Nizamabad , Telangana, India
          </p>

          <div>
            <p className="italic text-gray-600 mb-2">Find me online:</p>
            <div className="flex gap-4">
              <a href="https://github.com/wndrthndr" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0ebe1] shadow hover:scale-110 transition">
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/nukala-vishal-327471398/" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0ebe1] shadow hover:scale-110 transition">
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0ebe1] shadow hover:scale-110 transition">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0ebe1] shadow hover:scale-110 transition">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNote;
