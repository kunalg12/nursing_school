import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-14 h-14">
                <Image 
                  src="/nursinglogo (1).png" 
                  alt="Nursing Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span className="font-bold text-lg">INDRAYANI PRATISHTHAN</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premier institute for GNM nursing education in Maharashtra, dedicated to nurturing compassionate healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400">About Us</Link></li>
              <li><Link href="/academic" className="text-gray-300 hover:text-blue-400">Academic Programs</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-blue-400">Admissions</Link></li>
              <li><Link href="/facilities" className="text-gray-300 hover:text-blue-400">Facilities</Link></li>
              <li><Link href="/downloads" className="text-gray-300 hover:text-blue-400">Downloads</Link></li>
            </ul>
          </div>

          {/* College Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">College Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Beed Bypass Road, Chh. Sambhajinagar, Maharashtra – 431005
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-sm">7517275151</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-sm">swamivekanandschoolofnursing@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Trust Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Trust Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Flat No. 04, Waheguru Complex, Pundalik Nagar Road, Near Gajanan Mandir, Chh. Sambhajinagar
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-sm">indrayanipratishthan51@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 INDRAYANI PRATISHTHAN. All rights reserved.
          </p>
          {/* Social Media Logos */}
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="https://www.instagram.com/svs_of_nursing/?hl=en" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/instagram.png" 
                alt="Instagram" 
                width={32} 
                height={32} 
                className="hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://www.facebook.com/swamivivekanandschoolofnursing/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/facebook.png" 
                alt="Facebook" 
                width={32} 
                height={32} 
                className="hover:opacity-80 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
