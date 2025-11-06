import { AppBar, MenuItem, Toolbar, styled, IconButton, Drawer, Box, useMediaQuery, useTheme, LinearProgress } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);

    const StyledAppBar = styled(AppBar)(() => ({
        backgroundColor: 'rgba(35, 35, 35, 0.95)',
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        zIndex: 1100,
    }))

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-between",
        padding: "0 24px",
    }))

    const DesktopMenu = styled(Box)(() => ({
        display: "flex",
        gap: "8px",
        alignItems: "center",
    }))

    const StyledMenuItem = styled(MenuItem)<{ active?: boolean }>(({ theme, active }) => ({
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        borderRadius: "8px",
        margin: "0 4px",
        padding: "8px 20px",
        position: "relative",
        fontWeight: active ? 600 : 400,
        color: active ? theme.palette.secondary.light : theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: 'rgba(96, 165, 250, 0.1)',
            transform: "translateY(-2px)",
        },
        '&::after': active ? {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "3px",
            backgroundColor: theme.palette.secondary.light,
            borderRadius: "3px 3px 0 0",
        } : {}
    }))

    const MobileMenuItem = styled(MenuItem)<{ active?: boolean }>(({ theme, active }) => ({
        cursor: "pointer",
        transition: "all 0.3s ease",
        borderRadius: "8px",
        margin: "8px 16px",
        padding: "12px 20px",
        fontSize: "1.1rem",
        fontWeight: active ? 600 : 400,
        color: active ? theme.palette.secondary.light : theme.palette.primary.contrastText,
        backgroundColor: active ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
        '&:hover': {
            backgroundColor: 'rgba(96, 165, 250, 0.15)',
        }
    }))

    const Logo = styled(Box)(({ theme }) => ({
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: "1.5rem",
        color: theme.palette.secondary.light,
        cursor: "pointer",
        transition: "all 0.3s ease",
        '&:hover': {
            transform: "scale(1.05)",
        }
    }))

    const StyledDrawer = styled(Drawer)(({ theme }) => ({
        '& .MuiDrawer-paper': {
            width: '280px',
            backgroundColor: theme.palette.primary.main,
            paddingTop: '20px',
        },
    }))

    const DrawerHeader = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px 16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    }))

    const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 1101,
        backgroundColor: 'transparent',
        '& .MuiLinearProgress-bar': {
            backgroundColor: theme.palette.secondary.light,
        }
    }))

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            setScrollProgress(progress);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'projects'];
            const offset = 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= offset && rect.bottom >= offset) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setMobileOpen(false);
    };

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
    ];

    return (
        <>
            <StyledLinearProgress variant="determinate" value={scrollProgress} />
            <StyledAppBar position="fixed">
                <StyledToolbar>
                    <Logo onClick={() => scrollToSection('home')}>
                        CS
                    </Logo>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setMobileOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <DesktopMenu>
                            {menuItems.map((item) => (
                                <StyledMenuItem
                                    key={item.id}
                                    active={activeSection === item.id}
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.label}
                                </StyledMenuItem>
                            ))}
                        </DesktopMenu>
                    )}
                </StyledToolbar>
            </StyledAppBar>

            <StyledDrawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
            >
                <DrawerHeader>
                    <Logo>CS</Logo>
                    <IconButton onClick={() => setMobileOpen(false)} color="inherit">
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>
                <Box>
                    {menuItems.map((item) => (
                        <MobileMenuItem
                            key={item.id}
                            active={activeSection === item.id}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </MobileMenuItem>
                    ))}
                </Box>
            </StyledDrawer>
        </>
    )
}

export default NavBar