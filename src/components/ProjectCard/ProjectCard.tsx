import { Grid, Typography, styled, Box, Chip } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
    featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL,
    featured = false
}) => {

    const ImageContainer = styled(Box)(() => ({
        position: "relative",
        width: "100%",
        height: "280px",
        overflow: "hidden",
        borderRadius: "12px",
        marginBottom: "20px",
        backgroundColor: "#1a1a1a",
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    }));

    const ImageOverlay = styled(Box)(() => ({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
        opacity: 0,
        transition: "opacity 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        '&:hover': {
            opacity: 1,
        }
    }));

    const QuickActionButton = styled("button")(({ theme }) => ({
        padding: "12px 24px",
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.3s ease",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(37, 99, 235, 0.4)",
        }
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "16px",
        border: featured 
            ? `2px solid ${theme.palette.secondary.main}` 
            : `2px solid rgba(96, 165, 250, 0.2)`,
        backgroundColor: "rgba(35, 35, 35, 0.6)",
        backdropFilter: "blur(10px)",
        color: theme.palette.primary.contrastText,
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        '&::before': featured ? {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
        } : {},
        '&:hover': {
            borderColor: theme.palette.secondary.light,
            transform: "translateY(-8px)",
            boxShadow: `0 16px 40px rgba(37, 99, 235, 0.25)`,
            backgroundColor: "rgba(42, 42, 42, 0.8)",
            [`& ${StyledImg}`]: {
                transform: "scale(1.1)",
            }
        }
    }));

    const TitleBox = styled(Box)(() => ({
        marginBottom: "16px",
    }));

    const FeaturedBadge = styled(Chip)(({ theme }) => ({
        position: "absolute",
        top: "16px",
        right: "16px",
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        fontWeight: 700,
        fontSize: "0.75rem",
        height: "24px",
        zIndex: 2,
    }));

    const TechTag = styled(Chip)(({ theme }) => ({
        margin: "4px",
        backgroundColor: 'rgba(96, 165, 250, 0.15)',
        color: theme.palette.secondary.light,
        border: `1px solid rgba(96, 165, 250, 0.3)`,
        fontSize: "0.75rem",
        fontWeight: 500,
        transition: "all 0.2s ease",
        '&:hover': {
            backgroundColor: 'rgba(96, 165, 250, 0.25)',
            transform: "scale(1.05)",
        }
    }));

    const parseTechnologies = (techString: string): string[] => {
        return techString
            .replace('Technologies:', '')
            .split(',')
            .map(tech => tech.trim())
            .filter(tech => tech.length > 0);
    };

    const techArray = parseTechnologies(technologies);

    return (
        <StyledCard>
            {featured && <FeaturedBadge label="FEATURED" />}
            
            <ImageContainer>
                <StyledImg src={srcImg} alt={title} />
                <ImageOverlay>
                    <QuickActionButton onClick={() => window.open(websiteURL)}>
                        <VisibilityIcon fontSize="small" />
                        View Live
                    </QuickActionButton>
                    <QuickActionButton onClick={() => window.open(codeURL)}>
                        <CodeIcon fontSize="small" />
                        Code
                    </QuickActionButton>
                </ImageOverlay>
            </ImageContainer>

            <TitleBox>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="secondary.light" sx={{ opacity: 0.8 }}>
                    {subtitle}
                </Typography>
            </TitleBox>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                {description}
            </Typography>

            <Box sx={{ mb: 3 }}>
                <Typography variant="caption" sx={{ opacity: 0.7, mb: 1, display: "block" }}>
                    Technologies:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                    {techArray.map((tech, index) => (
                        <TechTag key={index} label={tech} size="small" variant="outlined" />
                    ))}
                </Box>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(websiteURL)} variant="secondary" fullWidth={true}>
                        <VisibilityIcon fontSize="small" />
                        <Typography variant="body2">View Project</Typography>
                    </StyledButton>
                </Grid>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(codeURL)} variant="outline" fullWidth={true}>
                        <CodeIcon fontSize="small" />
                        <Typography variant="body2">View Code</Typography>
                    </StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard