"use client"

import { AppointmentScheduler } from "../../../../components/shared/AppointmentScheduler";

export default function bookAppointment(){
    return(
        <section className="w-full flex justify-center items-center bg-gray-100 p-20">
            <AppointmentScheduler/>
        </section>
    );
};