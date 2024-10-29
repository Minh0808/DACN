import { BackgroundHome } from "./pages/Component/styled/pageHome";
import HomePage1 from "./pages/homePage1";
import PageHome2 from "./pages/homePage2";
import PageHome3 from "./pages/homePage3";
import PageHome4 from "./pages/homePage4";
import PageHome5 from "./pages/homePage5";

const HomePage: React.FC = () => {
  return (
    <BackgroundHome
      style={{
        backgroundImage: `url("./images/HomeIcon/bg-new-min.png")`,
      }}
    >
      <HomePage1 />
      <PageHome2 />
      <PageHome3 />
      <PageHome4 />
      <PageHome5 />
    </BackgroundHome>
  );
};
export default HomePage;
