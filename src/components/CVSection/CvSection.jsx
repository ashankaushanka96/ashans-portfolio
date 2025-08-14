import { Container, Box, Typography, Button } from "@mui/material";
import { Download } from "@mui/icons-material";

const CvSection = () => {
  const cvPath = "assets/Ashan_Pathiranage.pdf"; // Path to your CV file in the public folder

  return (
    <Box component="section" id="cvsection" className="py-8 sm:py-12 px-4 sm:px-0">
      <Container maxWidth="lg">
        <Box className="max-w-4xl mx-auto text-center bg-gray-900 p-4 sm:p-8 rounded-xl border border-gray-700 shadow-lg">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl font-bold mb-4 text-white"
          >
            My Resume
          </Typography>
          <Typography
            variant="body1"
            className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8"
          >
            Preview my Resume below or download a copy.
          </Typography>
          
          {/* CV Preview */}
          <Box className="w-full h-64 sm:h-80 lg:h-96 border border-gray-600 rounded-lg overflow-hidden mb-6 sm:mb-8 bg-gray-800">
            <iframe
              src={cvPath}
              title="CV Preview"
              className="w-full h-full border-0"
            />
          </Box>
          
          {/* Download Button */}
          <Box className="text-center">
            <Button
              variant="contained"
              href={cvPath}
              download
              startIcon={<Download />}
              className="bg-purple-600 hover:bg-pink-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base"
            >
              Download My Resume
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CvSection;
