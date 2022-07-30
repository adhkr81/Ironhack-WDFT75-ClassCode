import Navbar from "./components/Navbar";
import style from "./cssModular.module.css";
import StichElvis from "./assets/images/stich-elvis.jpg";

function App() {
  console.log(style);
  return (
    <div className={style.container}>
      <h1>Hello</h1>
      <Navbar />
      <img src={StichElvis} alt="Stich Elvis" />
    </div>
  );
}

export default App;
