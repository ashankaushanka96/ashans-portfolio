import { Container, Box, Typography, Button } from "@mui/material";
import { Download } from "@mui/icons-material";

const CvSection = () => {
  const cvPath = "assets/Ashan_Pathiranage.pdf"; // Path to your CV file in the public folder

  return (
    <Box component="section" id="cvsection" className="py-8 sm:py-12 px-4 sm:px-0 overflow-hidden">
      <Container maxWidth="lg">
        <Box className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm p-4 sm:p-8 rounded-xl border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl font-bold mb-4 text-white animate-fade-in-up"
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 1s ease-out',
              '@keyframes fadeInUp': {
                '0%': { transform: 'translateY(30px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              }
            }}
          >
            My Resume
          </Typography>
          <Typography
            variant="body1"
            className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 animate-fade-in-up"
            sx={{
              animation: 'fadeInUp 1s ease-out 0.3s both',
              '@keyframes fadeInUp': {
                '0%': { transform: 'translateY(30px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              }
            }}
          >
            Preview my Resume below or download a copy.
          </Typography>
          
          {/* CV Preview */}
          <Box className="w-full h-64 sm:h-80 lg:h-96 border border-gray-600/50 rounded-lg overflow-hidden mb-6 sm:mb-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <iframe
              src={cvPath}
              title="CV Preview"
              className="w-full h-full border-0"
            />
          </Box>
          
          {/* Download Button */}
          <Box className="text-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Button
              variant="contained"
              href={cvPath}
              download
              startIcon={<Download className="animate-bounce-x" />}
              className="bg-gradient-to-r from-purple-600 to-accent hover:from-accent hover:to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105 shadow-lg hover:shadow-xl"
              sx={{
                '&:hover': {
                  boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
                }
              }}
            >
              Download My Resume
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
      </Box>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
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
