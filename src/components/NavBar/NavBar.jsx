import { useState, useEffect, useRef } from "react";
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from "../common/Logo";
import { navItems } from "../../config/navigation";
import { socialLinks } from "../../config/social";
import { siteConfig } from "../../config/site";
import { smoothScrollToElement } from "../../utils/smoothScroll";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const appBarRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const updateNavHeightVar = () => {
      if (appBarRef.current) {
        document.documentElement.style.setProperty('--nav-height', `${appBarRef.current.offsetHeight}px`);
      }
    };

    // The navbar's height itself animates (py-2/py-4 transition) when `scrolled`
    // flips, so measure now for the pre-transition size and again once the
    // 700ms transition (see className below) has settled on its final size.
    updateNavHeightVar();
    const settleTimeout = setTimeout(updateNavHeightVar, 750);
    window.addEventListener('resize', updateNavHeightVar);
    return () => {
      clearTimeout(settleTimeout);
      window.removeEventListener('resize', updateNavHeightVar);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsVisible(true);

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = ['home', 'skills', 'certifications', 'experience', 'projects', 'cvsection'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (event, value) => {
    event?.preventDefault();
    setActiveLink(value);
    setMobileOpen(false);
    // Force the navbar into its final (scrolled) height *before* measuring it —
    // otherwise a click from the very top reads the taller unscrolled height,
    // the navbar then shrinks mid-scroll once scrollY passes 50, and the
    // section lands short with a sliver of the previous section showing above it.
    setScrolled(true);

    requestAnimationFrame(() => {
      const element = document.getElementById(value);
      const navHeight = appBarRef.current?.offsetHeight ?? 88;
      smoothScrollToElement(element, navHeight);
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center h-full flex flex-col">
      {/* Close Button */}
      <Box className="flex justify-end p-4">
        <IconButton
          onClick={handleDrawerToggle}
          className="text-white hover:bg-white/10 rounded-full transition-all duration-300"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      {/* Navigation Items */}
      <List className="flex-1 flex flex-col justify-center">
        {navItems.map((item, index) => (
          <ListItem key={item.id} disablePadding className="mb-2">
            <ListItemText
              primary={
                <a
                  href={item.href}
                  className={`block px-6 py-4 text-lg font-medium transition-all duration-500 transform hover:scale-105 rounded-xl ${
                    activeLink === item.id 
                      ? "text-white bg-gradient-to-r from-accent/20 to-purple-600/20 border border-accent/30 shadow-lg" 
                      : "text-white/80 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                  onClick={(e) => onUpdateActiveLink(e, item.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              }
            />
          </ListItem>
        ))}
      </List>
      
      {/* Social Links */}
      <Box className="p-6">
        <Typography variant="body2" className="text-white/60 mb-4 text-sm">
          Connect with me
        </Typography>
        <Box className="flex justify-center space-x-4">
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm ${social.color}`}
              aria-label={social.label}
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
  );

  return (
    <>
      <AppBar
        ref={appBarRef}
        position="fixed"
        className={`transition-all duration-700 backdrop-blur-md ${
          scrolled ? "py-2 shadow-2xl" : "py-4"
        }`}
        elevation={0}
        sx={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(7, 11, 20, 0.98) 0%, rgba(10, 16, 32, 0.97) 100%)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar className="justify-between px-2 sm:px-4">
            {/* Logo */}
            <Fade in={isVisible} timeout={1000}>
              <Box className="flex items-center">
                <a href="/ashans-portfolio/" className="transition-all duration-300 hover:scale-105">
                  <Logo />
                </a>
              </Box>
            </Fade>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Box className="flex items-center space-x-6 lg:space-x-8">
                  {/* Navigation Links */}
                  <Box className="flex space-x-6 lg:space-x-8">
                    {navItems.map((item, index) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className={`text-base lg:text-lg font-medium tracking-wider transition-all duration-300 relative group ${
                          activeLink === item.id 
                            ? "text-white" 
                            : "text-white/80 hover:text-white"
                        }`}
                        onClick={(e) => onUpdateActiveLink(e, item.id)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {item.label}
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-600 transition-all duration-300 group-hover:w-full ${
                          activeLink === item.id ? 'w-full' : ''
                        }`}></span>
                      </a>
                    ))}
                  </Box>

                  {/* Social Links & CTA */}
                  <Box className="flex items-center space-x-3 lg:space-x-4 ml-6 lg:ml-8">
                    {/* Social Icons */}
                    <Box className="flex space-x-2 lg:space-x-3">
                      {socialLinks.map((social, index) => (
                        <IconButton
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-9 h-9 lg:w-10 lg:h-10 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm ${social.color}`}
                          aria-label={social.label}
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
                    
                    {/* CTA Button */}
                    <Button
                      variant="outlined"
                      href={siteConfig.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 lg:ml-4 px-6 lg:px-8 py-2 lg:py-3 text-sm lg:text-base font-bold border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                      sx={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '25px',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
                          boxShadow: '0 8px 25px rgba(255,255,255,0.3)',
                        }
                      }}
                    >
                      Let's Connect
                    </Button>
                  </Box>
                </Box>
              </Fade>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '400ms' }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className="text-white p-2 transition-all duration-300 hover:bg-white/10 rounded-full"
                  sx={{
                    '&:hover': {
                      transform: 'rotate(90deg)',
                    }
                  }}
                >
                  <MenuIcon className="text-2xl" />
                </IconButton>
              </Fade>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 320,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.95) 100%)',
            backdropFilter: 'blur(20px)',
            border: 'none',
            boxShadow: '0 0 50px rgba(0,0,0,0.8)',
          },
        }}
      >
        <Slide direction="left" in={mobileOpen} mountOnEnter unmountOnExit>
          <Box className="h-full">
            {drawer}
          </Box>
        </Slide>
      </Drawer>
    </>
  );
};
