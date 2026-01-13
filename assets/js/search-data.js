// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-events",
          title: "events",
          description: "I have contributed to the organization of these events",
          section: "Navigation",
          handler: () => {
            window.location.href = "/events/";
          },
        },{id: "nav-funding",
          title: "funding",
          description: "The research I conduct has been funded by these sources",
          section: "Navigation",
          handler: () => {
            window.location.href = "/funding/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Code from my research can be found in these repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "events-goodmap21",
          title: 'GoodMap21',
          description: "IEEE ECMR 2021 workshop",
          section: "Events",handler: () => {
              window.location.href = "/events/2021_ecml_workshop/";
            },},{id: "events-usr23",
          title: 'USR23',
          description: "IEEE ICRA 2023 workshop",
          section: "Events",handler: () => {
              window.location.href = "/events/2023_icra_workshop/";
            },},{id: "events-lfm24",
          title: 'LFM24',
          description: "IEEE/RSJ IROS 2024 workshop",
          section: "Events",handler: () => {
              window.location.href = "/events/2024_iros_workshop/";
            },},{id: "funding-ph-d-scholarship",
          title: 'Ph.D. scholarship',
          description: "3-year full Ph.D. scholarship",
          section: "Funding",handler: () => {
              window.location.href = "/funding/2014_sisvel/";
            },},{id: "funding-rose",
          title: 'ROSE',
          description: "",
          section: "Funding",handler: () => {
              window.location.href = "/funding/2017_rose/";
            },},{id: "funding-muswas",
          title: 'Muswas',
          description: "",
          section: "Funding",handler: () => {
              window.location.href = "/funding/2020_saab/";
            },},{id: "funding-santtu",
          title: 'SANTTU',
          description: "2-year co-innovation project on the development of semi-autonomous assistance systems for heavy industrial machines",
          section: "Funding",handler: () => {
              window.location.href = "/funding/2022_santtu/";
            },},{id: "funding-hypermaps",
          title: 'Hypermaps',
          description: "4-year research fellowship on multi-layer and semantic spatial representations for robotics",
          section: "Funding",handler: () => {
              window.location.href = "/funding/2023_hypermaps/";
            },},{id: "news-finnish-academy-research-fellowship-awarded-to-the-hypermaps-project",
          title: 'Finnish Academy Research Fellowship awarded to the Hypermaps project',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230517_hypermaps/";
            },},{id: "news-i-am-organizing-the-quot-unconventional-spatial-representations-quot-workshop-at-icra-2023",
          title: 'I am organizing the &amp;quot;Unconventional spatial representations&amp;quot; workshop at ICRA 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230525_icra23/";
            },},{id: "news-i-will-be-at-icra-2024-with-four-workshop-papers",
          title: 'I will be at ICRA 2024 with four workshop papers',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240508_icra24/";
            },},{id: "news-i-received-the-italian-national-scientific-habilitation-as-associate-professor",
          title: 'I received the Italian National Scientific Habilitation as Associate Professor',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240715_asn/";
            },},{id: "news-i-will-be-at-iros24-with-two-papers-and-as-organizer-of-a-workshop",
          title: 'I will be at IROS24 with two papers and as organizer of a...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240731_iros24/";
            },},{id: "news-best-paper-award-for-quot-season-invariant-gnss-denied-visual-localization-for-uavs-quot",
          title: 'Best Paper Award for &amp;quot;Season-Invariant GNSS-Denied Visual Localization for UAVs&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240930_best_paper_kinnari/";
            },},{id: "news-i-will-be-serving-in-the-equality-diversity-and-inclusion-group-of-my-school",
          title: 'I will be serving in the Equality, Diversity, and Inclusion group of my...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241121_elec_edi/";
            },},{id: "news-i-am-now-a-member-of-the-european-laboratory-for-learning-and-intelligent-systems-ellis",
          title: 'I am now a member of the European Laboratory for Learning and Intelligent...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250325_ellis_membership/";
            },},{id: "news-my-tenure-at-the-aalto-school-of-electrical-engineering-has-been-made-permanent",
          title: 'My tenure at the Aalto School of Electrical Engineering has been made permanent...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250619_permanent_position/";
            },},{id: "news-i-will-be-at-iros25-with-two-papers",
          title: 'I will be at IROS25 with two papers',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250728_iros25/";
            },},{id: "news-i-was-invited-to-give-a-guest-lecture-on-software-development-practices-at-tampere-university",
          title: 'I was invited to give a guest lecture on software development practices at...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251010_guest_lecture_tampere/";
            },},{id: "news-i-was-invited-to-give-a-guest-lecture-on-semantic-mapping-at-university-of-turku",
          title: 'I was invited to give a guest lecture on semantic mapping at University...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251209_guest_lecture_turku/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%72%61%6E%63%65%73%63%6F.%76%65%72%64%6F%6A%61@%61%61%6C%74%6F.%66%69", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/fverdoja", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/fverdoja", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9551-6186", "_blank");
        },
      },{
        id: 'social-publons',
        title: 'Publons',
        section: 'Socials',
        handler: () => {
          window.open("https://publons.com/a/AAU-2811-2020/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3DDM3_kAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=56685641600", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://research.aalto.fi/en/persons/francesco-verdoja", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
