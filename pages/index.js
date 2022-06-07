import React, {useEffect, useContext} from 'react';
import { useRouter } from "next/router";

import TvShow from "../components/StartPage/TvShow/TvShow";
import Download from "../components/StartPage/Download/Download";
import Kids from "../components/StartPage/Kids/Kids";
import AndroidDownload from "../components/StartPage/AndroidDownload/AndroidDownload";
import Support from "../components/StartPage/Support/Support";
import AuthContext from '../store/auth-context';
import Banner from '../components/StartPage/Banner/Banner';

export default function Home() {
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  useEffect(() => {
    authCtx.isLoggedIn && route.replace('/Home')
  }, [authCtx, route]);
  return (
    <>
      <Banner />
      <TvShow />
      <Download />
      <Kids />
      <AndroidDownload />
      <Support/>
    </>
  );
}
