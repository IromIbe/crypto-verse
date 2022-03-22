import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./component/navbar/navbar";
import Cryptocurrencies from "./component/cryptocurrencies/Cryptocurrencies";
import Homepage from "./component/homepage/Homepage";
import Exchanges from "./component/exchange/Exchanges";
import CryptoDetails from "./component/cryptoDetails/CryptoDetails";
import News from "./component/news/News";

// console.log(process.env.REACT_APP_RAPIDAPI_KEY, "fgfgbdvc");
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="exchanges" element={<Exchanges />} />
              <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="crypto/:coinId" element={<CryptoDetails />} />
              <Route path="news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Cryptoverse <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="exchanges">Exchanges</Link>
            <Link to="news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
