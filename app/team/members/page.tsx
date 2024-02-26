"use client"

import { Avatar, Layout, Space, Table, TableProps, Tag, theme } from "antd";

type PositionType = {
    color: string
    name: string
}

const Positions = {
    Builder: {
        color: "blue",
        name: "Builder"
    },
    Programmer: {
        color: "green",
        name: "Programmer"
    },
    Notebooker: {
        color: "gold",
        name: "Notebooker"
    },
    Officer: {
        color: "volcano",
        name: "Officer"
    },
    Admin: {
        color: "red",
        name: "Admin"
    }
}

type DataType = {
    key: string
    name: string
    position: PositionType
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (_, { name }) => {
            return <Space size={"small"}>
                <Avatar>{name.charAt(0)}</Avatar>
                <p>{name}</p>
            </Space>
        }
    },
    {
        title: "Position",
        dataIndex: "position",
        key: "position",
        render: (_, { position }) => {
            return <Tag color={position.color} key={position.name}>{position.name}</Tag>
        }
    }
]

const data: DataType[] = [
    {
        key: "drake",
        name: "Drake",
        position: Positions.Admin
    },
    {
        key: "harraz",
        name: "Harraz",
        position: Positions.Officer
    },
    {
        key: "krish",
        name: "Krish",
        position: Positions.Programmer
    },
    {
        key: "ethan",
        name: "Ethan",
        position: Positions.Builder
    },
    {
        key: "kevin",
        name: "Kevin",
        position: Positions.Notebooker
    }
]

export default function MembersPage() {
    const { token: { colorBgContainer } } = theme.useToken()

    return <Layout style={{ backgroundColor: colorBgContainer }}>
        <Table columns={columns} dataSource={data} bordered />
    </Layout>
}