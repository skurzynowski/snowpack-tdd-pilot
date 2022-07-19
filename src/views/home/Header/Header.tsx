import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { myContainer, TYPES } from "../../../services/DiContainer/inversify.config";
import type { HomeRepresenter } from "../../../representers/HomeRepresenter/HomeRepresenter";

export const Header: React.FC = observer(() => {
    const [store, setStore] = useState<HomeRepresenter>();

    useEffect(() => {
        setStore(myContainer.get<HomeRepresenter>(TYPES.HomeRepresenter))
    }, [])
    
    if (!store) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <h1>
                {store.title}: {store.counter}
            </h1>
        </section>
    )
})