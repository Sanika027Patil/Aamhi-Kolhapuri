// Add hover effect for team members
document.addEventListener("DOMContentLoaded", function () {
    let teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(member => {
        member.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
        });

        member.addEventListener("mouseout", function () {
            this.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});
