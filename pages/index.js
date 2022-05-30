import Banner from "../components/Banner/Banner";

import TvShow from "../components/TvShow/TvShow";
import Download from "../components/Download/Download";
import Kids from "../components/Kids/Kids";
import AndroidDownload from "../components/AndroidDownload/AndroidDownload";
import Support from "../components/Support/Support";

export default function Home() {
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
