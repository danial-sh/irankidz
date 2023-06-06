import "./style/App.css";
import { React, useState, useEffect } from "react";
import Header from "./component/header";
import Navbar from "./component/main-navbar";
import Space from "./component/space";
import Colection from "./component/main-collection/indx";
import Services from "./component/main-services";
import Categoryslider from "./component/main-category-swiper";
import Dollandcar from "./component/main-car-doll";
import Newestirankidz from "./component/main-newest";
import Latestproducts from "./component/main-latestproduct";
import Clothsets from "./component/main-sets-clothes";
import Toysset from "./component/main-sets-toys";
import Games from "./component/main-sets-games";
import Companys from "./component/main-famous-companys";
import Buyerbox from "./component/buy-box";
import Most from "./component/mostest";
import Call from "./component/call";
import Footer from "./component/footer";
import Footerend from "./component/footer-end";
import Shopingcard from "./component/shopingcard";
function App() {
  const [productlist, setproductlist] = useState(false);
  const [prices, setprices] = useState([]);
  const [data, setdata] = useState([]);
  const [succes, setsucces] = useState();
  const close_list = () => {
    setproductlist(false);
  };
  const productbuylist = (event, v, index, myData) => {
    setproductlist(true);
    if (!data.some((item) => v.id === item.id)) {
      setdata((e) => [...e, v]);
      setprices((e) => [...e, v.number]);
    } else {
    }
    myData = v;
  };
  const productbuylistshow = (event) => {
    setproductlist(true);
  };

  const productaction = (event, v, i) => {
    setdata(
      data.map((value, i) => {
        if (v.settingaction == false) {
          v.settingaction = true;
        } else {
          v.settingaction = false;
        }
        return value;
      })
    );
  };
  return (
    <div className="App">
      <Buyerbox
        productbuylistshow={productbuylistshow}
        productcount={data.length}
      />
      <Header />
      <Space />
      <Navbar />
      <Colection />
      <Services />
      <Categoryslider />
      <Dollandcar />
      <Newestirankidz
        productbuylist={(event, v, i) => productbuylist(event, v, i)}
      />
      <Latestproducts
        productbuylist={(event, v, i) => productbuylist(event, v, i)}
      />
      <Clothsets
        productbuylist={(event, v, i) => productbuylist(event, v, i)}
      />
      <Toysset productbuylist={(event, v, i) => productbuylist(event, v, i)} />
      <Games productbuylist={(event, v, i) => productbuylist(event, v, i)} />
      <Companys />
      <Most productbuylist={(event, v, i) => productbuylist(event, v, i)} />
      <Call />
      <Footer />
      <Footerend />
      <Shopingcard
        productaction={(event, v, i) => productaction(event, v, i)}
        data={data}
        activated={productlist}
        close={close_list}
        exsist={data.length > 0 ? true : false}
        product_count={1}
        price_count={
          data.length > 0
            ? prices.reduce((num, total) => num + total).toLocaleString()
            : 0
        }
      />
    </div>
  );
}

export default App;
