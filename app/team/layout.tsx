"use client"

import { CalendarOutlined, DashboardOutlined, LoginOutlined, OrderedListOutlined, TeamOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd/es";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

enum Navigation {
    Dashboard = "dashboard",
    Checklist = "checklist",
    Calendar = "calendar",
    Members = "members",
    Login = "login"
}

const NavigationRoutes: { [key: string]: string } = {
    [Navigation.Dashboard]: "/team/dashboard",
    [Navigation.Checklist]: "/team/checklist",
    [Navigation.Calendar]: "/team/calendar",
    [Navigation.Members]: "/team/members",
    [Navigation.Login]: "/team/login"
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const onSelect = (key: string) => {
        router.push(NavigationRoutes[key])
    }

    return <Layout className="min-h-screen">
        <Header>
            <div className="w-full flex">
                <Menu
                    theme="dark"
                    className="min-w-0 flex grow"
                    mode="horizontal"
                    onSelect={(props) => { onSelect(props.key) }}
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
                <Menu
                    theme="dark"
                    className="min-w-0 flex"
                    mode="horizontal"
                    onSelect={(props) => { onSelect(props.key) }}
                    disabledOverflow
                    selectedKeys={[]}
                    items={[
                        {
                            label: "Login",
                            icon: <LoginOutlined />,
                            key: Navigation.Login,
                        }
                    ]}
                >
                </Menu>
            </div>
        </Header>
        <Content className="p-4 flex justify-center">{children}</Content>
        <Footer className="text-center font-light" color="volcano">
            Katy Robotics - Krish and Kevin
        </Footer>
    </Layout>
}