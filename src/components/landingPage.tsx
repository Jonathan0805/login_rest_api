import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

export default function LandingPage() {
    // @ts-ignore
    // const user = useSelector(state => state.logged_user);
    
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const user = location.state.name;

    const logOut = (e: any) => {
        // confirm("Are you sure you want to logout");
        dispatch({
            type: "LOGOUT"
        })
        navigate("/");
    }

    return (
        <div>
            {/* {user == null
                ? <h1>Please <a href="/login">click here</a> to login</h1>
                : */}
                <div className="welcome">
                    <h2 style={{ color: 'green' }}>{location.state.message}</h2>
                    <h1>Welcome {user}!</h1>
                    <Button type="primary" onClick={logOut}>
                        Log Out
                    </Button>
                </div>
                {/* } */}
        </div>
    );
}