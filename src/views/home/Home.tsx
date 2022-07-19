import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import type { HomeRepresenter } from "../../representers/HomeRepresenter/HomeRepresenter";
import { Header } from "./Header/Header";

export const Home: React.FC<{ store: HomeRepresenter }> = observer(({ store }) => {
console.log(store.counter)
    return (
        <section>
            <Header />
            <button onClick={() => { store.request({ name: "UPDATE_COUNTER" }) }}>Click to change text</button>
            <button onClick={() => { store.counter++ }}>Counter</button>
        </section>
    )
})