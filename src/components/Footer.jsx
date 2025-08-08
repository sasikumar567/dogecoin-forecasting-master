const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1e1e1e",
        color: "#FFD700",
        textAlign: "center",
        padding: "20px 10px",
        borderTop: "1px solid #FFD700",
        fontSize: "14px",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Dogecoin Dashboard. All rights
        reserved by Sasikumar & Iraianbu.
      </p>
    </footer>
  );
};
export default Footer;
