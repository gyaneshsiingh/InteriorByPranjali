import React from "react";
import { STATS_DATA } from "./stats.constant";
import { StatItemType } from "./stats.type";
import "./stats.modules.css";

const Stats = () => {
    return (
        <section className="vh-stats">
            <div className="vh-stats-inner">
                {STATS_DATA.map((item: StatItemType, index: number) => (
                    <div key={index} className="vh-stat-item">
                        <h2 className="vh-stat-number">{item.number}</h2>
                        <p className="vh-stat-label">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats;