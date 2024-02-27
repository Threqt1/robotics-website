import { Row, Col } from "antd";
import { random } from "./welcomemsgs";
import { Calendar, theme } from 'antd';



export default function DashboardPage() {
    return <div className="w-full">
        <div className="flex gap-2">
            <div className="flex flex-col">
                <div className="flex flex-col gap-2 bg-white rounded-md p-3">
                    <h1 className="font-semibold text-4xl leading-10 text-black "> {random} </h1>
                    <h2 className="font-normal text-base leading-6 text-gray-600">More text to fill in later</h2>
                </div>
                <div className="flex gap-2 min-w-0">
                    <Calendar fullscreen={false}  />
                </div>
            </div>

            <div className="flex">

            </div>
        </div>
    </div>
}