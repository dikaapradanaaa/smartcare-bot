

const data = [
    {
        id: 1,
        title: "Dynamic Server Routing",
        slug: 'maybe-speaker',
        category: ['Shieldero Advanced Features'],
        description: 'Each time the VPN is activated, traffic is automatically directed through a randomly selected server to enhance anonymity and security.',
        src: '/img/project/project1/1New.jpeg',
        overlay: 6
    },
    {
        id: 2,
        title: "Cryptocurrency Support",
        slug: 'yaren-collection',
        src: '/img/project/project2/2New.jpeg',

       /* category: ['pen'], */
        description: 'Users have the option to pay for services using cryptocurrency for heightened privacy and security.',
        overlay: 6,

    },
    {
        id: 3,
        title: "Usage-Based Billing",
        slug: 'huggl-power-pack',
        src: '/img/project/project3/3New.jpeg',

       /* category: ['induction'],*/
        description: 'Unlike conventional fixed plans, Shieldero VPN enables users to pay for their data usage as they use the service.',
        overlay: 6
    },
    {
        id: 4,
        title: "Traffic Monitor",
        slug: 'principal-garden',
        /*category: ['Architecture'],*/
        src: '/img/project/project4/4New.jpeg',
        description: 'The integrated traffic analysis feature allows users to monitor outgoing traffic, enhancing network management and security.',
        overlay: 2
    },
    /*{
        id: 5,
        title: "Small Silver Car",
        slug: 'small-silver-car',
        src: '/img/project/project5/1.jpg',

        category: ['Photography', 'Car'],
        description: 'Cal was first. The first public university in the great state of California.',
        overlay: 5
    },
    {
        id: 6,
        title: "Lengshuikeng",
        slug: 'lengshuikeng',
        category: ['Photography'],
        src: '/img/project/project6/1.jpg',
        description: 'Sometimes, we need to check the time.',
        overlay: 4
    }*/
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};