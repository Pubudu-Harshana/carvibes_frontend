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
              <Link href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C.0 8.033.0 12 .0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
                <Link href="/join-us" className="hover:text-white transition-colors">Careers (Join Us)</Link>
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
            &copy; {new Date().getFullYear()} CarVibes.lk. All rights reserved.
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
