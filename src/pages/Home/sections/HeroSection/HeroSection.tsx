import { Box, Container, Grid, Typography, styled, IconButton, Chip } from "@mui/material"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/cv.pdf";

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "300px",
        height: "300px",
        border: `3px solid ${theme.palette.secondary.light}`,
        borderRadius: "50%",
        position: "relative",
        objectFit: "cover",
        boxShadow: `0 0 40px rgba(37, 99, 235, 0.3), 0 0 80px rgba(37, 99, 235, 0.1)`,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        '&:hover': {
            transform: "scale(1.05) rotate(5deg)",
            boxShadow: `0 0 60px rgba(37, 99, 235, 0.5), 0 0 120px rgba(37, 99, 235, 0.2)`,
            borderColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.down('md')]: {
            width: "250px",
            height: "250px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "200px",
            height: "200px",
        }
    }));

    const AvatarWrapper = styled(Box)(() => ({
        position: "relative",
        display: "inline-block",
        '&::before': {
            content: '""',
            position: "absolute",
            top: "-10px",
            left: "-10px",
            right: "-10px",
            bottom: "-10px",
            background: "linear-gradient(135deg, #2563eb, #60a5fa, #2563eb)",
            borderRadius: "50%",
            opacity: 0.3,
            filter: "blur(20px)",
            zIndex: -1,
            animation: "pulse 3s ease-in-out infinite",
        },
        '@keyframes pulse': {
            '0%, 100%': {
                opacity: 0.3,
                transform: "scale(1)",
            },
            '50%': {
                opacity: 0.5,
                transform: "scale(1.05)",
            }
        }
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "60px",
        [theme.breakpoints.up('md')]: {
            paddingTop: "120px",
        },
    }));

    const SocialLinks = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    }));

    const StyledIconButton = styled(IconButton)(({ theme }) => ({
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        color: theme.palette.secondary.light,
        transition: "all 0.3s ease",
        border: `1px solid rgba(96, 165, 250, 0.3)`,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.main,
            transform: "translateY(-4px)",
            boxShadow: `0 8px 20px rgba(37, 99, 235, 0.3)`,
        }
    }));

    const StatusChip = styled(Chip)(({ theme }) => ({
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        color: theme.palette.success.main,
        border: `1px solid ${theme.palette.success.main}`,
        fontWeight: 600,
        padding: "4px 8px",
        '& .MuiChip-icon': {
            color: theme.palette.success.main,
            animation: "blink 2s ease-in-out infinite",
        },
        '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.3 },
        }
    }));

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Clodomilson_Silva_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'profclodomilson@gmail.com';
        const subject = 'Contact from Portfolio';
        const body = 'Hello! I saw your portfolio...';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    return (
        <>
            <StyledHero id="home">
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box position="relative" pb={3}>
                                <Box width={"150%"} position="absolute" top={-100} right={0} sx={{ opacity: 0.6 }}>
                                    <AnimatedBackground />
                                </Box>
                                <Box textAlign="center">
                                    <AvatarWrapper>
                                        <StyledImg src={Avatar} alt="Clodomilson Silva" />
                                    </AvatarWrapper>
                                </Box>
                                <Box display="flex" justifyContent="center" mt={2}>
                                    <StatusChip
                                        icon={<Box component="span" sx={{ 
                                            width: 8, 
                                            height: 8, 
                                            borderRadius: '50%', 
                                            backgroundColor: 'success.main',
                                            display: 'inline-block'
                                        }} />}
                                        label="Available for work"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box textAlign={{ xs: "center", md: "left" }}>
                                <Typography color="primary.contrastText" variant="h1" pb={2}>
                                    Clodomilson Silva
                                </Typography>
                                <Typewriter text="I'm a Software Engineer" delay={120} variant="h3" color="primary.contrastText" />
                                
                                <SocialLinks>
                                    <StyledIconButton onClick={() => window.open("https://github.com/clodomilson-silva")} size="large">
                                        <GitHubIcon />
                                    </StyledIconButton>
                                    <StyledIconButton onClick={() => window.open("https://www.linkedin.com/in/clodomilson-silva-b406b61bb")} size="large">
                                        <LinkedInIcon />
                                    </StyledIconButton>
                                    <StyledIconButton onClick={handleEmail} size="large">
                                        <EmailIcon />
                                    </StyledIconButton>
                                </SocialLinks>

                                <Box mt={4}>
                                    <Grid container spacing={3} justifyContent={{ xs: "center", md: "flex-start" }}>
                                        <Grid item xs={10} sm={6} md={5}>
                                            <StyledButton onClick={handleDownload}>
                                                <DownloadIcon />
                                                <Typography>Download CV</Typography>
                                            </StyledButton>
                                        </Grid>
                                        <Grid item xs={10} sm={6} md={5}>
                                            <StyledButton onClick={handleEmail}>
                                                <EmailIcon />
                                                <Typography>Contact me</Typography>
                                            </StyledButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default HeroSection