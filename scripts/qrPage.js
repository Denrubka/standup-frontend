import { getClient, getComedians } from "./api.js";
import { displayBooking, displayClientInfo } from "./display.js";
import { Notification } from "./Notification.js";
import { showQrController } from "./showQrController.js";

const getTicketNumber = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("t");
};

export const initQrPage = async () => {
    const clientInfo = document.querySelector(".booking__client-info");
    const bookingPerformance = document.querySelector(".booking__performance");

    const ticketNumber = getTicketNumber();

    if (ticketNumber) {
        const clientData = await getClient(ticketNumber);
        displayClientInfo(clientInfo, clientData);

        const comediansData = await getComedians();
        displayBooking(bookingPerformance, clientData,  comediansData);

        showQrController(bookingPerformance);
    } else {
        Notification.getInstance().show("Произошла ошибка, проверьте ссылку");
    }
};
