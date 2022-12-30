import { Head } from "./Head";
import Hero from "./Hero"
import "./Main1.css"
import {Smallc} from "./Smallc";
export const Main1 = () => {
    return (
        <>
        <div className ="head1"> 
        <Head/>
        </div>
        <div className="hero1">
        <Hero className="hero2"/>
        </div>
        <div className="small1">
            <Smallc/>
        </div>
        </>
    );
};