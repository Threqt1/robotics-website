"use client"

import { CalendarOutlined, DashboardOutlined, OrderedListOutlined, TeamOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd/es";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

enum Navigation {
    Dashboard = "dashboard",
    Checklist = "checklist",
    Calendar = "calendar",
    Members = "members"
}

const NavigationRoutes: { [key: string]: string } = {
    [Navigation.Dashboard]: "/team/dashboard",
    [Navigation.Checklist]: "/team/checklist",
    [Navigation.Calendar]: "/team/calendar",
    [Navigation.Members]: "/team/members"
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const onSelect = (key: string) => {
        router.push(NavigationRoutes[key])
    }

    return <Layout className="min-h-screen">
        <Header>
            <Menu
                theme="dark"
                className="min-w-0 flex"
                mode="horizontal"
                onSelect={(props) => { onSelect(props.key) }}
                selectedKeys={[Navigation.Dashboard]}
                items={[
                    {
                        label: "Dashboard",
                        icon: <DashboardOutlined />,
                        key: Navigation.Dashboard,
                    },
                    {
                        label: "Checklist",
                        icon: <OrderedListOutlined />,
                        key: Navigation.Checklist
                    },
                    {
                        label: "Calendar",
                        icon: <CalendarOutlined />,
                        key: Navigation.Calendar
                    },
                    {
                        label: "Members",
                        icon: <TeamOutlined />,
                        key: Navigation.Members
                    }
                ]}
            />
        </Header>
        <Content className="p-4 flex justify-center">{children}</Content>
        <Footer className="text-center font-light" color="volcano">
            Katy Robotics - Krish and Kevin
        </Footer>
    </Layout>
}