<script setup lang="ts">
defineProps<{
    place: "start" | "why" | "consequences" | "solutions" | "summary";
}>();
</script>
<style>
.strike:not(.fragment) {
    text-decoration: line-through;
}

.fragment.appear {
    transform: scale(0);
    opacity: 0;
}

.fragment.appear.visible {
    transform: scale(1);
    opacity: 1;
}

.something {
    display: flex;
}

.the-end ol li {
    font-size: 30px;
}
</style>
<template>
    <section
        :class="{
            'the-end': place === 'summary',
        }"
    >
        <h2>Roadmap</h2>
        <div class="something">
            <ol>
                <li
                    :class="{
                        'fragment custom border': place === 'why',
                    }"
                >
                    Why are many protocols unusable?
                    <ul
                        v-if="place !== 'start' && place !== 'why'"
                        :class="{
                            'fragment custom appear': place === 'consequences',
                        }"
                    >
                        <li>Leak complexity into the API</li>
                        <li>Constrain the API</li>
                        <li>Unreliable base to build on</li>
                    </ul>
                </li>
                <li
                    :class="{
                        'fragment custom border': place === 'consequences',
                    }"
                >
                    What are the consequences of unusable protocols?
                    <ul
                        v-if="place === 'solutions' || place === 'summary'"
                        :class="{
                            'fragment custom appear': place === 'solutions',
                        }"
                    >
                        <li>Recentralization of power</li>
                        <li>Horseless carriages</li>
                        <li>No Safety in Numbers</li>
                    </ul>
                </li>
                <li
                    :class="{
                        'fragment custom border': place === 'solutions',
                    }"
                >
                    How can we design more usable protocols?
                    <ul
                        v-if="place === 'summary'"
                        :class="{
                            'fragment custom appear': place === 'summary',
                        }"
                    >
                        <li>Design the API first!</li>
                        <li>
                            Use URIs, abstract state, implicit constraints,
                            patchwork
                        </li>
                    </ul>
                </li>
            </ol>

            <div v-if="place === 'summary'">
                <p>Signal: @sportdeath.01</p>
                <p>Email: <a href="mailto:theia@mit.edu">theia@mit.edu</a></p>
                <p>
                    <a href="https://graffiti.garden">graffiti.garden</a>
                </p>
            </div>
        </div>
    </section>
</template>
