import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
  state = {
    showInfo: false
  };

  onShowInfo = e => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  onDeleteContact = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, phone } = this.props.contact;
    const { showInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h3>
          Name: {name}{" "}
          <i
            onClick={this.onShowInfo}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            onClick={this.onDeleteContact.bind(this, id)}
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h3>
        {showInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteContact }
)(Contact);
