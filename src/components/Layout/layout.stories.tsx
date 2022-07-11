import React from "react";
import Layout from "./Layout";

const { Header, Content, Footer, Sider } = Layout;

export default {
	title: "布局/Layout",
	component: Layout,
};

const ATplTempalte = (args: any) => {
	return (
		<>
			<Header></Header>
			<Content></Content>
			<Footer></Footer>
		</>
	);
};
export const defaultLayout: any = ATplTempalte.bind({});
defaultLayout.args = {
	percent: 59,
};
