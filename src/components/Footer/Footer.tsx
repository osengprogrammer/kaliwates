import { footerContent } from "@/constant/content";
import Image from "next/image";

const Footer = () => {
  const { quickLinks, socialMedia, bottomFooterText } = footerContent;

  return (
    <footer className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Quick Links */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <ul className="flex space-x-4">
            {socialMedia.map((social, index) => (
              <div key={index} className="md:flex-shrink-0 flex justify-center">
                <div className="h-20  flex items-center justify-center text-gray-900">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                   
                  >
                   <Image src={social?.Icon} width="40" height="40" alt="" />
                    {/* {social.Icon && <social.Icon className="w-1/2 h-1/2" />} */}
                  </a>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p>{bottomFooterText}</p>
      </div>
    </footer>
  );
};

export default Footer;
