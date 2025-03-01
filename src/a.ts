import { bootstrap } from "@libp2p/bootstrap";
import { createLibp2p } from "libp2p";


export function funcA() {
    const bootstrapInstance = bootstrap({ list: [] });
    const toto = createLibp2p;
    console.log("Function A", toto, bootstrapInstance);
}
funcA();
