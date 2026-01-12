/*
  Missions Store Service
  Manages mission data shared between Company and Student dashboards
  Uses localStorage for persistence
*/

const MISSIONS_STORAGE_KEY = 'ikiraro_company_missions';

// Default missions that are always available
const defaultMissions = [
    {
        id: 'bio-1',
        title: 'Optimizing Coffee Yields',
        subject: 'Biology',
        description: 'Analyze soil pH levels from samples in Huye District to recommend fertilizer adjustments.',
        location: 'Huye, Southern Province',
        difficulty: 'Intermediate',
        points: 350,
        status: 'available',
        icon: 'potted_plant',
        color: 'green',
        company: 'Rwanda Agriculture Board',
        createdAt: '2025-01-01'
    },
    {
        id: 'phys-1',
        title: 'Solar Grid Calibration',
        subject: 'Physics',
        description: 'Calculate optimal panel angles for a new school project in Kayonza to maximize efficiency.',
        location: 'Kayonza, Eastern Province',
        difficulty: 'Advanced',
        points: 500,
        status: 'available',
        icon: 'solar_power',
        color: 'blue',
        company: 'Rwanda Energy Group',
        createdAt: '2025-01-02'
    },
    {
        id: 'fin-1',
        title: 'Mobile Money API Integration',
        subject: 'Fintech',
        description: 'Design a simple interface for a cooperative to track payments via MoMo API integration.',
        location: 'Kigali Innovation City',
        difficulty: 'Expert',
        points: 750,
        status: 'available',
        icon: 'account_balance_wallet',
        color: 'purple',
        company: 'Bank of Kigali',
        createdAt: '2025-01-03'
    }
];

// Get all missions (default + company-created)
export function getAllMissions() {
    const storedMissions = localStorage.getItem(MISSIONS_STORAGE_KEY);
    const companyMissions = storedMissions ? JSON.parse(storedMissions) : [];
    return [...defaultMissions, ...companyMissions];
}

// Get only company-created missions
export function getCompanyMissions() {
    const storedMissions = localStorage.getItem(MISSIONS_STORAGE_KEY);
    return storedMissions ? JSON.parse(storedMissions) : [];
}

// Add a new mission
export function addMission(mission) {
    const companyMissions = getCompanyMissions();
    const newMission = {
        ...mission,
        id: `mission-${Date.now()}`,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'available'
    };
    companyMissions.push(newMission);
    localStorage.setItem(MISSIONS_STORAGE_KEY, JSON.stringify(companyMissions));
    return newMission;
}

// Update a mission
export function updateMission(missionId, updates) {
    const companyMissions = getCompanyMissions();
    const index = companyMissions.findIndex(m => m.id === missionId);
    if (index !== -1) {
        companyMissions[index] = { ...companyMissions[index], ...updates };
        localStorage.setItem(MISSIONS_STORAGE_KEY, JSON.stringify(companyMissions));
        return companyMissions[index];
    }
    return null;
}

// Delete a mission
export function deleteMission(missionId) {
    const companyMissions = getCompanyMissions();
    const filtered = companyMissions.filter(m => m.id !== missionId);
    localStorage.setItem(MISSIONS_STORAGE_KEY, JSON.stringify(filtered));
    return true;
}

// Get mission by ID
export function getMissionById(missionId) {
    const allMissions = getAllMissions();
    return allMissions.find(m => m.id === missionId);
}

// Subject options for mission creation
export const subjectOptions = [
    { value: 'Biology', icon: 'potted_plant', color: 'green' },
    { value: 'Physics', icon: 'solar_power', color: 'blue' },
    { value: 'Fintech', icon: 'account_balance_wallet', color: 'purple' },
    { value: 'Health', icon: 'local_hospital', color: 'red' },
    { value: 'Agriculture', icon: 'grass', color: 'emerald' },
    { value: 'Technology', icon: 'computer', color: 'cyan' },
    { value: 'Environment', icon: 'eco', color: 'green' },
    { value: 'Business', icon: 'trending_up', color: 'orange' }
];

// Difficulty options
export const difficultyOptions = [
    { value: 'Beginner', points: 150 },
    { value: 'Intermediate', points: 350 },
    { value: 'Advanced', points: 500 },
    { value: 'Expert', points: 750 }
];
