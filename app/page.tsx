import Link from "next/link";
import { redirect } from "next/navigation";

export default function TestPage() {
    redirect("/team/dashboard")

    return <p></p>
}