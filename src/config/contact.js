import { FiMail } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from './site';

export const contactChannels = [
  { label: 'Email', detail: siteConfig.email, icon: FiMail, href: `mailto:${siteConfig.email}` },
  { label: 'WhatsApp', detail: '+94 71 758 4677', icon: FaWhatsapp, href: `https://wa.me/${siteConfig.whatsappNumber}` },
  { label: 'LinkedIn', detail: 'Connect professionally', icon: FaLinkedinIn, href: siteConfig.linkedInUrl },
  { label: 'Facebook', detail: 'Find me on Facebook', icon: FaFacebookF, href: siteConfig.facebookUrl },
];
