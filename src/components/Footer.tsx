import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center shrink-0 group">
              <Image
                src="/logo.png"
                alt="CarVibes.lk Logo"
                width={160}
                height={46}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Sri Lanka&apos;s premier professional car detailing & auto care service. Experience luxury detailing perfected to perfection.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5 stroke-current fill-none stroke-2 animate-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://wa.me/94717188814" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="WhatsApp">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.48 4.936 1.481 5.482 0 9.943-4.461 9.947-9.948.002-2.659-1.03-5.158-2.906-7.037-1.876-1.879-4.376-2.91-7.036-2.911-5.489 0-9.95 4.462-9.954 9.949-.001 1.77.466 3.493 1.353 5.03l-1.01 3.688 3.774-.988zm11.385-6.84c-.315-.158-1.86-.92-2.148-1.025-.289-.105-.499-.158-.709.158-.21.315-.813 1.025-.996 1.235-.183.21-.367.236-.682.079-.315-.158-1.33-.49-2.533-1.564-.936-.835-1.568-1.867-1.751-2.182-.183-.315-.02-.485.137-.642.142-.141.315-.367.472-.551.157-.184.21-.315.315-.525.105-.21.053-.394-.026-.551-.079-.158-.709-1.708-.971-2.34-.255-.612-.515-.529-.709-.539-.183-.01-.394-.01-.604-.01-.21 0-.551.079-.84.394-.289.315-1.103 1.077-1.103 2.629 0 1.551 1.129 3.048 1.287 3.258.158.21 2.221 3.391 5.38 4.757.752.325 1.339.519 1.797.665.756.24 1.444.207 1.988.126.607-.09 1.86-.761 2.122-1.458.262-.697.262-1.298.183-1.42-.079-.12-.289-.208-.604-.367z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#branches" className="hover:text-white transition-colors">Branches</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <a
                  href="https://wa.me/94717188814?text=Hi%20CarVibes!%20I%20am%20interested%20in%20joining%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Careers (Join Us)
                </a>
              </li>
            </ul>
          </div>

          {/* Branches info */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our Branches</h3>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <h4 className="text-sm font-medium text-white">Kosgama</h4>
                <p className="mt-2 text-xs text-gray-500 flex items-start gap-1">
                  <MapPin className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                  Kosgama
                </p>
                <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">
                  <Phone className="h-3 w-3 text-primary" />
                  +94 7171 888 14
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Avissawella</h4>
                <p className="mt-2 text-xs text-gray-500 flex items-start gap-1">
                  <MapPin className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                  Coming soon.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Ratnapura</h4>
                <p className="mt-2 text-xs text-gray-500 flex items-start gap-1">
                  <MapPin className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                  Coming soon.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} CarVibes.lk. All rights reserved. | Developed by <a href="https://infavour.tech" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors font-medium">Infavour Solutions</a>
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
