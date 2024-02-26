"use client"

import { Calendar, theme } from "antd";

export default function CalendarPage() {
    const { token: { borderRadius } } = theme.useToken()

    return <div className="bg-white px-4">
        <Calendar style={{ borderRadius }} />
    </div>
}