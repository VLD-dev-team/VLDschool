"use client";

import { useState } from "react"

export default function WelcomeTimer() {
    /* var date_actuelle = new Date();
    var date_evenement = new Date("Aug 30 00:00:00 2024");
    var total_secondes = (date_evenement.getTime() - date_actuelle.getTime()) / 1000;

    const [time, setTime] = useState("");


    if (total_secondes < 0) {
        setTime("00:00:00")
    }

    if (total_secondes > 0) {
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        const time = `${(jours != 0) ? `${jours}J ` : ""}${heures}:${minutes}:${secondes}`
        setTime(time);

    } else {
        setTime("00:00:00")
    } */

    return (
        <span className="font-semibold">
            1er septembre
        </span>
    )
}
