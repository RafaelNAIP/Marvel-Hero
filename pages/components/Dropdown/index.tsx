import { useState } from "react";

import styles from '@/styles/Dropdown.module.css'
import Image from "next/image";

import agentDefaultIcon from '../../../assets/select_agent_default_icon.png'
import chevronDown from '../../../assets/chevron_down_grey.png'
import chevronUp from '../../../assets/chevron_up_grey.png'
import checkIcon from '../../../assets/check_icon.png'
import cyclops from '../../../assets/cyclops.png'
import daredevil from '../../../assets/daredavil.png'
import hulk from '../../../assets/hulk.png'
import ironMan from '../../../assets/iron_man.png'
import spiderman from '../../../assets/spiderman.png'
import thor from '../../../assets/thor.png'
import wolverine from '../../../assets/wolverine.png'


interface Agent {
    name: string,
    image: any
}

const agentArray = [
    {
        name: 'Cyclops',
        image: cyclops
    },
    {
        name: 'Daredevil',
        image: daredevil
    },
    {
        name: 'Hulk',
        image: hulk
    },
    {
        name: 'Iron Men',
        image: ironMan
    },
    {
        name: 'Spider Man',
        image: spiderman
    },
    {
        name: 'Thor',
        image: thor
    },
    {
        name: 'Wolverine',
        image: wolverine
    },
]


export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const [agent, setAgent] = useState<Agent>({name: "", image: null});

    const handleOpen = () => {
    setOpen(!open);
    };
    console.log(agent.name.length);

    return (
        <div className={styles.dropdown}>
        <button onClick={handleOpen} className={styles.dropdownButton}>
            <div>
                <Image 
                src={agent.image ?? agentDefaultIcon} 
                alt="agent default icon"
                style={{
                    marginLeft: 8
                }}
                /> 
                <p style={{ color: agent.name.length > 0 ? '#101828' : '#667085' }}>{agent.name.length > 0 ? agent.name : 'Selecione um agente'}</p>
            </div>
            <Image 
            src={open ? chevronUp : chevronDown} 
            alt="chervon down"
            style={{
                marginLeft: 85
            }}
            />
        </button>
        {open ? (
            <div className={styles.dropdownStackedContainer}>
                {agentArray.map((agentInfo) => {
                    return (
                        <button 
                        className={styles.dropdownStackedAgentContainer} 
                        key={agentInfo.name}
                        onClick={() => {setAgent(agentInfo); setOpen(false)}}
                        style={{ backgroundColor: agent.name === agentInfo.name ? '#F9FAFB' : '#FFFFFF' }}
                        >
                            <div>
                                <Image 
                                    src={agentInfo.image}
                                    alt="cyclops"
                                />
                                <p>{agentInfo.name}</p>
                            </div>
                            {agent.name === agentInfo.name && (
                                <Image 
                                    src={checkIcon}
                                    alt="check icon"
                                    style={{
                                        marginLeft: 120
                                    }}
                                />
                            )}
                        </button>
                    )
                })}
            </div>
        ) : null}
        {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
        </div>
    );
};