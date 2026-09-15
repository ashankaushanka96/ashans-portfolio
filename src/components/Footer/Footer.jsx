import { useState, useEffect } from "react";
import { Container, Box, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { KeyboardArrowUp, Email, Phone } from '@mui/icons-material';
import { Logo } from "../common/Logo";
import footerBg from "../../assets/footer/background.png";
import { footerLinks } from "../../config/navigation";
import { socialLinks } from "../../config/social";
import { siteConfig } from "../../config/site";
import { smoothScrollTo } from "../../utils/smoothScroll";
import { useColorMode } from "../../contexts/ColorModeContext";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useColorMode();
  const isDark = mode === 'dark';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    smoothScrollTo(0);
  };

  return (
    <Box
      component="footer"
      className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      sx={{ position: 'relative' }}
    >
      {/* Background image + overlay live on their own layer, faded in at the
          top edge so the transition from the previous section is a smooth
          blend into the shared page background instead of a hard seam.
          Light mode skips the photo entirely — it's a dark/moody image that
          shows through any translucent overlay as a visible gray band, so
          the footer just sits on the shared light page background instead. */}
      {isDark && (
        <Box
          className="absolute inset-0 -z-10"
          sx={{
            backgroundImage: `url(${footerBg})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(70% 90% at 50% 0%, rgba(124, 58, 237, 0.16) 0%, transparent 65%),
                 linear-gradient(180deg, rgba(7, 11, 20, 0.55) 0%, rgba(9, 14, 27, 0.88) 45%, rgba(6, 10, 18, 0.96) 100%)`,
            }
          }}
        />
      )}

      <Container maxWidth="xl" className="relative z-10">
        <Box className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Main Footer Content */}
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            
            {/* Logo & Description */}
            <Box className="text-center md:text-left">
              <Box className="mb-6">
                <Logo
                  className="justify-center md:justify-start"
                  markClassName="w-12 h-12 sm:w-14 sm:h-14"
                />
              </Box>
              <Typography
                variant="body1"
                className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                {siteConfig.footer.description}
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box className="text-center md:text-left">
              <Typography
                variant="h6"
                className="text-xl font-bold mb-6 text-slate-900 dark:text-white"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                {siteConfig.footer.quickLinksTitle}
              </Typography>
              <Box className="space-y-3">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-slate-600 dark:text-gray-300 hover:text-accent transition-all duration-300 transform hover:translate-x-2"
                    sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                  >
                    {link.label}
                  </a>
                ))}
              </Box>
            </Box>

            {/* Contact & Social */}
            <Box className="text-center md:text-left">
              <Typography
                variant="h6"
                className="text-xl font-bold mb-6 text-slate-900 dark:text-white"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                {siteConfig.footer.connectTitle}
              </Typography>
              
              {/* Contact Info */}
              <Box className="space-y-3 mb-6">
                <Box className="flex items-center justify-center md:justify-start gap-3">
                  <Email className="text-accent text-lg" />
                  <Typography
                    variant="body2"
                    className="text-slate-600 dark:text-gray-300"
                    sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                  >
                    {siteConfig.email}
                  </Typography>
                </Box>
                <Box className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="text-accent text-lg" />
                  <Typography
                    variant="body2"
                    className="text-slate-600 dark:text-gray-300"
                    sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                  >
                    {siteConfig.phone}
                  </Typography>
                </Box>
              </Box>

              {/* Social Links */}
              <Box className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-900/5 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-full hover:bg-slate-900/10 dark:hover:bg-white/20 hover:border-slate-400 dark:hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm ${social.color}`}
                    aria-label={social.label}
                    style={{ animationDelay: social.delay }}
                    sx={{
                      '&:hover': {
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                      }
                    }}
                  >
                    <social.icon />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Divider */}
          <Box className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-gray-600 to-transparent mb-8"></Box>

          {/* Bottom Section */}
          <Box className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Typography
              variant="body2"
              className="text-sm text-slate-500 dark:text-gray-400 tracking-wider"
              sx={{ fontFamily: 'CentraNo2, sans-serif' }}
            >
              {siteConfig.footer.copyright}
            </Typography>

            <Typography
              variant="body2"
              className="text-sm text-slate-500 dark:text-gray-400"
              sx={{ fontFamily: 'CentraNo2, sans-serif' }}
            >
              {siteConfig.footer.builtWith}
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Scroll to Top Button */}
      <Box className="fixed bottom-8 right-8 z-50">
        <IconButton
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-accent to-purple-600 text-white hover:from-purple-600 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          sx={{
            '&:hover': {
              boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
            }
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      </Box>

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 z-0">
        <Box className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-10 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></Box>
        <Box className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"></Box>
      </Box>
    </Box>
  );
};
