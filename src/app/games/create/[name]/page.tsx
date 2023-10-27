"use client"

import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import GameCreateForm from "@/components/gameCreateForm/gameCreateForm";
import {useEffect, useState} from "react";
import {Game} from "@/types/game";


const GameCreatePage = ({params}: {params: {name: string}}) => {
    const [game, setGame] = useState<Game>();
    
    // Get in database the game by his ID
    useEffect(() => {
        switch(params.name) {
            case '1': 
                setGame({
                    id: 1,
                    name: 'Skyjo',
                    image: 'skyjo.png'
                })
                break;
            case '2':
                setGame({
                    id: 2,
                    name: '6 qui prend !',
                    image: '6quiprend.png'
                })
                break;
        }
    }, [params.name]);
    
    
    return (
        <>
            <div>
                <Link href={"/games"} className={"flex text-sm items-center m-2"}>
                    <ArrowLeft color={"#339966"} size={30} />
                    <span className={"text-primary"}>Retourner à la liste des jeux</span>
                </Link>
            </div>


            <GameCreateForm name={game?.name as string}/>
        </>
    )
}

export default GameCreatePage