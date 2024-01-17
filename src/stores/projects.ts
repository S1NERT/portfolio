import { writable } from 'svelte/store';

import Pridefultrinkets from '$lib/images/Pridefultrinkets.png';
import InclusiveMicro from '$lib/images/InclusiveMicro.png';

const projects = writable([
    {
        src: Pridefultrinkets,
        alt: '',
        quickDesc: 'A multi-sensory exhibit created for the Queer Youth Exhibition',
        longDesc: ' co-hosted by The Design Museum Everywhere. The exhibit utilizes small take home objects that a user approaches the table, it lights up and plays a small audio sample through a custom designed',
        projectTitle: 'Prideful Trinkets',
    },

    {
        src: InclusiveMicro,
        alt: '',
        quickDesc: 'A comprehensive urban development initiative',
        longDesc: ' involving a comprehensive analysis of urban conditions, including street usage, infrastructure, and noise pollution, using data from client consultations, online sources, and crash statistics from 2020-2023 to propose an improved roadway design.',
        projectTitle: 'Inclusive Micromobility System',


    },

]);

export default projects;