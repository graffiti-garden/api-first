<script setup lang="ts">
import { onMounted } from "vue";
import SOTATable from "./SOTATable.vue";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import confetti from "canvas-confetti";
import Outline from "./Outline.vue";
import APIFirstTable from "./APIFirstTable.vue";

onMounted(async () => {
    const deck = new Reveal({
        transition: "none",
        hash: true,
        plugins: [RevealNotes, RevealMarkdown],
    });

    deck.on("slidechanged", (event) => {
        // @ts-ignore
        if (event.currentSlide?.id === "yay-protocols") {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.8 },
            });
        }
    });
    await deck.initialize();
});
</script>

<style>
.leak {
    position: relative;
    aside {
        position: absolute;
    }

    .arrow-container {
        position: relative;
    }

    .arrow {
        position: absolute;
        width: 10;
        height: 0;
        z-index: -1;
        font-size: 20rem;
        left: 50%;
        transform: rotate(90deg) scaleY(1);
        /* transform-origin: center; */
        /* transform: rotate(0deg) scaleY(1); */
        color: red;
    }
}

.enshit {
    a {
        z-index: 1;
        width: 100%;
        transform: rotate(10deg);
    }
    a:nth-child(2) {
        transform: rotate(-10deg);
    }
    a:last-child {
        transform: rotate(0deg);
    }
    img {
        width: 100%;
        height: auto;
    }
}

ul.authors {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-direction: row;
    padding-top: 20px;
    margin: 0;
    gap: 50px;

    li {
        list-style: none;
    }

    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img {
        aspect-ratio: 1;
        width: 200px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        display: block;
    }
}

.first {
    p + p {
        padding-top: 20px;
    }
    p {
        color: lightgrey;
    }
}

.future-proof {
    .future-apps {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;

        img {
            width: 200px;
        }
    }
}

.fragment.blur {
    filter: none;
}
.fragment.blur.visible {
    filter: blur(5px);
}

.look-same {
    display: flex;
    flex-direction: row;
    * {
        width: 100%;
    }
}
</style>

<template>
    <div class="slides">
        <section class="first">
            <h2>Protocols, Not Platforms</h2>
            <h2>...but the API first!</h2>
            <ul class="authors">
                <li>
                    <figure>
                        <img
                            data-src="./media/theia.jpg"
                            alt="Theia Henderson's face"
                            data-preload
                        />
                        <figcaption>
                            <a href="https:/theias.place"> Theia Henderson </a>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            data-src="./media/karger.jpg"
                            alt="David Karger's face"
                            data-preload
                        />
                        <figcaption>
                            <a
                                href="https://en.wikipedia.org/wiki/David_Karger"
                            >
                                David Karger
                            </a>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            data-src="./media/ddc.jpg"
                            alt="David Clark's face"
                            data-preload
                        />
                        <figcaption>
                            <a
                                href="https://en.wikipedia.org/wiki/David_D._Clark"
                            >
                                David Clark
                            </a>
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <p>CSAIL, MIT</p>

            <!-- <p>
                Slides:
                <a href="https://api-first.graffiti.garden"
                    >api-first.graffiti.garden</a
                >
            </p> -->

            <aside class="notes">
                Hi, my name is Theia, I'm going to talk loosely about some work
                that I have been doing in grad school at MIT with David Karger
                and David Clark. My background is mostly in Human Computer
                Interaction (HCI) and I'll using that as lens to talk about how
                to design better protocols or perhaps to question whether a
                protocol is the right thing to design at all.
            </aside>
        </section>
        <section>
            <h2>High Level</h2>
            <ul>
                <li>How to design more usable protocols</li>
                <li>
                    Reconsider whether a protocol is the right artifact to
                    design at all.
                </li>
            </ul>
        </section>
        <Outline place="start" />
        <section>
            <p>
                A <dfn>protocol</dfn> is a system of rules for transmitting
                information between two or more entities.
            </p>

            <table>
                <tbody>
                    <tr class="fragment border-target" data-fragment-index="1">
                        <th scope="row">
                            <span
                                class="fragment custom border"
                                data-fragment-index="4"
                            >
                                Internet
                            </span>
                        </th>
                        <td>TCP/IP, Email, HTTP, ActivityPub</td>
                    </tr>
                    <tr class="fragment" data-fragment-index="2">
                        <th scope="row">Cryptographic</th>
                        <td>Diffie Hellman, Schnorr, zk-SNARK</td>
                    </tr>
                    <tr class="fragment" data-fragment-index="3">
                        <th scope="row">
                            <span
                                class="fragment custom border"
                                data-fragment-index="4"
                            >
                                Combination
                            </span>
                        </th>
                        <td>TLS, OAuth, Signal, Bitcoin</td>
                    </tr>
                </tbody>
            </table>
            <aside class="notes">
                <p>So what is a protocol? A protocol...</p>
                <p>For example, there are pure internet protocols...</p>
                <p>
                    There are cryptographic protocols that some people in this
                    room may be more familiar with...
                </p>
                <p>
                    And there are protocols that involve cryptography that run
                    over the internet.
                </p>
                <p>
                    I'm largely coming at this from an internet architecture
                    perspective, but given there is often overlap, hopefully
                    there are some lessons to be taken away for the
                    cryptographers as well.
                </p>
            </aside>
        </section>
        <section>
            <h3>When all apps were protocols 😮‍💨</h3>
            <ul class="image-grid">
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/email.png"
                            alt="Screenshot of a 90's email client"
                        />
                        <figcaption>IMAP</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/usenet.png"
                            alt="Screenshot of USENET"
                        />
                        <figcaption>NNTP</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/irc.png"
                            alt="mIRC32, a 32-bit version of the IRC internet chat program mIRC, from back in the Windows 95 and Windows 98 era"
                        />
                        <figcaption>IRC</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/netscape.jpg"
                            alt="NSCSA Mosaic for Windows (1993)"
                        />
                        <figcaption>HTTP</figcaption>
                    </figure>
                </li>
            </ul>
            <aside class="notes">
                Back in the day most internet services were protocols. We had...
            </aside>
        </section>
        <section>
            <h3>The rise of the platforms 👀</h3>
            <ul class="image-grid">
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/google.png"
                            alt="A screenshot of amazon.com from 1999"
                        />
                        <figcaption>Google</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/amazon.png"
                            alt="A screenshot of amazon.com from 1999"
                        />
                        <figcaption>Amazon</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/facebook.jpg"
                            alt="A screenshot of Welcome to Thefacebook"
                        />
                        <figcaption>Facebook</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/twitter.png"
                            alt="A screenshot of Welcome to Thefacebook"
                        />
                        <figcaption>Twitter</figcaption>
                    </figure>
                </li>
            </ul>
            <aside class="notes">
                <p>
                    Then in the 2000's people started building centralized
                    platforms. Partially it was because at the time there were
                    things that you couldn't obviously do with decentralized,
                    like search or commerce. Partially because it can make
                    things
                </p>
                <p>
                    After some early optimism, they slowly started to
                    enshitiffy.
                </p>
                <p>
                    Coming into the 2010's these platforms start to enshittify.
                    There are more ads, they start, they fuel
                </p>
                <p></p>

                Then around the 2000's, Then in the 2000's, companies realize if
                they build centralized platforms they can extract a lot of
                value. They can serve us ad, mine us for data, manipulate us to
                serve their needs, all with disastrous consequeses for people we
                started to see the rise of platforms: Facebook, Twitter,
                Instagram, TikTok, etc. They surveil us, monetize us, serve us
                ads, make us depressed.
            </aside>
        </section>
        <section class="enshit">
            <div class="r-stack r-stretch">
                <!--Ads-->
                <iframe
                    width="100%"
                    height="100%"
                    data-src="https://www.merriam-webster.com/slang/enshittification"
                    data-preload
                ></iframe>
                <!--Surveillance and Psychological Maniuplation-->
                <a
                    href="https://archive.is/20191221201207/https://www.washingtonpost.com/politics/cruz-campaign-paid-750000-to-psychographic-profiling-company/2015/10/19/6c83e508-743f-11e5-9cbb-790369643cf9_story.html"
                >
                    <img
                        class="fragment"
                        data-src="./media/analytica.png"
                        data-preload
                    />
                </a>
                <!--Genocide-->
                <a
                    href="https://www.vice.com/en/article/facebook-lawsuit-myanmar-genocide-rohingya/"
                >
                    <img
                        class="fragment"
                        data-src="./media/myanmar.png"
                        data-preload
                    />
                </a>
                <a
                    href="https://knightcolumbia.org/content/protocols-not-platforms-a-technological-approach-to-free-speech"
                >
                    <img
                        class="fragment"
                        data-src="./media/protocols-not-platforms.png"
                        data-preload
                    />
                </a>
            </div>
            <aside class="notes">
                So in recent years there has been a move to go back towards
                "Protocols not Platforms" It was actually this article that
                caused Jack Dorsey to start the BlueSky project.
            </aside>
        </section>
        <section>
            <h3>Resurgence of protocols 🥳</h3>
            <ul class="image-grid">
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/signal-logo.svg"
                            data-preload
                            alt="The signal logo"
                        />
                        <figcaption>Signal</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/mastodon-logo.svg"
                            data-preload
                            alt="The Mastodon Logo"
                        />
                        <figcaption>ActivityPub</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/bluesky-logo.svg"
                            alt="The BlueSky butterfly logo"
                        />
                        <figcaption>AT Protocol</figcaption>
                    </figure>
                </li>
                <li class="fragment">
                    <figure>
                        <img
                            data-src="./media/element-logo.svg"
                            data-preload
                            alt="The element logo"
                        />
                        <figcaption>Matrix</figcaption>
                    </figure>
                </li>
            </ul>
            <aside class="notes">
                So there has been a new wave of protocols replacing these
                centralized applications.
            </aside>
        </section>
        <section id="yay-protocols">
            <h1>Decentralized! Encrypted!</h1>
            <aside class="notes">
                Some people might say "we've made the technology" now we just
                need to get people to use it.
            </aside>
        </section>
        <section>
            <h3>Why are they not everywhere?</h3>

            <table class="mau">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Monthly Active Users</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fediverse</td>
                        <td><a href="https://fedidb.com/">1.1 million</a></td>
                    </tr>
                    <tr>
                        <td>BlueSky</td>
                        <td>
                            <a href="https://bluefacts.app/bluesky-user-growth"
                                >6.7 million</a
                            >
                        </td>
                    </tr>
                    <tr>
                        <td>Twitter</td>
                        <td>
                            <a
                                href="https://explodingtopics.com/blog/x-user-stats#stats"
                                >586 million</a
                            >
                        </td>
                    </tr>
                    <tr>
                        <td>Facebook</td>
                        <td>
                            <a
                                href="https://explodingtopics.com/blog/x-user-stats#stats"
                                >3.0 <strong>b</strong>illion</a
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="look-same">
            <h3>Why do they look and feel the same?</h3>

            <iframe class="r-stretch" data-src="https://bsky.app/" data-preload>
            </iframe>
        </section>

        <section>
            <h4>Many answers...</h4>
            <ul>
                <li class="fragment" data-fragment-index="1">
                    Users are <strong>locked in</strong> to existing platforms.
                </li>
                <li class="fragment" data-fragment-index="2">
                    Limited <strong>funding</strong> and lack of economic
                    <strong>incentives</strong>
                </li>
                <li class="fragment" data-fragment-index="3">...</li>
                <li class="fragment border" data-fragment-index="3">
                    The protocols are not designed with
                    <strong>usability</strong> in mind.
                </li>
            </ul>
        </section>
        <Outline place="why" />
        <section>
            <h1>Who uses protocols?</h1>
            <ul>
                <li class="fragment strike" data-fragment-index="1">
                    Protocol designers?
                    <!-- ("I work on double ratchets") -->
                </li>
                <li class="fragment custom border" data-fragment-index="3">
                    Application developers?
                    <!-- ("I made a Signal client") -->
                </li>
                <li class="fragment strike" data-fragment-index="2">
                    End users?
                    <!-- ("I message people on Signal") -->
                </li>
            </ul>
        </section>
        <SOTATable />
        <section class="leak">
            <h3>Protocols Leak Complexity</h3>

            <img class="r-stretch" data-src="./media/leak.png" data-preload />
        </section>
        <section>
            <h3>Protocols Constrain</h3>

            <img
                class="r-stretch"
                data-src="./media/constrain.png"
                data-preload
            />
        </section>
        <section class="future-proof">
            <h3>Protocols are not future proof</h3>

            <div
                class="fragment custom blur future-apps"
                data-fragment-index="3"
            >
                <img data-src="./media/xmpp-1.png" data-preload />
                <img data-src="./media/xmpp-2.png" data-preload />
                <img data-src="./media/xmpp-3.png" data-preload />
            </div>
            <div>↑</div>
            <div class="fragment custom blur" data-fragment-index="2">
                <code> xmpp.js </code>
            </div>
            <div>↑</div>
            <div class="fragment custom blur" data-fragment-index="1">XMPP</div>
        </section>

        <Outline place="consequences" />
        <!-- <section>
            <h1>Unusable ➡️ Difficult to Build On</h1>
        </section> -->

        <section>
            <h2>1: Recentralizion of Power</h2>

            <ul>
                <li class="fragment">
                    Power goes to those who can understand a complex protocol
                    enough to build on it
                </li>
                <li class="fragment">
                    Bias towards people with computer science education and all
                    correlated biases (wealthy, white, global north).
                </li>
                <li class="fragment">
                    <a
                        href="https://www.colorado.edu/lab/medlab/2021/01/08/implicit-feudalism-why-online-communities-still-havent-caught-my-mothers-garden-club"
                    >
                        Implicit Feudalism
                    </a>
                    of server admins and "benevolent dictators for life"
                </li>
            </ul>
        </section>

        <section>
            <h2>
                2:
                <a href="https://www.youtube.com/watch?v=OZN8y8kVFFI">
                    Horseless Carriages
                </a>
            </h2>

            <div class="r-stack r-stretch">
                <ul class="r-stretch">
                    <li class="fragment">
                        People building on protocol must be inspired by the
                        <em>protocol itself</em>.
                    </li>
                    <li class="fragment">
                        Designers with cool app ideas can make apps more
                        <em>reliably</em> and with less
                        <em>effort</em> elsewhere
                    </li>
                </ul>
                <img
                    width="100%"
                    class="fragment"
                    data-src="./media/horseless.png"
                    alt="A horseless carriage, a car, from the 1900's with reigns"
                />
            </div>
        </section>

        <section>
            <h2>3: No Safety in Numbers</h2>

            <p>
                If a protocol is only used by the people who <em>need</em> it...
            </p>

            <ul>
                <li>Activists</li>
                <li>Journalists</li>
                <li>Marginalized groups</li>
            </ul>

            <p>... then just using the protocol can make you a target.</p>

            <p class="fragment">
                <a
                    href="https://www.youtube.com/watch?v=9GHAKWQSvls"
                    data-preview-link
                >
                    Nick Matthewson (TOR) at ReCAP last year
                </a>
            </p>
        </section>

        <Outline place="solutions" />

        <section>
            <h2>Build the API first!</h2>

            <ul>
                <li>Directly design of the user-facing surface</li>
                <li>No leakage</li>
                <li>No constraints</li>
                <li>Parallel protocols ➝ more futureproof</li>
            </ul>
        </section>

        <section>
            <h3>Example:</h3>
            <h2>The "World Wide Web"</h2>
        </section>

        <section>
            <h2>An Abridged WWW API</h2>
            <p>serve(file) ➝ url</p>
            <p>fetch(url) ➝ file</p>
        </section>

        <APIFirstTable />

        <section id="uris">
            <h3>URIs</h3>
            <img class="r-stretch" data-src="./media/uri.jpg" data-preload />
        </section>

        <!-- <section>
            <h1>Example: MessageSending</h1>
        </section>

        <section>
            <pre>
                login() -> session     <- Abstract representation of login state
                logout(session) -> void
                send(message, recipient, session) -> void
                checkInbox(session) -> returns all
                messages where recipient = session.actor <- Implicit privacy: you cannot get messages without the right session.
            </pre>
        </section> -->

        <!-- <section>
            <h1>API <-> Ideal Functionality</h1>
            <section>
                Ideal functionality Rather than saying, I want to encrypt a
                message from a to b, consider just saying there are two methods
                send(self, message, recipient) and checkInbox(self) -> returns
                all messages where recipient = self There is nothing here
                implying that the message is encrypted, but there is no other
                method.
            </section>
        </section> -->

        <section>
            <h2>Example</h2>
            <h1>Graffiti</h1>
        </section>

        <section>
            <em>Graffiti</em>: An API for building interoperable social apps

            <iframe
                class="r-stretch"
                data-src="https://graffiti.garden"
                data-preload
            >
            </iframe>
        </section>

        <section>
            Graffiti API
            <iframe
                class="r-stretch"
                data-src="https://api.graffiti.garden/classes/Graffiti.html#put"
                data-preload
            >
            </iframe>
        </section>

        <section>
            Encapsulate protocol complexity in state
            <iframe
                class="r-stretch"
                data-src="https://api.graffiti.garden/classes/Graffiti.html#login"
                data-preload
            >
            </iframe>
        </section>

        <section>
            Implicit Privacy
            <iframe
                class="r-stretch"
                data-src="https://api.graffiti.garden/classes/Graffiti.html#get"
                data-preload
            >
            </iframe>
        </section>

        <section>
            <h1>Ideal functionality</h1>

            <p>
                API describes all the methods the user is <em>allowed</em> to
                access and the behavior of those methods
            </p>
            <p>
                A protocol implementing an API should not provide any more more
                functionality than this "ideal functionality".
            </p>
            <!-- a centralized platform can implement the API but it wouldn't be good -->
        </section>

        <section>
            <h2>Graffiti protocols</h2>
            <ul>
                <li>Federated</li>
                <li>Federated with "commodity storage"</li>
                <li>Encrypted - in the works!</li>
                <li>Local</li>
            </ul>
        </section>

        <!-- <section>
            https://designftw.mit.edu/lectures/prototyping/#common-errors-in-needfinding
            <ul>
                <li>
                    Need finding: what apps am I trying to support, what are the
                    high level goals Focus on what they need (e.g. send a direct
                    message, check who sent the message) rather than how it will
                    be done (e.g. encrypt, sign, etc.)
                    <em>even</em> if the users should be able to do.
                </li>
                <li>
                    Define requirements: list Graffiti requirements: -
                    personalization, adversarial interop Face the users and
                    their applications
                </li>
                <li>
                    Write an API: use URIs, abstract variables, implicit
                    constraints
                </li>
                <li>
                    <em>Then</em> try to implement it. Add more requirements?
                </li>
            </ul>
        </section> -->

        <section>
            <h3>What happens if you can't implement it?</h3>

            <ul>
                <li>
                    Patchwork of protocols
                    <ul>
                        <li>Consider signal group size limitation</li>
                        <li>Automatic socket upgrades</li>
                    </ul>
                </li>
                <li>You've found a new problem!</li>
            </ul>
        </section>

        <!-- <section>
            <h3>What happens if it's too easy to implement?</h3>

            <p>"I can't publish a paper about this!"</p>

            <p>
                Well you can publish something on all the work you did in the
                creation of it. Finding out that the answer is simple is quite
                nice.
            </p>
        </section> -->

        <Outline place="summary" />
    </div>
</template>
