import { writable } from 'svelte/store';
import toml from 'toml';
import type { ProjectData } from './projectTypes';
// Create a writable store with TypeScript type
const projectsStore = writable<ProjectData[]>([]);

// Function to load and parse the TOML file
async function loadProjects() {
    try {
        // Fetch the TOML file
        const response = await Event.fetch('$stores/projects.toml');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tomlText = await response.text();

        // Parse the TOML file
        const projectsData = toml.parse(tomlText);

        // Validate or transform projectsData to conform to ProjectData[]
        // This step depends on the structure of your TOML file and the data it contains

        // Update the store with the parsed data
        projectsStore.set(projectsData.projects);
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Call the function to load projects
loadProjects();

// Export the store
export default projectsStore;
