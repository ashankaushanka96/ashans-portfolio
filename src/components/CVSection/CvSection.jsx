import { useState, useEffect } from "react";
import { Container, Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Download, Visibility, FileDownload } from "@mui/icons-material";
import Divider from "../Divider/Divider";

const CvSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const cvPath = "assets/Ashan_Pathiranage.pdf";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box 
      component="section" 
      id="cvsection" 
      className="px-4 sm:px-6 lg:px-8 overflow-hidden section-height flex items-center justify-center" 
      style={{ scrollMarginTop: '80px' }}
    >
      <Container maxWidth="xl">
        <Box className="flex flex-col items-center justify-center h-full">
          <Box className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 sm:p-12 lg:p-16 rounded-3xl border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              
              {/* Section Header */}
              <Box className="mb-8 sm:mb-12">
                <Typography
                  variant="h2"
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold mb-6 text-white"
                  sx={{
                    fontFamily: 'CentraNo2, sans-serif',
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
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center"
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
              <Box className="w-full h-80 sm:h-96 lg:h-[500px] border border-gray-600/50 rounded-2xl overflow-hidden mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
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
              <Box className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button
                  variant="contained"
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Visibility className="animate-bounce-x" />}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base sm:text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                  className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base sm:text-lg transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
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

              {/* Additional Info */}
              <Box className="mt-8 sm:mt-12 p-6 bg-gradient-to-r from-accent/10 to-purple-600/10 rounded-2xl border border-accent/20">
                <Typography
                  variant="body2"
                  className="text-sm sm:text-base text-gray-300"
                  sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                >
                  💡 <strong>Pro Tip:</strong> For the best viewing experience, download the PDF and open it in a PDF reader. 
                  The resume includes detailed information about my technical skills, work experience, and project achievements.
                </Typography>
              </Box>
            </Box>
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
