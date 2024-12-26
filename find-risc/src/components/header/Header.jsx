import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="pai">
        <div>
          <img
            src="./src/images/dia-mundial-do-diabetes.png"
            alt="Simbolo da campanha diabetes"
            width={70}
          />
        </div>
        <div>
          <ul className="lista">
            <li>blog</li>
            <li>Sobre nós</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
