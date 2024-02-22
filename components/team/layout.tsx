import { CalendarOutlined, DashboardOutlined, OrderedListOutlined, TeamOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd/es";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Prop = {
    children?: React.ReactNode
}

export default function TeamLayoutComponent(props: Prop) {
    return <Layout>
        <Header>
            <Menu theme="dark" className="min-w-0 flex" mode="horizontal" items={[
                {
                    label: "Dashboard",
                    icon: <DashboardOutlined />,
                    key: "dashboard",
                },
                {
                    label: "Checklist",
                    icon: <OrderedListOutlined />,
                    key: "checklist"
                },
                {
                    label: "Calendar",
                    icon: <CalendarOutlined />,
                    key: "calendar"
                },
                {
                    label: "Members",
                    icon: <TeamOutlined />,
                    key: "members"
                }
            ]} />
        </Header>
        <Content>{props.children}</Content>
        <Footer className="text-center font-light">
            Katy Robotics - Krish and Kevin
        </Footer>
    </Layout>
}