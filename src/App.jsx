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
import Notification from "./component/notifcation";
import Delete from "./component/shopingcard/Delete";
function App() {
	const [productlist, setproductlist] = useState(false);
	const [notifetext, setnotfietext] = useState("");
	const [ceiling, setceiling] = useState(true);
	const [data, setdata] = useState([]);
	const [notife, setnotife] = useState(false);
	const close_list = () => {
		setproductlist(false);
	};
	const price = data.reduce((prev, cur, ind, arr) => prev + cur.number, 0);
	const productbuylist = (event, v, index, myData) => {
		setproductlist(true);
		if (!data.some(item => v.id === item.id)) {
			setnotfietext(v.name);
			setnotife(true);
			setceiling(true);
			setdata(e => [...e, v]);
		} else if ((notifetext == v.name, notife == false)) {
			setnotife(true);
			setceiling(false);
			setnotfietext("سقف خرید این محصول 1 تعداد میباشد");
		}
	};
	const productbuylistshow = event => {
		setproductlist(true);
	};
	const close_notfication = e => {
		setnotife(false);
		console.log("h");
	};
	const productaction = (event, v, i) => {
		const arr = [...data];
		arr[i].settingaction = !arr[i].settingaction;
		setdata(arr);
	};
	const product_delete = (v, i) => {
		const arr = [...data];
		arr[i].delete_menu = !arr[i].delete_menu;
		setdata(arr);
	};
	const close_delete_menu = (v, i) => {
		const arr = [...data];
		arr[i].delete_menu = !arr[i].delete_menu;
		setdata(arr);
	};
	const accept_delete_product = (v, i) => {
		setdata(data.filter((item, index) => item.id !== v.id));
		data.reduce((prev, curr, ind, arr) => prev.number - curr, 0);
	};
	// useEffect(() => {
	// 	return () => {
	// 		setTimeout(() => {
	// 			close_notfication();
	// 		}, 3500);
	// 	};
	// }, []);
	return (
		<div className='App'>
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
				productbuylist={(event, v, i) =>
					productbuylist(event, v, i)
				}
			/>
			<Latestproducts
				productbuylist={(event, v, i) =>
					productbuylist(event, v, i)
				}
			/>
			<Clothsets
				productbuylist={(event, v, i) =>
					productbuylist(event, v, i)
				}
			/>
			<Toysset
				productbuylist={(event, v, i) =>
					productbuylist(event, v, i)
				}
			/>
			<Games
				productbuylist={(event, v, i) =>
					productbuylist(event, v, i)
				}
			/>
			<Companys />
			<Most
				productbuylist={(event, v, i) =>
					productbuylist(event, v, i)
				}
			/>
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
				price_count={price.toLocaleString()}
				delete_product={(v, i) => product_delete(v, i)}
				// delete component
				close_delete_menu={(e, v, i) => close_delete_menu(e, v, i)}
				accept_delete_product={(e, v, i) =>
					accept_delete_product(e, v, i)
				}
			/>
			<Notification
				notifetext={notife}
				purchase={notifetext}
				ceiling={ceiling}
				closemodal={notife}
				close_notfication={(e, v, i) => close_notfication(e, v, i)}
				setclosemodal={data}
			/>
		</div>
	);
}
export default App;
