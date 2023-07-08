import { React, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import style from "./Notif.module.css";
export default function Notification({
	notifetext,
	close_notfication,
	purchase,
	ceiling,
	setclosemodal,
	closemodal,
}) {
	useEffect(() => {
		return () => {
			setTimeout(() => {
				close_notfication();
			}, 3500);
		};
	}, [setclosemodal]);
	return (
		<div
			className={`${style.notification_contain} ${style.center} d-flex`}>
			<div
				className={
					notifetext
						? `${style.notification} model d-flex ${style.center}`
						: `${style.notification} -- ${style.notifnone} model`
				}>
				<div
					className={`${style.closebtn} ${style.center} d-flex cursor`}
					onClick={() => close_notfication()}>
					<AiOutlineClose />
				</div>
				<div
					className={`${style.notifcation_text} ${style.center} d-flex`}>
					{ceiling ? (
						<p
							className={
								notifetext
									? `${style.notifcation_text_para_show} model`
									: `${style.notifcation_text_para_none} model`
							}>
							محصول ({purchase} ) به سبد خرید شما اضافه شد
						</p>
					) : (
						<p
							className={
								notifetext
									? `${style.notifcation_text_para_show} model`
									: `${style.notifcation_text_para_none} mode`
							}>
							{purchase}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
