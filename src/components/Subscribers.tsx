import { createEffect, createSignal } from "solid-js"

function Subscribers() {
    const [selectedColor, setSelectedColor] = createSignal("#000000");

    createEffect(() => {
        const box = document.getElementById("box");
        if (box) {
            box.style.color = selectedColor();
        }
    });

    return (
        <div>
            <p>Pick your favorite color</p>
            <input
                type="color"
                value={selectedColor()}
                onChange={(e) => setSelectedColor(e.target.value)}
            />
            <p id="box" style="font-size: 12px;">
                <em>
                The rose is red, the violet’s blue,<br/>
                The honey’s sweet, and so are you.<br/>
                Thou are my love and I am thine;<br/>
                I drew thee to my Valentine:<br/>
                The lot was cast and then I drew,<br/>
                And Fortune said it shou’d be you.<br/>
                </em>
            </p>
        </div>
    );
}

export default Subscribers;