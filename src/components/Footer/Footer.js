import "./Footer.css";

const Footer = () => {
  // Get Current Year For Copyright
  let footer_copyright_year = new Date();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="copyright">
          © <span>{String(footer_copyright_year.getFullYear())}</span> | <span className="author">Steve chege oj</span>
        </div>
        <div className="links">
          <a href="https://github.com/stevochegeoj" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://twitter.com/chegesteve_OJ" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"> </i>
          </a>
          <a href="https://www.facebook.com/stevo.chegeoj/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="mailto:stevemedia19@gmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
