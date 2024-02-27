"use client"

import { Checkbox, List, Progress, Space, theme } from "antd";
import Item from "antd/es/list/Item";

let data = [
    "this",
    "thisa",
    "that",
    "thata"
]

export default function ChecklistPage() {
    const { token: { borderRadius, colorPrimary } } = theme.useToken()

    return <div className="w-1/2 bg-white p-4 flex justify-center" style={{ borderRadius }}>
        <Space direction="vertical" className="w-full flex justify-center">
            <Progress percent={50} strokeColor={colorPrimary} />
            <List
                itemLayout="vertical"
                dataSource={data}
                split={false}
                renderItem={(item, i) => {
                    return <Item>
                        <Checkbox>{item}</Checkbox>
                    </Item>
                }}
            />
        </Space>
    </div>
}   