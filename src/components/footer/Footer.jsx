import React from "react";
import { Phone, MapPin, Mail, MessageCircle, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#032e3f] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <a href="https://huroorkee.ac.in/" className="block mb-4">
              <img
                src="https://huroorkee.ac.in/assets/img/logo/logo-1.png"
                alt="Haridwar University Logo"
                className="w-40 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <p className="text-gray-400 text-sm">
              Committed to Excellence in Education
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="text-orange-500" size={16} />
                <a href="tel:+91-7500102111" className="text-white font-medium">
                  +91-7500102111, +91-7500108111
                </a>
              </li>
              <li className="flex text-white font-medium items-center gap-2">
                <MapPin className="text-orange-500" size={16} />
                Near Bajuheri, Canal Road, Roorkee
              </li>
              <li className="flex text-white font-medium items-center gap-2">
                <Mail className="text-orange-500" size={16} />
                <a
                  href="mailto:info@huroorkee.ac.in"
                  className="hover:text-orange-400"
                >
                  info@huroorkee.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://huroorkee.ac.in/about-us"
                  className="hover:text-orange-400 text-white  hover:translate-x-2 transition-all duration-200 flex "
                >
                  <ChevronRight className="h-5 text-orange-500" /> About Us
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/contact-us"
                  className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 text-white flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Career
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/student-erp-portal"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  HU ERP
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/privacy-policy"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/assets/doc/Quick_Link/Institutional_Development_Plan.pdf"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Institutional Development
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/about-hu/internal-quality"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  IQAC
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/about-hu/internal-complaint"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  ICC
                </a>
              </li>
            </ul>
          </div>
          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 pb-2">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://huroorkee.ac.in/admission/hu-course-fee"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Our Programs
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/apply-now"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Apply Now
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/alumni"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Alumni
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/placement/overview"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Our Placements
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/admission/hu-course-fee"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Fees
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/blog/"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  HU Blog
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/assets/doc/Quick_Link/Annual_Report.pdf"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Annual Report
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/about-hu/anti-ragging"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  Anti Ragging Helpline
                </a>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 pb-2">
              Programmes
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://huroorkee.ac.in/academics/roorkee-college-of-smart-computing"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  College of Smart Computing
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/academics/best-engineering-college-in-uttarakhand"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  College of Engineering
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/academics/roorkee-college-of-business-studies"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  College of Business Studies
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/academics/roorkee-college-of-agriculture-sciences"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  College of Agriculture Sciences
                </a>
              </li>
              <li>
                <a
                  href="https://huroorkee.ac.in/academics/roorkee-college-of-allied-sciences"
                  className="hover:text-orange-400 text-white hover:translate-x-2 transition-all duration-200 flex"
                >
                  <ChevronRight className="h-5 text-orange-500" />
                  College of Allied Sciences
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="text-center mt-10 border-t border-gray-700 pt-4  text-white flex flex-col md:flex-row justify-between items-center">
          <p>
            © Copyright {new Date().getFullYear()}{" "}
            <span className="text-orange-400">Haridwar University</span> All
            Rights Reserved.
          </p>
          <div className="flex space-x-4 text-xl mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/HaridwarUniversity/"
              target="_blank"
              className="hover:text-orange-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/HaridwarUniversity/"
              target="_blank"
              className="hover:text-orange-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/huroorkee/?originalSubdomain=in"
              target="_blank"
              className="hover:text-orange-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@HaridwarUniversity"
              target="_blank"
              className="hover:text-orange-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/haridwaruniversity"
              target="_blank"
              className="hover:text-orange-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/haridwaruniversity"
              target="_blank"
              className="hover:text-orange-400 text-white"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
