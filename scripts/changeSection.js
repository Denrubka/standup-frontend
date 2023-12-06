import { createComedianBlock } from "./comedians.js";

export const initChangeSection = (
    bookingForm,
    event,
    booking,
    bookingTitle,
    eventButtonReserve,
    eventButtonEdit,
    comedians,
    bookingComediansList
) => {
    if(!eventButtonReserve) {
        return;
    }
    eventButtonReserve.style.transition =
        "transition: opacity 0.5s, visibility 0.5s;";
    eventButtonEdit.style.transition =
        "transition: opacity 0.5s, visibility 0.5s;";

    eventButtonReserve.classList.remove("event__button_hidden");
    eventButtonEdit.classList.remove("event__button_hidden");

    const changeSection = () => {
        event.classList.toggle("event_hidden");
        booking.classList.toggle("booking_hidden");

        if (!booking.classList.contains("booking_hidden")) {
            const comedianBlock = createComedianBlock(
                comedians,
                bookingComediansList
            );
            bookingComediansList.append(comedianBlock);
        }
    };

    eventButtonReserve.addEventListener("click", () => {
        changeSection();
        bookingForm.method = "POST";
        bookingTitle.textContent = "Забронируйте место в зале";
    });
    eventButtonEdit.addEventListener("click", () => {
        changeSection();
        bookingForm.method = "PATCH";
        bookingTitle.textContent = "Редактирование брони";
    });

    return changeSection;
};
