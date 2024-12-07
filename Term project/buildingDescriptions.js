export const buildingDescriptions = {
    Administration_Bldg: "The administrative hub of SeoulTech, housing the President's Office, key administrative departments, and meeting rooms. It serves as the central space for university operations and policy decisions.",
    Dasan_Hall: "The main building for the College of Engineering, housing departments such as Mechanical System Design Engineering, Mechanical & Automotive Engineering, Safety Engineering, Materials Science & Engineering, Civil Engineering, and Architecture.",
    Changhak_Hall: "Primarily used by the College of Information and Communication departments.",
    Hyesung_Hall: "Home to the Shared Laboratory Practice Center, equipped with various experimental equipment and primarily used by first-year students for hands-on learning.",
    Chungun_Hall: "Used mainly by the College of Energy & Biotechnology.",
    Technopark: "A facility dedicated to Nano-IT industry-academia collaboration, featuring a semiconductor FAB.",
    Chanjo_Hall: "Focused on design and art-related departments, with studios and workshops for creative activities.",
    Frontier_Hall: "Used by the College of Engineering departments such as Mechanical System Design Engineering and Mechanical & Automotive Engineering, as well as the Industrial Information Systems major from the College of Technology Management.",
    Hi_Tech_Hall: "Features engineering practice rooms and departmental club rooms, where students, particularly those from Mechanical & Automotive Engineering, work on competition vehicles and conduct driving practice.",
    Centeral_Library: "The main academic hub of SeoulTech, offering advanced e-library systems and diverse facilities to support student learning and research.",
    Centeral_Library_Annex: "A supplementary space to the Central Library, housing additional reading rooms and storage for materials.",
    Student_Union_Bldg1: "Provides facilities such as student support centers, club rooms, and a cafeteria, supporting student life and activities.",
    International_Hall: "A hub for international exchange and support for international students, featuring language classrooms and conference rooms.",
    Davinch_Hall: "A creative learning space for the fusion of engineering and arts, equipped with studios and laboratories.",
    Eoui_Hall: "A building dedicated to liberal arts and foundational studies, equipped with lecture rooms and seminar spaces.",
    Buram_Dormitory: "A student dormitory offering comfortable living spaces and shared facilities.",
    KB_Dormitory: "A student dormitory offering comfortable living spaces and shared facilities.",
    Sunglim_Dormitory: "A residential space for SeoulTech students, providing a conducive environment for focused studies.",
    soolim_Dormitory: "A dormitory designed for student use, with spaces suitable for both studying and relaxation.",
    Noori_Dormitory: "A dormitory supporting communal living with various amenities and a secure environment.",
    The_100th_Memorial_Hall: "Built to commemorate the 100th anniversary of the university, it includes a large auditorium and exhibition spaces.",
    Student_Union_Bldg2: "A facility for student convenience, featuring club rooms, lounges, and amenities.",
    Sangsang_Hall: "A space for creative learning and research, equipped with laboratories and lecture rooms.",
    Areum_Hall: "Primarily used by arts-related departments, featuring studios and exhibition areas.",
    University_Gymnasium: "A facility for sports activities and events, including various sports equipment and a large gym.",
    Daeryuk_Hall: "A multipurpose building housing general lecture rooms and department offices.",
    Mugung_Hall: "A building with engineering laboratories and research spaces to support student practice and research.",
    Mugung_Hall_A: "A building with engineering laboratories and research spaces to support student practice and research.",
    Mirae_Hall: "A hub for IT and advanced technology studies, featuring state-of-the-art labs and research facilities.",
    Techno_Cube: "A space for industry-academic collaboration and entrepreneurship, with startup offices and research centers."
};

export function updateBuildingInfo(buildingName) {
    const infoContainer = document.getElementById("info-container");
    const description = buildingDescriptions[buildingName] || "No description available for this building.";
    infoContainer.querySelector("p").textContent = description;
}