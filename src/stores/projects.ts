import { writable } from 'svelte/store';

import Pridefultrinkets from '$lib/images/Pridefultrinkets.png';
import InclusiveMicro from '$lib/images/InclusiveMicro.png';
import SenecaVil from '$lib/images/SenecaVillage.png'
import Misinfo from '$lib/images/Misinfo.png'
import Thumb from '$lib/images/Thumb.png'

const projects = writable([
    {
        src: Pridefultrinkets,
        alt: '',
        quickDesc: 'A multi-sensory exhibit created for the Queer Youth Exhibition',
        longDesc: ' co-hosted by The Design Museum Everywhere. The exhibit utilizes small take home objects that a user approaches the table, it lights up and plays a small audio sample through a custom designed',
        projectTitle: '-Prideful Trinkets',
    },

    {
        src: InclusiveMicro,
        alt: '',
        quickDesc: 'A comprehensive urban development initiative',
        longDesc: ' involving a comprehensive analysis of urban conditions, including street usage, infrastructure, and noise pollution, using data from client consultations, online sources, and crash statistics from 2020-2023 to propose an improved roadway design.',
        projectTitle: '-Inclusive Micromobility System',


    },

    {
        src: SenecaVil,
        alt: '',
        quickDesc: 'The essay The Dynamics of Eminent Domain: Revisiting Urban Narratives, focus one eminent domains evolution',
        longDesc: ' through a series of court cases that slowly expanded the scope of the law as well as highlighting controversial implementations of eminent domain such as the story of Seneca Village. The essay concludes with suggestions to improve and redefine eminent domain powers.',
        projectTitle: '-The Dynamics of Eminent Domain',


    },

    {
        src: Misinfo,
        alt: '',
        quickDesc: 'Misinformation Mayhem is a collaborative board game that aims to educate players about the spread of misinformation.',
        longDesc: ' The game is designed to represent the exponential spread of misinformation, which eventually reaches a plateau due to a lack of viable targets.By playing Misinformation Mayhem, players can gain a better understanding of the patterns and spread of misinformation.The game is specifically targeted towards teenagers, who are often the most susceptible to misinformation due to their high levels of online activity and lack of experience with discerning fact from fiction.',
        projectTitle: '-Misinformation Mayhem',


    },

    {
        src: Thumb,
        alt: '',
        quickDesc: 'As the field of prosthetics evolves, it not only offers solutions for replacing lost limbs but also opens new avenues for augmenting human capabilities beyond their natural boundaries.',
        longDesc: ' The Third Thumb project epitomizes this shift, representing a convergence of robotics, and design to enhance the human bodys functionality. Third Thumb aims to redefine human potential by enabling users to perform complex tasks with unprecedented ease and efficiency, thus challenging traditional perceptions of disability and augmentation. By focusing on the integration of this technology with the human sensory- motor system, the Third Thumb project not only demonstrates the tangible benefits of advanced prosthetics in improving everyday life but also explores the future possibilities of human - machine symbiosis.',
        projectTitle: '-The Dynamics of Eminent Domain',


    },

]);
export default projects;