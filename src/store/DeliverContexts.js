import { createContext, useState } from "react";

export const DeliverContext = createContext(null)

export default function Deliver({ childern }) {
    const [deliverDetails, setDeliverDetails] = useState(0)
    return (
        <DeliverContext.Provider value={{ deliverDetails, setDeliverDetails }}>
            {childern}
        </DeliverContext.Provider>
    )
}