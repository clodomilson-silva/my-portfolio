import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'outline'
    fullWidth?: boolean
}

const StyledButton: React.FC<StyledButtonProps> = ({ 
    children, 
    onClick, 
    variant = 'primary',
    fullWidth = true 
}) => {

    const ButtonBase = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "8px",
        padding: "12px 24px",
        width: fullWidth ? "100%" : "auto",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontSize: "1rem",
        fontWeight: 500,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        fontFamily: theme.typography.button.fontFamily,
        '&::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "0%",
            height: "100%",
            backgroundColor: theme.palette.secondary.light,
            transition: "width 0.4s ease",
            zIndex: -1,
        },
        '&:hover': {
            borderColor: theme.palette.secondary.light,
            color: theme.palette.primary.main,
            transform: "translateY(-2px)",
            boxShadow: `0 8px 20px rgba(37, 99, 235, 0.3)`,
            '&::before': {
                width: "100%",
            }
        },
        '&:active': {
            transform: "translateY(0)",
            boxShadow: `0 4px 10px rgba(37, 99, 235, 0.2)`,
        },
        '&:focus': {
            outline: `3px solid rgba(96, 165, 250, 0.4)`,
            outlineOffset: "2px",
        }
    }))

    const ButtonPrimary = styled(ButtonBase)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
        '&::before': {
            backgroundColor: theme.palette.secondary.dark,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.light,
            color: theme.palette.primary.main,
        }
    }))

    const ButtonSecondary = styled(ButtonBase)(({ theme }) => ({
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        borderColor: theme.palette.secondary.light,
        color: theme.palette.secondary.light,
        '&::before': {
            backgroundColor: theme.palette.secondary.light,
        },
        '&:hover': {
            color: theme.palette.primary.main,
        }
    }))

    const getButtonComponent = () => {
        switch (variant) {
            case 'primary':
                return ButtonPrimary;
            case 'secondary':
                return ButtonSecondary;
            case 'outline':
            default:
                return ButtonBase;
        }
    }

    const ButtonComponent = getButtonComponent();

    return (
        <ButtonComponent onClick={onClick}>
            {children}
        </ButtonComponent>
    )
}

export default StyledButton