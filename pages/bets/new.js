import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";
import axios from "axios";

class BetNew extends Component {
  state = {
    betAmount: "100",
    betSender: "FQCQ4VQQRF43GFEGSDF",
    betRecipient: "AEFQ4FW4DASQ436645EG3DFDF",
    betSport: "NHL",
    betEvent_id: "teastingSubmit",
    betEvent_spread: 1234,
    betDescription: "This is a static test",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      await axios
        .post("http://localhost:3001/transaction", {
          amount: this.state.betAmount,
          sender: this.state.betSender,
          recipient: this.state.betRecipient,
          sport: this.state.betSport,
          event_id: this.state.betEvent_id,
          event_spread: this.state.betEvent_spread,
          description: this.state.betDescription
        })
        .then(function(response) {
          console.log(response);
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Bet</h3>

        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Bet Amount</label>
            <Input
              labelPosition="right"
              label="$ USD"
              value={this.state.betAmount}
              onChange={event =>
                this.setState({ betAmount: event.target.value })
              }
            />
          </Form.Field>

          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default BetNew;
