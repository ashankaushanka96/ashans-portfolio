import { useState, useEffect } from "react";
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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from "../../assets/img/logonew.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMobileOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(value);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "skills", label: "Skills & Tools", href: "#skills" },
    { id: "certifications", label: "Certifications", href: "#certifications" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "cvsection", label: "Resume", href: "#cvsection" },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/ashan-kaushanka/", label: "LinkedIn", color: "hover:shadow-blue-500/50" },
    { icon: <FacebookIcon />, href: "https://www.facebook.com/ashan.kaushanka/", label: "Facebook", color: "hover:shadow-blue-600/50" },
    { icon: <GitHubIcon />, href: "https://github.com/ashankaushanka96", label: "GitHub", color: "hover:shadow-purple-500/50" },
  ];

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
                  onClick={() => onUpdateActiveLink(item.id)}
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
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        className={`transition-all duration-700 backdrop-blur-md ${
          scrolled ? "bg-black/90 py-2 shadow-2xl" : "bg-transparent py-4"
        }`}
        elevation={0}
        sx={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%)' 
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
                <a href="/ashans-portfolio/" className="w-12 sm:w-16 transition-all duration-300 hover:scale-110 hover:rotate-3">
                  <img src={logo} alt="Logo" className="w-full h-auto drop-shadow-lg" />
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
                        onClick={() => onUpdateActiveLink(item.id)}
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
                          {social.icon}
                        </IconButton>
                      ))}
                    </Box>
                    
                    {/* CTA Button */}
                    <Button
                      variant="outlined"
                      href="https://www.linkedin.com/in/ashan-kaushanka/"
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
