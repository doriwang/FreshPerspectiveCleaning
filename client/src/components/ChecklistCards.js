import React from "react"
import { Card, CardTitle } from "react-materialize"

export const KitchenCard = () => {
    return (
        <div>
            <Card
                header={ <CardTitle image="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /> }
                title="KITCHEN"
                horizontal
            >
                <ul className="col l6 s12">
                    <li>Tidy up</li>
                    <li>Cabinets front exterior dusted/wiped down</li>
                    <li>Microwave cleaned inside + out</li>
                    <li>Stove cleaned</li>
                    <li>Countertops + backsplash wiped down</li>
                    <li>Appliances exterior wiped down/shined</li>
                    <li>Switch plates wiped down</li>
                </ul>
                <ul className="col l6 s12">
                    <li>Sink scrubbed + disinfected, faucet shined</li>
                    <li>Tables + chairs wiped down</li>
                    <li>Glass door cleaned</li>
                    <li>Trash can emptied/trash bag replaced</li>
                    <li>Blinds + baseboards alternatively dusted</li>
                    <li>Floors vacuumed/swept + mopped</li>
                </ul>
            </Card>
        </div>
    )
}

export const BathCard = () => {
    return (
        <div>
            <Card
                header={ <CardTitle image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /> }
                title="BATHROOM"
                horizontal
            >
                <ul className="col l6 s12">
                    <li>Tidy up</li>
                    <li>Bath rugs removed + vacuumed</li>
                    <li>Shower wall + tub scrubbed, disinfected + rinsed</li>
                    <li>Shower door glass, frame + track cleaned</li>
                    <li>Countertops + sidesplash wiped down</li>
                    <li>Mirrors cleaned</li>
                    <li>Personal care products, soap dish, etc. cleaned</li>
                    <li>Switch plates wiped down</li>
                </ul>
                <ul className="col l6 s12">
                    <li>Sink scrubbed + disinfected, faucet shined</li>
                    <li>Cabinets exterior wiped down</li>
                    <li>Towels folded + hung</li>
                    <li>Chrome fixtures shined</li>
                    <li>Toilet scrubbed + disinfected inside + out</li>
                    <li>Trash can emptied/trash bag replaced</li>
                    <li>Baseboards vacuumed/wiped down</li>
                    <li>Floors vacuumed + mopped</li>
                    <li>Blinds maintained if any</li>
                </ul>
            </Card>
        </div>
    )
}

export const RoomCard = () => {
    return (
        <div>
            <Card
                header={ <CardTitle image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /> }
                title="BEDROOMS, OFFICES, OTHER AREAS + LAUNDRY ROOM"
                horizontal
            >
                <ul className="col l6 s12">
                    <li>Tidy up</li>
                    <li>Standing objects dusted</li>
                    <li>Furniture dusted (horizontal + vertical surfaces)</li>
                    <li>Windowsills dusted</li>
                    <li>Mirrors cleaned</li>
                    <li>Glass door cleaned</li>
                    <li>Stair railings dusted/handrail wiped down</li>
                    <li>Stairs vacuumed/wiped down</li>
                </ul>
                <ul className="col l6 s12">
                    <li>Cabinets front exterior dusted/wiped down</li>
                    <li>Washer + dryer exterior dusted/wiped down</li>
                    <li>Trash can emptied/trash bag replaced</li>
                    <li>Blinds + baseboards alternatively dusted</li>
                    <li>Floors vacuumed/swept + mopped (if applicable)</li>
                </ul>
            </Card>
        </div>
    )
}