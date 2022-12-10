import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

export default function LandingPage() {
    // @ts-ignore
    const user = useSelector(state => state.logged_user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = (e: any) => {
        // confirm("Are you sure you want to logout");
        dispatch({
            type: "LOGOUT"
        })
        navigate("/login");
    }

    return (
        <div>
            {!user
                ? <h1>Please <a href="/login">click here</a> to login</h1>
                :
                <div className="welcome"><h1>Welcome {user.name}!</h1>
                    <Button type="primary" onClick={logOut}>
                        Log Out
                    </Button>
                </div>}
        </div>
    );
}