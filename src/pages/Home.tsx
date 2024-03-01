import { A } from '@solidjs/router';


function HomePage() {
    return (
        <div>
            <h1>Hello There!</h1>
            <nav>
                <A href="/reactivity">Reactivity and Subscribe</A>
            </nav>
        </div>
    )
}

export default HomePage;