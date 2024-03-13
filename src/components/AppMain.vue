<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: 1,
        };
    },
    created() {
        axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
            console.log(res.data.results.data);
            this.projects = res.data.results.data;
            this.currentPage = res.data.results.data.current_page;
            this.lastPage = res.data.results.last_page;
        });
    },
    methods: {
        getProjects(page) {},
    },
    components: {
        ProjectCard,
    },
};
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <ProjectCard
                    v-for="project in projects"
                    :key="project.id"
                    :project="project"
                    class="mb-5"
                />
            </div>
            <div class="row">
                <div class="col-6">
                    <button class="btn btn-primary">Prev</button>
                </div>
                <div class="col-6">
                    <button class="btn btn-primary">Next</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>
