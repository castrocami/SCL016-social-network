export const footer = () => {
    const footerDiv = document.createElement("div")
    footerDiv.id = "footer-div";
    const footerLi = document.createElement("li");
    footerLi.id = "footer-li";


    footerDiv.appendChild(footerLi);
    return footerDiv;
}