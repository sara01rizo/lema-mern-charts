import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import { logo, logo2 } from "../../../assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo} alt="Lema logo" width="28px" />
                ) : (
                    <img src={logo2} alt="Lema logo - 2" width="140px" />
                )}
            </Link>
        </Button>
    );
};
