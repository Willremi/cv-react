import { styled, Tooltip } from "@mui/material";

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))`
    & .MuiTooltip-tooltip {
        background: #33658A;
        font-size: 16px;
        color: white;
        font-weight: bold;
    }
    .MuiTooltip-arrow {
        color: #33658A;
    }
    `;

export default StyledTooltip