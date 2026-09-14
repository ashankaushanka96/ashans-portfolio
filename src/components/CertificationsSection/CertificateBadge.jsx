import PropTypes from "prop-types";

export const CertificateBadge = ({ title, logo, logoAlt }) => {
  return (
    <div
      className="relative w-full flex items-center justify-center rounded-xl"
      style={{
        aspectRatio: "16 / 10",
        background:
          "radial-gradient(circle at center, rgba(0,212,255,0.10) 0%, rgba(0,212,255,0) 70%)",
      }}
    >
      <div
        className="flex items-center justify-center rounded-2xl bg-white shadow-lg transition-transform duration-500 group-hover:scale-105"
        style={{ width: "62%", height: "80%", padding: "8%" }}
      >
        <img
          src={logo}
          alt={logoAlt || title}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

CertificateBadge.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
};
