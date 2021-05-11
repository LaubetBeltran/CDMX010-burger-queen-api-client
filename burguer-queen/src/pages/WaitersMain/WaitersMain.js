import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import OrderCardsContainer from '../../components/OrderCardsWaiters/MainContainer/OrderCardsContainer';
import './WaitersMain.css';

const WaitersMain = () => {
	const [pending, setPending] = useState();
	let getData = async () => {
    let url = "http://localhost:3004/orders";
    let getFectchData = await fetch(url).then((resul) => resul.json());
    let filterPending = getFectchData.filter(
      (element) => element.status === "pending"
    );
		setPending(filterPending);
		console.log(getFectchData)
  };

  useEffect(() => {
    getData();
  }, []);
	return(
		<div className="mainWaiters-container">
			<Header/>
			<OrderCardsContainer
			pending={pending}
			/>
		</div>
	)
}
export default WaitersMain;