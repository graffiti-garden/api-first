<style>
.sota {
    font-size: 25px;

    img,
    svg {
        max-width: 150px;
    }

    tr :is(td, th) {
        padding-bottom: 50px;
    }

    tr td {
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        border: none;
    }
    tr th {
        border: none;
        border-right: 1px solid white;
        padding-right: 50px;
        text-align: right;
    }

    .arrow-to {
        position: relative;
    }

    .arrow-to::after {
        content: "↑";
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: scaleY(2);
        transform-origin: left center;
    }
}
</style>

<template>
    <section class="sota">
        <table class="r-stretch">
            <tbody>
                <tr class="fragment apis" data-fragment-index="3">
                    <th scope="row">API</th>
                    <td class="arrow-to">
                        <a
                            href="https://github.com/signalapp/libsignal"
                            data-preview-link
                        >
                            <code> libsignal </code>
                        </a>
                    </td>
                    <td class="arrow-to">
                        <a
                            href="https://matrix-org.github.io/matrix-js-sdk/"
                            data-preview-link
                        >
                            <code> matrix-js-sdk </code>
                        </a>
                    </td>
                    <td class="arrow-to">
                        <a
                            href="https://github.com/bluesky-social/atproto/tree/main/packages/api"
                            data-preview-link
                        >
                            <code> @atproto/api </code>
                        </a>
                    </td>
                    <!--
                        <ul>
                            <li></li>
                            <li>
                                <a href="https://github.com/atrium-rs/atrium">
                                    ATrium
                                </a>
                            </li>
                            <li>...</li>
                        </ul> -->
                    <td class="arrow-to">
                        <a
                            href="https://neet.github.io/masto.js/"
                            data-preview-link
                        >
                            <code> masto.js </code>
                        </a>
                        <!-- <ul>
                            <li>
                                <a
                                    href="
                                "
                                >
                                    masto.js
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <code> Mastodon.py </code>
                                </a>
                            </li>
                            <li>...</li>
                        </ul>
                    </td> -->
                    </td>
                </tr>
                <tr class="fragment" data-fragment-index="2">
                    <th scope="row">Protocol</th>
                    <td class="arrow-to">
                        <img
                            data-src="./media/signal-logo.svg"
                            alt="Signal Logo"
                        />
                    </td>
                    <td class="arrow-to">
                        <img
                            data-src="./media/matrix-logo.svg"
                            alt="Matrix Logo"
                        />
                    </td>
                    <td class="arrow-to">
                        <img
                            data-src="./media/atproto-logo.svg"
                            alt="AT Protocol Logo"
                        />
                    </td>
                    <td class="arrow-to">
                        <img
                            data-src="./media/activitypub-logo.svg"
                            alt="ActivityPub Logo"
                        />
                    </td>
                </tr>
                <tr class="fragment" data-fragment-index="1">
                    <th scope="row">Technical Primitive(s)</th>
                    <td ref="e2ee">E2EE</td>
                    <td>Federation</td>
                    <td>Federation + Merkle Trees</td>
                    <td>Federation + <br />Actor Model</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
