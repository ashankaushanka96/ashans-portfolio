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
    { id: "skills", label: "Skills", href: "#skills" },
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
                  className={`block px-4 py-2 text-lg transition-opacity duration-300 ${
                    activeLink === item.id 
                      ? "text-white opacity-100" 
                      : "text-white opacity-75 hover:opacity-100"
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
        className={`transition-all duration-300 ${
          scrolled ? "bg-primary py-0" : "bg-transparent py-2 sm:py-4"
        }`}
        elevation={scrolled ? 4 : 0}
      >
        <Container maxWidth="lg">
          <Toolbar className="justify-between px-2 sm:px-4">
            <Box className="flex items-center">
              <a href="/ashans-portfolio/" className="w-12 sm:w-16">
                <img src={logo} alt="Logo" className="w-full h-auto" />
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
                      className={`text-base lg:text-lg font-normal tracking-wider transition-opacity duration-300 ${
                        activeLink === item.id 
                          ? "text-white opacity-100" 
                          : "text-white opacity-75 hover:opacity-100"
                      }`}
                      onClick={() => onUpdateActiveLink(item.id)}
                    >
                      {item.label}
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
                        className="w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                        aria-label={social.label}
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
                    className="ml-2 lg:ml-4 px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg font-bold border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
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
                className="text-white p-2"
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
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            border: 'none'
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
                className="w-12 h-12 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                aria-label={social.label}
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
              className="w-full px-6 py-3 text-lg font-bold border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Let's Connect
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
