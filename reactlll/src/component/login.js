import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { actions } from "../redux/stor/action";


const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (user) => { dispatch(actions.saveUser(user)) }
    }
}


export default compose(
    withRouter, connect(null, mapDispatchToProps))(function Login(props) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    })
   