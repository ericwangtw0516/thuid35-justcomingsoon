import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating Image */}
      <div className="floating mb-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      
      {/* Glowing Text */}
      <h1 className="text-4xl font-bold gradient-text mb-8">
        coming soon...
      </h1>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/thuid_35"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-button"
      >
        <FaInstagram className="text-3xl" />
      </a>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-500 text-xs">
        thuid35
      </footer>
    </main>
  );
}
