import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    errors: { name: "", phone: "" }
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      name,
      phone
    };

    //// SUBMIT CONTACT ////

    this.setState({
      name: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />

            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />

            <input
              type="submit"
              value="Add Conctact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
