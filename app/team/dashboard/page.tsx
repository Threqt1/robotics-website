import { Row, Col } from "antd";

export default function DashboardPage() {
    return <div className="w-full">
        <Row>
            <Col className="text-center" span={24}>col</Col>
        </Row>
        <Row>
            <Col className="text-center" span={12}>col-12</Col>
            <Col className="text-center" span={12}>col-12</Col>
        </Row>
        <Row>
            <Col className="text-center" span={8}>col-8</Col>
            <Col className="text-center" span={8}>col-8</Col>
            <Col className="text-center" span={8}>col-8</Col>
        </Row>
        <Row>
            <Col className="text-center" span={6}>col-6</Col>
            <Col className="text-center" span={6}>col-6</Col>
            <Col className="text-center" span={6}>col-6</Col>
            <Col className="text-center" span={6}>col-6</Col>
        </Row>
    </div>
}