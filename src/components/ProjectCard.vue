<script>
export default {
    data() {
        return {};
    },
    methods: {},
    props: {
        project: Object,
    },
};
</script>

<template>
    <div class="col-4">
        <div class="card" style="width: 18rem">
            <div v-if="project.cover_img != null">
                <img
                    :src="'http:/127.0.0.1:8000/storage' + project.cover_img"
                    class="card-img-top"
                    :alt="project.title"
                />
            </div>
            <div class="card-body">
                <h5>{{ project.id }}</h5>
                <h5 class="card-title">{{ project.title }}</h5>
                <h6>{{ project.type.title }}</h6>
                <!-- <h6>{{ project.technologies.title }}</h6> -->
                <span
                    v-for="technologie in project.technologies"
                    :kei="technologie.id"
                    class="ms-3"
                >
                    {{ technologie.title }}
                </span>
                <p class="card-text">{{ project.content }}.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
