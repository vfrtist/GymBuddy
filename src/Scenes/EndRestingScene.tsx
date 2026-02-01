import Scene from "./Scene";
import MainHeading from "../Components/MainHeading";
import { SessionContext } from "../Contexts/SessionContext";
import { useContext, useEffect } from "react";

export default function EndRestingScene() {
    const { setCurrentScene } = useContext(SessionContext).data;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentScene("main");
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Scene classNames="container" id={"RestingScene"}>
            <MainHeading heading={"Get it!"} classes="stylized" />
        </Scene>
    );
}
