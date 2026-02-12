import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import projeto01 from "../../../../assets/images/projeto01.png";
import projeto02 from "../../../../assets/images/projeto02.png";
import projeto03 from "../../../../assets/images/projeto03.png";
import projeto04 from "../../../../assets/images/projeto04.png";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        paddingBottom: theme.spacing(6),
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

    const projects = [
        {
            title: "EcoPoint Project",
            subtitle: "Mar 2025 - in progress",
            srcImg: projeto01,
            description: "Web application to locate and register collection points for recyclable materials, with interactive map, point registration and PWA support.",
            technologies: "Technologies: JavaScript, HTML, CSS, React, Node.js, Firebase",
            websiteURL: "https://ecopoint-web.vercel.app/",
            codeURL: "https://github.com/clodomilson-silva/Ecopoint_web",
            featured: false,
        },
        {
            title: "School System Project",
            subtitle: "Jun 2025 - in progress",
            srcImg: projeto02,
            description: "Complete school management system developed with Node.js + Express on the backend, React + TypeScript on the frontend and Firebase Firestore as the database.",
            technologies: "Technologies: TypeScript, React, Node.js, Express, Firebase",
            websiteURL: "https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888_1280.jpg",
            codeURL: "https://github.com/clodomilson-silva/sistema-escolarfreq",
            featured: false,
        },
        {
            title: "Muller e Lisboa Website",
            subtitle: "Oct 2025 - in progress",
            srcImg: projeto03,
            description: "A modern and responsive website for the construction company Muller & Lisboa, developed with React and Vite.",
            technologies: "Technologies: JavaScript, HTML, CSS, React, Lucide React ",
            websiteURL: "https://mullerelisboa.com.br/",
            codeURL: "https://github.com/clodomilson-silva/muller_lisboa.git",
            featured: false,
        },
        {
            title: "Loja DivertEduc",
            subtitle: "2025 - in progress",
            srcImg: projeto04,
            description: "Educational and entertainment store project with complete e-commerce functionality.",
            technologies: "Technologies: TypeScript, HTML, CSS, React",
            websiteURL: "https://diverteduc.vercel.app/",
            codeURL: "https://github.com/clodomilson-silva/Loja-DivertEduc.git",
            featured: false,
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={8} pb={4}>
                    <SectionTitle variant="h2" textAlign="center" color="primary.contrastText">
                        Projects
                    </SectionTitle>
                </Box>
                <Grid container spacing={4} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item xs={12} md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                    featured={project.featured}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection