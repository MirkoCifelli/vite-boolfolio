<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";

export default {
    data() {
        return {
            project: null,
        };
    },
    created() {
        this.getProject();
    },
    methods: {
        getProject() {
            axios
                .get(
                    "http://127.0.0.1:8000/api/projects/" +
                        this.$route.params.slug
                )
                .then((res) => {
                    console.log(res.data);
                    this.project = res.data.results;
                });
        },
    },
    components: {
        ProjectCard,
    },
};
</script>

<template>
    <main>
        <div class="col-12">
            <div class="card w-100 text-center">
                <div v-if="project.cover_img != null">
                    <img
                        :src="
                            'http://127.0.0.1:8000/storage' + project.cover_img
                        "
                        class="card-img-top"
                        :alt="project.title"
                    />
                </div>
                <div class="card-body">
                    <h5>Id: {{ project.id }}</h5>
                    <h5 class="card-title">Titolo:{{ project.title }}</h5>
                    <h6>Type: {{ project.type.title }}</h6>

                    <p>Slug: {{ project.slug }}</p>
                    <span
                        v-for="technologie in project.technologies"
                        :key="technologie.id"
                        class="ms-3"
                    >
                        Technologie: {{ technologie.title }}
                    </span>
                    <p class="card-text">Contenuto: {{ project.content }}.</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>
