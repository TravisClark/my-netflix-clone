import React, { useEffect, useState, useContext } from "react";
import Container from "../UI/Container";
import logo from "../../assets/netflix_official_logo_icon_168085.png";
import Image from "next/image";
import Link from "next/link";
import AuthContext from "../../store/auth-context";

function Navbar() {
  const [changeNavColor, setChangeNavColor] = useState(false);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    globalThis.addEventListener("scroll", () => {
      globalThis.scrollY > 10
        ? setChangeNavColor(true)
        : setChangeNavColor(false);
    });
  }, [changeNavColor]);

  useEffect(() => {
    authCtx.onAutoLogin();
  })

  return (
    <nav>
      <Container
        className={`${
          changeNavColor && "bg-black"
        } flex justify-between min-w-full py-6 px-14 h-max fixed z-30 transition duration-300`}
      >
        <Image src={logo} width={108} height={50} objectFit="contain" alt="" />
        <div className="flex space-x-4 self-center">
          <Link href="/auth">
            <button onClick={authCtx.onLogout} className="py-1 px-4 bg-mainColor rounded-md h-fit whitespace-nowrap text-white hover:bg-hoverColor transition duration-300">
              {authCtx.isLoggedIn ? 'Sign Out':'Sign In'}
            </button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
