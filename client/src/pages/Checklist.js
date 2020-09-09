import React from "react"
import { KitchenCard, BathCard, RoomCard } from "../components/ChecklistCards"
import { Row, Col } from "react-materialize"

const Checklist = () => {
    return (
        <Row className="container app-content">
            <Col l={ 12 } s={ 12 } className="cardLists">
                <KitchenCard />
            </Col>
            <Col l={ 12 } s={ 12 } className="cardLists">
                <BathCard />
            </Col>
            <Col l={ 12 } s={ 12 } className="cardLists">
                <RoomCard />
            </Col>
        </Row>
    )
}

export default Checklist