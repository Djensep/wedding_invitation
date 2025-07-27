"use client";

import "react-resizable/css/styles.css";
import { Rnd } from "react-rnd";
import styles from "./DraggableBlock.module.css";

export const DraggableBlock = () => {
    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: 200,
                height: 100,
            }}
            minWidth={500}
            minHeight={200}
            bounds="window"
            className={styles.wrapper}
        >
            <div className="bg-white p-4 rounded shadow w-full h-full"></div>
        </Rnd>
    );
};
