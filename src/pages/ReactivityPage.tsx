import { A } from "@solidjs/router";
import Counter from "../components/IntroToReactivity";
import Subscribers from "../components/Subscribers";

function ReactivityPage() {
    return (
        <div>
            <nav>
                <A href="/">Home</A>
            </nav>
            <p style="font-size: 16px;">
                State management is the process of managing the state of an application. <br />
                This involves storing and updating data, as well as responding to the changes in it. <br />
                <br />
                With Solid, state management is handled through signals and subscribers. <br />
                Signals are used to store and update data, while subscribers are used to respond to changes in the data.
            </p>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                    <h4>This is a Signals</h4>
                    <Counter />
                </div>
                <div style={{ flex: 1 }}>
                    <h4>This is a Subscribe</h4>
                    <Subscribers />
                </div>
            </div>
        </div>
    )
}

export default ReactivityPage;