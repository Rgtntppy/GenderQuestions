import React, {useEffect} from "react";
import { BrowserRouter as Navigate, useNavigate } from "react-router-dom";

const NotFoundRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/', { replace: true });
    }, [navigate]);

    return null;
};

export default NotFoundRedirect;