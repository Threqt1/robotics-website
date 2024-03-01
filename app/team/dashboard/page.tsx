'use client';
import { Row, Col, List, Divider, Button } from "antd";
import { random } from "./welcomemsgs";
import { Calendar, theme } from 'antd';

const listthings = [
    'ur mom',
    'ur dad'
]


export default function DashboardPage() {
    return <div className="w-full px-10 py-5">
        <div className="flex gap-5">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-4xl leading-10 text-black"> {random} </h1>
                    <h2 className="font-normal text-base leading-6 text-gray-600">More text to fill in later</h2>
                </div>

                <div className="flex">
                    <Row gutter={16}>
                        
                    </Row>
                </div>

                <div className="flex gap-8 max-w-[40%]">
                    <div className="basis-1/2 flex flex-col bg-white rounded-md p-2">
                        <Divider orientation="center">Todo</Divider>
                        <List
                            size="small"
                            bordered
                            dataSource={listthings}
                            renderItem={(item) => <List.Item className="flex justify-between align-middle">
                                <h1>{item}</h1>
                                <Button> </Button>
                                </List.Item>}
                        />
                    </div>

                    <Calendar className='basis-1/2' fullscreen={false}/>
                </div>
            </div>

            <div className="flex">

            </div>
        </div>
    </div>
}