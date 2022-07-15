import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import type { IApp } from "src/types/Interfaces/App";
import type { HomeInteractor } from "../../interactors/HomeInteractor/HomeInteractor";
import { myContainer, TYPES } from "../../services/DiContainer/inversify.config";

// export type IHome = React.FC<string>;

export const Home = observer(() => {
    const [interactor, setInteractor] = useState({ title: "test" })

    useEffect(() => {
        setInteractor(myContainer.get<HomeInteractor>(TYPES.HomeInteractor));
    }, [])

    return (<section>{interactor.title}
        <button onClick={() => { interactor.title = "New title" }}>Click to change text</button>
    </section>)
})