import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Send, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "QUICK LINKS",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Scholarship Programme", href: "/scholarship" },
        { name: "Blog", href: "/blogs" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Gallery", href: "/gallery" }
      ]
    },
  
    {
      title: "COURSES",
      links: [
        { name: "Online Courses", href: "/" },
        { name: "Offline Course", href: "/" },
        { name: "Mains Corner", href: "/mains-corner" },
        { name: "Mentorship Programme", href: "/" },
        { name: "Interview Guidancer", href: "/" },
        { name: "Essay Answer Writing", href: "/" },

      ]
    },
    {
      title: "CURRENT AFFAIRS",
      links: [
        { name: "What to Read in Hindu", href: "/" },
        { name: "What to Read in Indian Express", href: "/" },
        { name: "Editorial Analysis", href: "/" },
        { name: "Daily Current Affairs Analysis", href: "/" },
        { name: "Daily Current Affairs Quiz", href: "/" },
        { name: "Important Facts of the Day", href: "/" },
      ]
    },
    {
      title: "POLICIES",
      links: [
        { name: "Privacy & Refund Policy", href: "/" },
        { name: "Terms & Conditions", href: "/" },
        { name: "Data Policy", href: "/" }
      ]
    }
  ];

  const socialMediaEnglish = [
    { icon: Facebook, href: "https://facebook.com/dikshantias", label: "Facebook", backgroundColor: "bg-[#3b579d]" },
    { icon: Instagram, href: "https://instagram.com/dikshantias", label: "Instagram", backgroundColor: "bg-[#a408f3]" },
    { icon: Youtube, href: "https://youtube.com/dikshantias", label: "YouTube", backgroundColor: "bg-red-600" },
    { icon: Linkedin, href: "https://linkedin.com/company/dikshantias", label: "LinkedIn", backgroundColor: "bg-[#0274b3]" },
    { icon: Twitter, href: "https://twitter.com/dikshantias", label: "Twitter", backgroundColor: "bg-[#1d9bf0]" },
    { icon: Send, href: "https://t.me/dikshantias", label: "Telegram", backgroundColor: "bg-[#29a9eb]" }
  ];

  return (
    <footer className="bg-[#ecf4fc] py-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  <div className='logo w-[150px] md:w-[200px]'>
                    <Image src={'/img/dikshant-logo.png'} alt="Logo" width={200} height={100} />
                    <div className="text-md font-medium text-blue-950 mt-2 text-center">Empowering minds for a brighter future.</div>
                  </div>
                </div>

              </div>
            </div>
            <div className="space-y-1 text-sm text-blue-950">
              <div><span className='font-semibold'>Address:</span> 289, Dhaka Johar Near Dusehra Ground, Mukherjee Nagar, Delhi, 110009</div>
              <div><span className='font-semibold'>Phone:</span> +91 7428092240</div>
              <div><span className='font-semibold'>WhatsApp:</span> +91 9312511015</div>
              <div><span className='font-semibold'>Email:</span> info@dikshantias.com</div>
              <div className='mt-5'><Link className="px-4 py-2 bg-[#a50309] text-white rounded-md"  href="https://maps.app.goo.gl/mc6MMaRhn1CjPxwG7" target='_blank'>Get Direction</Link></div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              {section.title && (
                <h3 className="font-semibold text-[#a50309] mb-4 text-sm">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className='flex'><ChevronsRight className='text-sm text-red-800' />
                    <a
                      href={link.href}
                      className="text-sm text-blue-950 hover:text-[#990312] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media and Download App */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-[#8a0101] mb-3">SOCIAL MEDIA</h4>
              <div className="flex space-x-3">
                {socialMediaEnglish.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-8 h-8 text-white rounded-full flex items-center justify-center hover:bg-[#f43144] hover:text-white transition-colors ${social.backgroundColor}`}
                    aria-label={social.label}
                    target='_blank'
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Download App */}
          <div className="text-right">
            <Link href="#" className="bg-red-700 rounded-sm text-sm px-5 py-3 font-medium text-gray-50 my-3 mx-1
            ">Download App</Link>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs text-blue-950">
            Dikshant IAS © 2025. | All Rights Reserved. | Develop By Hover Business Services LLP
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;