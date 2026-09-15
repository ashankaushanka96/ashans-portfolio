import { useState, useEffect } from "react";
import { Container, Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Download, Visibility, FileDownload } from "@mui/icons-material";
import Divider from "../Divider/Divider";
import { siteConfig } from "../../config/site";

const CvSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const cvPath = siteConfig.cvPath;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      component="section"
      id="cvsection"
      className="px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
      style={{ scrollMarginTop: 'var(--nav-height, 96px)', minHeight: 'calc(100vh - 88px)' }}
    >
      <Container maxWidth="xl" className="flex items-center justify-center h-full">
        <Box
          className={`w-full max-w-4xl mx-auto text-center flex flex-col transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ height: 'calc(100vh - 88px - 3rem)', maxHeight: 'calc(100vh - 88px - 3rem)' }}
        >
          {/* Section Header */}
          <Box className="mb-2 sm:mb-3 flex-shrink-0">
            <Typography
              variant="h2"
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-black tracking-tight mb-1 text-white"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
              }}
            >
              My Resume
            </Typography>
            <Typography
              variant="body1"
              className="text-xs sm:text-sm text-gray-300 max-w-3xl mx-auto leading-snug text-center"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                textAlign: 'center !important',
                display: 'block',
                width: '100%',
                margin: '0 auto',
              }}
            >
              Preview my comprehensive resume below or download a copy to learn more about my professional background, skills, and achievements.
            </Typography>
          </Box>

          {/* CV Preview */}
          <Box className="w-full flex-1 min-h-0 border border-gray-600/50 rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-xl">
            <Box className="relative w-full h-full">
              <iframe
                src={cvPath}
                title="CV Preview"
                className="w-full h-full border-0"
              />
              {/* Overlay for better UX */}
              <Box className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></Box>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box className="flex-shrink-0 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
            <Button
              variant="contained"
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<Visibility className="animate-bounce-x" />}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                '&:hover': {
                  boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
                }
              }}
            >
              View Resume
            </Button>

            <Button
              variant="outlined"
              href={cvPath}
              download
              startIcon={<FileDownload className="animate-bounce-x" />}
              className="border-2 border-white/30 text-white font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all duration-300 text-sm sm:text-base backdrop-blur-sm hover:bg-white/10"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Download PDF
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 -z-10">
        <Box className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></Box>
        <Box className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"></Box>
      </Box>



      <style>{`
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </Box>
  );
};

export default CvSection;
