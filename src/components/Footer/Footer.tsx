import { Box, Container, IconButton, Typography, Grid, styled, Fade } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { useState, useEffect } from "react";

const Footer: React.FC = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    const StyledFooter = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        borderTop: `1px solid rgba(96, 165, 250, 0.1)`,
        position: "relative",
        '&::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.light}, transparent)`,
        }
    }));

    const SocialIconButton = styled(IconButton)(({ theme }) => ({
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        color: theme.palette.secondary.light,
        border: `1px solid rgba(96, 165, 250, 0.3)`,
        transition: "all 0.3s ease",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.main,
            transform: "translateY(-4px) rotate(5deg)",
            boxShadow: `0 8px 20px rgba(37, 99, 235, 0.3)`,
        }
    }));

    const BackToTopButton = styled(IconButton)(({ theme }) => ({
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        width: "56px",
        height: "56px",
        boxShadow: `0 8px 24px rgba(37, 99, 235, 0.4)`,
        zIndex: 1000,
        transition: "all 0.3s ease",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            transform: "translateY(-4px)",
            boxShadow: `0 12px 32px rgba(37, 99, 235, 0.5)`,
        },
        '&:active': {
            transform: "translateY(-2px)",
        }
    }));

    const FooterLink = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        cursor: "pointer",
        transition: "all 0.2s ease",
        fontSize: "0.9rem",
        opacity: 0.8,
        '&:hover': {
            color: theme.palette.secondary.light,
            transform: "translateX(4px)",
            opacity: 1,
        }
    }));

    const Divider = styled(Box)(() => ({
        width: "100%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.3), transparent)",
        margin: "24px 0",
    }));

    const ContactInfo = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        marginBottom: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        opacity: 0.8,
    }));

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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
    };

    return (
        <>
            <StyledFooter pt={6} pb={4}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h5" fontWeight={700} color="secondary.light" gutterBottom>
                                CS
                            </Typography>
                            <Typography variant="body2" color="primary.contrastText" sx={{ mb: 2, lineHeight: 1.7, opacity: 0.8 }}>
                                Software Engineer passionate about creating innovative digital solutions and teaching the next generation of developers.
                            </Typography>
                            <Box display="flex" gap={1.5}>
                                <SocialIconButton 
                                    size="small"
                                    onClick={() => window.open("https://github.com/clodomilson-silva")}
                                    aria-label="GitHub"
                                >
                                    <GitHubIcon fontSize="small" />
                                </SocialIconButton>
                                <SocialIconButton 
                                    size="small"
                                    onClick={() => window.open("https://www.linkedin.com/in/clodomilson-silva-b406b61bb")}
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon fontSize="small" />
                                </SocialIconButton>
                                <SocialIconButton 
                                    size="small"
                                    onClick={() => window.open("mailto:profclodomilson@gmail.com")}
                                    aria-label="Email"
                                >
                                    <EmailIcon fontSize="small" />
                                </SocialIconButton>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" fontWeight={600} color="primary.contrastText" gutterBottom>
                                Quick Links
                            </Typography>
                            <Box display="flex" flexDirection="column" gap={1}>
                                <FooterLink onClick={() => scrollToSection('home')}>Home</FooterLink>
                                <FooterLink onClick={() => scrollToSection('about')}>About Me</FooterLink>
                                <FooterLink onClick={() => scrollToSection('skills')}>Skills</FooterLink>
                                <FooterLink onClick={() => scrollToSection('projects')}>Projects</FooterLink>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" fontWeight={600} color="primary.contrastText" gutterBottom>
                                Get In Touch
                            </Typography>
                            <Box display="flex" flexDirection="column" gap={1.5}>
                                <ContactInfo>
                                    <EmailIcon fontSize="small" sx={{ color: 'secondary.light' }} />
                                    <Typography variant="body2">
                                        profclodomilson@gmail.com
                                    </Typography>
                                </ContactInfo>
                                <ContactInfo>
                                    <LocationOnIcon fontSize="small" sx={{ color: 'secondary.light' }} />
                                    <Typography variant="body2">
                                        Rio Grande do Sul, Brazil
                                    </Typography>
                                </ContactInfo>
                                <ContactInfo>
                                    <WorkIcon fontSize="small" sx={{ color: 'secondary.light' }} />
                                    <Typography variant="body2">
                                        Open to opportunities
                                    </Typography>
                                </ContactInfo>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={1}>
                        <Typography variant="body2" color="primary.contrastText" textAlign="center" sx={{ opacity: 0.7 }}>
                            © {new Date().getFullYear()} Clodomilson Silva. All rights reserved.
                        </Typography>
                        <Typography variant="body2" color="primary.contrastText" sx={{ opacity: 0.7 }}>
                            Made with React
                        </Typography>
                    </Box>
                </Container>
            </StyledFooter>

            <Fade in={showBackToTop}>
                <BackToTopButton onClick={scrollToTop} aria-label="Back to top">
                    <KeyboardArrowUpIcon />
                </BackToTopButton>
            </Fade>
        </>
    )
}

export default Footer