//import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Header from "./Header";

const Layout = (props) => {
	return (
		<Container fluid>
			<Head>
				<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
			</Head>
			<Header />
			{props.children}
		</Container>
	);
};

export default Layout;
