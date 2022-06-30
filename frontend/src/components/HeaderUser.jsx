import HeaderLogo from "./HeaderLogo";

function HeaderUser({ title }) {
  return (
    <div className="header-container">
      <HeaderLogo />
      <h2 className="header-title">{title.toUpperCase()}</h2>
    </div>
  );
}

export default HeaderUser;
