export const buildingDescriptions = {
    highTechBuilding: "High Tech Building: A state-of-the-art facility with modern amenities.",
    Mirae_Hall: "The hub of advanced research at the university, featuring high-tech research facilities and seminar rooms. It is a space for creative and innovative projects.",
    centennialBuilding: "Centennial Building: Celebrating 100 years of academic excellence.",
    Frontier_Hall: "Library: A place for learning and knowledge.",
    studentCenter: "Student Center: A hub for student activities and services.",
    // 다른 15개 건물 소개 추가
};


export function updateBuildingInfo(buildingName) {
    const infoContainer = document.getElementById("info-container");
    const description = buildingDescriptions[buildingName] || "No description available for this building.";
    infoContainer.querySelector("p").textContent = description;
}