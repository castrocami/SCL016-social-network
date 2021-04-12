export const welcome = () => {
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Lola Go!";
    welcomeMessage.id = "welcome-message";
    return welcomeMessage;
};