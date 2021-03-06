import React, { Component } from "react";
// import { Link } from "../routes";
import Layout from "../components/Layout";
import SportTabs from "../components/SportTabs";
import { SportContext } from "../contexts/SportContext";
import { Container, Card } from "react-bootstrap";

class BetokenIndex extends Component {
	static contextType = SportContext;

	constructor(props) {
		super(props);
		this.state = {
			sportsData: [],
			blockchain: {},
			loadingData: false,
			fetchedSportData: false,
		};

		this.renderCurrentBets = this.renderCurrentBets.bind(this);
	}

	renderCurrentBets(blockchain) {
		const betItems = blockchain.openTransactions.map((bet) => {
			return <a>View Bet</a>;
		});

		return betItems;
	}

	render() {
		let { loadingData } = this.state;
		const { sportsData, blockchain, fetchedSportData } = this.context;

		let result;
		if (fetchedSportData) {
			result = (
				<Container fluid>
					<br />
					<SportTabs allSportsData={sportsData} />
					<h3>Open Bets</h3>
					{this.renderCurrentBets(blockchain)}
				</Container>
			);
		} else {
			result = (
				<Container fluid>
					<h3>Loading...</h3>
				</Container>
			);
		}

		return <Layout>{result}</Layout>;
	}
}

export default BetokenIndex;
