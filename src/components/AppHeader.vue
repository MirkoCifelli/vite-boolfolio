<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>

<template>
    <header>
        <div class="container">
            <div class="row p-4">
                <div class="col-3">Logo</div>
                <div class="col">
                    <ul class="d-flex justify-content-evenly list-unstyled">
                        <li>
                            <router-link
                                :to="{ name: 'home' }"
                                class="classe_css"
                            >
                                Home page
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'projects.index' }"
                                class="classe_css"
                            >
                                Projects
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>
