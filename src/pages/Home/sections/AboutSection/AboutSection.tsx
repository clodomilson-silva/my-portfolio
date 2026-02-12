import { Box, Card, Container, Grid, Typography, styled, LinearProgress } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "24px 20px",
        textAlign: "center",
        marginBottom: "10px",
        borderRadius: "16px",
        border: "2px solid rgba(96, 165, 250, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        '&::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s ease",
        },
        '&:hover': {
            backgroundColor: 'rgba(96, 165, 250, 0.05)',
            borderColor: theme.palette.secondary.light,
            transform: "translateY(-8px)",
            boxShadow: `0 12px 40px rgba(37, 99, 235, 0.2)`,
            '&::before': {
                transform: "scaleX(1)",
            },
            '& .card-icon': {
                transform: "scale(1.2) rotate(10deg)",
                color: theme.palette.secondary.light,
            }
        }
    }));

    const CardIcon = styled(Box)(({ theme }) => ({
        fontSize: "3rem",
        marginBottom: theme.spacing(2),
        color: theme.palette.secondary.light,
        transition: "all 0.3s ease",
    }));

    const StyledSkillBadge = styled(Card)(() => ({
        padding: "14px 18px",
        textAlign: "center",
        marginBottom: "10px",
        borderRadius: "12px",
        border: "2px solid transparent",
        color: "white",
        fontWeight: 600,
        fontSize: "0.9rem",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        minHeight: "110px",
        position: "relative",
        overflow: "hidden",
        '&::after': {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "0",
            height: "0",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.2)",
            transform: "translate(-50%, -50%)",
            transition: "width 0.6s, height 0.6s",
        },
        '&:hover': {
            transform: "translateY(-8px) scale(1.05)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
            '&::after': {
                width: "300px",
                height: "300px",
            },
            '& .skill-icon': {
                transform: "rotate(360deg) scale(1.2)",
            }
        }
    }));

    const SkillIcon = styled(Box)(() => ({
        transition: "all 0.6s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const SkillLevel = styled(LinearProgress)(() => ({
        width: "100%",
        height: "4px",
        borderRadius: "2px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        '& .MuiLinearProgress-bar': {
            borderRadius: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
        }
    }));

    const AboutText = styled(Typography)(({ theme }) => ({
        lineHeight: 1.8,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2),
        textAlign: "justify",
        '& strong': {
            color: theme.palette.secondary.light,
            fontWeight: 600,
        }
    }));

    const SectionTitle = styled(Typography)(({ theme }) => ({
        position: "relative",
        display: "inline-block",
        '&::after': {
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "4px",
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
            borderRadius: "2px",
        }
    }));

    const skillsSet = [
        { name: "Javascript", level: 90, color: "linear-gradient(135deg, #f7df1e 0%, #ffeb3b 100%)", textColor: "#000", icon: <JavascriptIcon sx={{ fontSize: "28px" }} /> },
        { name: "Python", level: 85, color: "linear-gradient(135deg, #3776ab 0%, #4dabf7 100%)", textColor: "#fff", icon: <CodeIcon sx={{ fontSize: "28px" }} /> },
        { name: "React Native", level: 75, color: "linear-gradient(135deg, #02569B 0%, #0175c2 100%)", textColor: "#fff", icon: <PhoneAndroidIcon sx={{ fontSize: "28px" }} /> },
        { name: "React", level: 90, color: "linear-gradient(135deg, #61dafb 0%, #21c7fc 100%)", textColor: "#000", icon: <WebIcon sx={{ fontSize: "28px" }} /> },
        { name: "Django", level: 80, color: "linear-gradient(135deg, #092e20 0%, #0f5132 100%)", textColor: "#fff", icon: <CodeIcon sx={{ fontSize: "28px" }} /> },
        { name: "Node.js", level: 85, color: "linear-gradient(135deg, #339933 0%, #68c43a 100%)", textColor: "#fff", icon: <CodeIcon sx={{ fontSize: "28px" }} /> },
        { name: "PostgreSQL", level: 80, color: "linear-gradient(135deg, #336791 0%, #4c9aca 100%)", textColor: "#fff", icon: <StorageIcon sx={{ fontSize: "28px" }} /> },
        { name: "Git", level: 90, color: "linear-gradient(135deg, #f05032 0%, #ff6b4a 100%)", textColor: "#fff", icon: <GitHubIcon sx={{ fontSize: "28px" }} /> },
        { name: "Docker", level: 75, color: "linear-gradient(135deg, #2496ed 0%, #0db7ed 100%)", textColor: "#fff", icon: <CloudIcon sx={{ fontSize: "28px" }} /> },
        { name: "HTML/CSS", level: 95, color: "linear-gradient(135deg, #e34f26 0%, #f06529 100%)", textColor: "#fff", icon: <WebIcon sx={{ fontSize: "28px" }} /> },
        { name: "Firebase", level: 85, color: "linear-gradient(135deg, #ffca28 0%, #ffc107 100%)", textColor: "#000", icon: <CloudIcon sx={{ fontSize: "28px" }} /> },
        { name: "Google Cloud", level: 80, color: "linear-gradient(135deg, #4285f4 0%, #5a9dfb 100%)", textColor: "#fff", icon: <CloudIcon sx={{ fontSize: "28px" }} /> }
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={8} mb={5}>
                    <SectionTitle variant="h2" textAlign="center">About me</SectionTitle>
                </Box>
                <Grid container spacing={4} display="flex" justifyContent="center" pb={5}>
                    <Grid item xs={12} sm={6} md={4}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <CardIcon className="card-icon">
                                    <WorkspacePremiumIcon fontSize="inherit" />
                                </CardIcon>
                                <Typography variant="h6" fontWeight={600} gutterBottom>Experience</Typography>
                                <Typography variant="h4" color="secondary.light" fontWeight={700}>3+</Typography>
                                <Typography color="text.secondary">years in Full Stack Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <CardIcon className="card-icon">
                                    <SchoolIcon fontSize="inherit" />
                                </CardIcon>
                                <Typography variant="h6" fontWeight={600} gutterBottom>Education</Typography>
                                <Typography variant="body1" fontWeight={500}>Postgraduate</Typography>
                                <Typography color="text.secondary">Software Engineering</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>

                <Box pb={4} px={{ xs: 2, md: 4 }}>
                    <AboutText>
                        I'm <strong>Clodomilson Silva</strong>, a developer with a passion for turning ideas into real digital solutions. On my GitHub account, <strong>clodomilson-silva</strong>, I share projects that demonstrate my versatility with technologies such as <strong>Python, JavaScript</strong> and modern frameworks—with special attention to code quality, versioning and automation.
                    </AboutText>
                    <AboutText>
                        Recently, I've developed projects that reflect my ability to build <strong>interactive interfaces</strong> with good practices and responsiveness. Other repositories include practical implementations, tests and clear documentation, showing my commitment to each stage of the development cycle.
                    </AboutText>
                    <AboutText>
                        As an <strong>Instructor at Senac Maranhão</strong>, I bring this experience to teaching, preparing new developers for the challenges of the market with practical cases, constant feedback and a focus on professional development.
                    </AboutText>
                </Box>

                <Box sx={{ 
                    width: "100%", 
                    height: "2px", 
                    background: "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent)",
                    my: 6
                }} />

                <Box id="skills" pt={2} mb={4}>
                    <SectionTitle variant="h3" textAlign="center" fontWeight={500}>Technical Skills</SectionTitle>
                </Box>
                <Box mb={8}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                                <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                    <StyledSkillBadge 
                                        variant="outlined"
                                        sx={{
                                            background: skill.color,
                                            color: skill.textColor,
                                            border: "none"
                                        }}
                                    >
                                        <SkillIcon className="skill-icon">
                                            {skill.icon}
                                        </SkillIcon>
                                        <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, zIndex: 1 }}>
                                            {skill.name}
                                        </Typography>
                                        <SkillLevel variant="determinate" value={skill.level} />
                                    </StyledSkillBadge>
                                </AnimationComponent>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection