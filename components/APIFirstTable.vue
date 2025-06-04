<style>
.api-first {
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
        border-right: 3px solid white;
        padding-right: 50px;
        text-align: right;
    }

    .arrow-to {
        position: relative;
    }

    .arrow-to::before {
        content: "↓";
        position: absolute;
        top: -40px;
        left: 50%;
        transform: scaleY(2);
        transform-origin: left center;
    }

    .arrow-from {
        position: relative;
    }

    .arrow-from::before {
        content: "↑";
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: scaleY(2);
        transform-origin: left center;
    }
}
</style>

<template>
    <section class="api-first">
        <p class="fragment border" data-fragment-index="5">↑ "Above" ↑</p>
        <table class="r-stretch">
            <tbody>
                <tr data-fragment-index="4" class="fragment">
                    <th>Apps</th>
                    <td colspan="4" class="arrow-from">Websites</td>
                </tr>
                <tr class="fragment" data-fragment-index="1">
                    <th>API</th>
                    <td colspan="4">The World Wide Web</td>
                </tr>
                <tr class="fragment" data-fragment-index="2">
                    <th scope="row">Technical Primitives</th>
                    <td class="arrow-to">+Legacy</td>
                    <td class="arrow-to">+Minimal</td>
                    <td class="arrow-to">+E2EE</td>
                    <td class="arrow-to">+Content Addressing</td>
                </tr>
                <tr class="fragment" data-fragment-index="3">
                    <th scope="row">Protocols</th>

                    <td class="arrow-to">
                        <code> ftp:// </code>
                    </td>
                    <td class="arrow-to">
                        <code> http:// </code>
                    </td>
                    <td class="arrow-to">
                        <code> https:// </code>
                    </td>
                    <td class="arrow-to">
                        <code> ipfs:// </code>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="fragment border" data-fragment-index="5">↓ "Below" ↓</p>
    </section>
</template>
