import artemisTour from "@/public/projects/artemis-tour.jpg";
import atrea1 from "@/public/projects/atrea/img1.png";
import atrea2 from "@/public/projects/atrea/img2.png";
import atrea3 from "@/public/projects/atrea/img3.png";
import beachTravel from "@/public/projects/beach-travel.jpg";
import edovolena from "@/public/projects/edovolena.jpg";
import emTravel from "@/public/projects/em-travel.jpg";
import gh1 from "@/public/projects/github-finder/img1.png";
import gh2 from "@/public/projects/github-finder/img2.png";
import innova from "@/public/projects/innova.jpg";
import carrers1 from "@/public/projects/integromat-careers/img1.png";
import careers2 from "@/public/projects/integromat-careers/img2.png";
import careers3 from "@/public/projects/integromat-careers/img3.png";
import help1 from "@/public/projects/integromat-help/img1.png";
import help2 from "@/public/projects/integromat-help/img2.png";
import help3 from "@/public/projects/integromat-help/img3.png";
import help4 from "@/public/projects/integromat-help/img4.png";
import jatour from "@/public/projects/jatour.jpg";
import mjd1 from "@/public/projects/mjd/img1.png";
import mjd2 from "@/public/projects/mjd/img2.png";
import mjd3 from "@/public/projects/mjd/img3.png";
import movie1 from "@/public/projects/movie-db/img1.png";
import movie2 from "@/public/projects/movie-db/img2.png";
import oryx from "@/public/projects/oryx.jpg";
import portfolio1 from "@/public/projects/portfolio-old/img1.png";
import portfolio2 from "@/public/projects/portfolio-old/img2.png";
import portfolio3 from "@/public/projects/portfolio-old/img3.png";
import scc1 from "@/public/projects/scc/img1.png";
import scc2 from "@/public/projects/scc/img2.png";
import sticky1 from "@/public/projects/sticky-notes/img1.png";
import sticky2 from "@/public/projects/sticky-notes/img2.png";
import travelTour from "@/public/projects/travel-tour.jpg";
import weather from "@/public/projects/weather-app/img1.png";
import yarotravel from "@/public/projects/yarotravel.jpg";
import { Project } from "./types";

export const TECHNOLOGIES = [
    "html",
    "css",
    "sass",
    "tailwind",
    "javascript",
    "jquery",
    "typescript",
    "react",
    "nextjs",
    "graphql",
    "restapi",
] as const;

export const PROJECTS: Project[] = [
    {
        description: "mjd",
        id: 1,
        images: [mjd1, mjd2, mjd3],
        link: "",
        released: "",
        technologies: ["react", "nextjs", "typescript", "tailwind", "graphql"],
        title: "Můj dům krok za krokem",
        type: "web",
    },
    {
        description: "atrea",
        id: 2,
        images: [atrea1, atrea2, atrea3],
        link: "https://www.uxf.cz/reference/atrea",
        released: "2023-09-01",
        technologies: ["react", "nextjs", "typescript", "tailwind", "graphql"],
        title: "Atrea Intranet",
        type: "app",
    },
    {
        description: "photovoltaics",
        id: 3,
        images: [scc1, scc2],
        link: "https://www.setricelecesko.cz/fotovoltaika",
        released: "2023-06-01",
        technologies: ["react", "nextjs", "typescript", "tailwind"],
        title: "Šetří celé Česko",
        type: "web",
    },
    {
        description: "integromat-careers",
        id: 4,
        images: [carrers1, careers2, careers3],
        link: "",
        released: "2021-05-01",
        technologies: [
            "html",
            "css",
            "sass",
            "javascript",
            "jquery",
            "restapi",
        ],
        title: "Integromat Careers",
        type: "web",
    },
    {
        description: "integromat-help",
        id: 5,
        images: [help1, help2, help3, help4],
        link: "",
        released: "2021-06-01",
        technologies: [
            "html",
            "css",
            "sass",
            "javascript",
            "jquery",
            "restapi",
        ],
        title: "Integromat Help center",
        type: "web",
    },
    {
        description: "github-finder",
        id: 6,
        images: [gh1, gh2],
        link: "https://react-github-finder-app-alpha.vercel.app/",
        released: "2023-02-01",
        technologies: ["react", "css", "sass", "restapi"],
        title: "GitHub Finder",
        type: "app",
    },
    {
        description: "weather-app",
        id: 7,
        images: [weather],
        link: "https://react-weather-app-iota-ruddy.vercel.app/",
        released: "2023-02-01",
        technologies: ["react", "css", "sass", "restapi"],
        title: "Weather App",
        type: "app",
    },
    {
        description: "portfolio-old",
        id: 8,
        images: [portfolio1, portfolio2, portfolio3],
        link: "https://mujweb.netlify.app/",
        released: "2020-04-01",
        technologies: ["html", "css", "sass", "javascript", "restapi"],
        title: "Portfolio v1",
        type: "web",
    },
    {
        description: "movie-finder",
        id: 9,
        images: [movie1, movie2],
        link: "https://movie-finder-app.netlify.app/",
        released: "2022-09-01",
        technologies: ["html", "css", "sass", "javascript", "restapi"],
        title: "Movie Finder",
        type: "app",
    },
    {
        description: "sticky-notes",
        id: 10,
        images: [sticky1, sticky2],
        link: "https://sticky-notes-app.netlify.app/",
        released: "2020-09-01",
        technologies: ["html", "css", "sass", "javascript", "restapi"],
        title: "Sticky Notes",
        type: "app",
    },
    {
        description: "yarotravel",
        id: 11,
        images: [yarotravel],
        link: "https://www.yarotravel.cz/",
        released: "2021-01-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "Yaro Travel",
        type: "web",
    },
    {
        description: "em-travel",
        id: 12,
        images: [emTravel],
        link: "https://www.emdovolena.cz/",
        released: "2020-11-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "Em Travel",
        type: "web",
    },
    {
        description: "e-dovolena",
        id: 13,
        images: [edovolena],
        link: "https://www.edovolena.cz/",
        released: "2020-09-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "eDovolená",
        type: "web",
    },
    {
        description: "jatour",
        id: 14,
        images: [jatour],
        link: "https://www.jatour.cz/",
        released: "2020-05-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "CA Jatour",
        type: "web",
    },
    {
        description: "oryx",
        id: 15,
        images: [oryx],
        link: "https://www.caoryx.cz/",
        released: "2020-03-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "CA Oryx",
        type: "web",
    },
    {
        description: "beach-travel",
        id: 16,
        images: [beachTravel],
        link: "https://www.beachtravel.cz/",
        released: "2019-10-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "BEACH TRAVEL",
        type: "web",
    },
    {
        description: "innova-travel",
        id: 17,
        images: [innova],
        link: "https://www.innova-travel.cz/",
        released: "2019-08-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "Innova travel",
        type: "web",
    },
    {
        description: "travel-tour",
        id: 18,
        images: [travelTour],
        link: "https://www.travel-tour.cz/",
        released: "2019-04-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "Travel Tour",
        type: "web",
    },
    {
        description: "artemis-tour",
        id: 19,
        images: [artemisTour],
        link: "https://www.artemis-tour.cz/",
        released: "2019-02-01",
        technologies: ["html", "css", "sass", "javascript", "jquery"],
        title: "Artemis Tour",
        type: "web",
    },
];
