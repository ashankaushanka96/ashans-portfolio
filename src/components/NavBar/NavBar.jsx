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
  useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from "../../assets/img/logonew.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMobileOpen(false);
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
    { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/ashan-kaushanka/", label: "LinkedIn" },
    { icon: <FacebookIcon />, href: "https://www.facebook.com/ashan.kaushanka/", label: "Facebook" },
    { icon: <GitHubIcon />, href: "https://github.com/ashankaushanka96", label: "GitHub" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center">
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemText
              primary={
                <a
                  href={item.href}
                  className={`block px-4 py-3 text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeLink === item.id 
                      ? "text-white opacity-100 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-lg" 
                      : "text-white opacity-75 hover:opacity-100 hover:bg-white/10 rounded-lg"
                  }`}
                  onClick={() => onUpdateActiveLink(item.id)}
                >
                  {item.label}
                </a>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        className={`transition-all duration-500 backdrop-blur-md ${
          scrolled ? "bg-black/80 py-0 shadow-2xl" : "bg-transparent py-2 sm:py-4"
        }`}
        elevation={0}
        sx={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar className="justify-between px-2 sm:px-4">
            <Box className="flex items-center">
              <a href="/ashans-portfolio/" className="w-12 sm:w-16 transition-transform duration-300 hover:scale-110">
                <img src={logo} alt="Logo" className="w-full h-auto drop-shadow-lg" />
              </a>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box className="flex items-center space-x-4 lg:space-x-6">
                <Box className="flex space-x-4 lg:space-x-6">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`text-base lg:text-lg font-normal tracking-wider transition-all duration-300 relative group ${
                        activeLink === item.id 
                          ? "text-white opacity-100" 
                          : "text-white opacity-75 hover:opacity-100"
                      }`}
                      onClick={() => onUpdateActiveLink(item.id)}
                    >
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-600 transition-all duration-300 group-hover:w-full ${
                        activeLink === item.id ? 'w-full' : ''
                      }`}></span>
                    </a>
                  ))}
                </Box>

                <Box className="flex items-center space-x-2 lg:space-x-3 ml-4 lg:ml-6">
                  <Box className="flex space-x-1 lg:space-x-2">
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm"
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
                  
                  <Button
                    variant="outlined"
                    href="https://www.linkedin.com/in/ashan-kaushanka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 lg:ml-4 px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg font-bold border-white/50 text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    sx={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
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
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
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
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.9) 100%)',
            backdropFilter: 'blur(20px)',
            border: 'none',
            boxShadow: '0 0 50px rgba(0,0,0,0.8)',
          },
        }}
      >
        <Box className="pt-16 pb-4">
          {drawer}
          
          {/* Social Links in Mobile Drawer */}
          <Box className="flex justify-center space-x-4 mt-8 px-4">
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
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
          
          {/* Connect Button in Mobile Drawer */}
          <Box className="flex justify-center mt-6 px-4">
            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/ashan-kaushanka/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 text-lg font-bold border-white/50 text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
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
      </Drawer>
    </>
  );
};
