<script>
import axios, { Axios } from "axios";
export default {
    data() {
        return {
            mainTitle: "Contact",
            name: "",
            email: "",
            message: "",
            accepted: false,
        };
    },
    methods: {
        sendMessage() {
            if (
                this.name != null &&
                this.name != "" &&
                this.name.lenght <= 64 &&
                this.email != null &&
                this.email != "" &&
                this.email.lenght <= 255 &&
                this.message != null &&
                this.message != "" &&
                this.message.lenght <= 2024 &&
                this.accepted
            ) {
                //  axios
            }
        },
    },
};
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="text-center">
                        {{ mainTitle }}
                    </h1>
                </div>
            </div>
            <div class="container">
                <form method="POST" @submit.prevent="sendMessage()">
                    <div class="w-100">
                        <div class="d-flex flex-column">
                            <label for="name">
                                Nome <span class="text-danger">*</span>
                            </label>
                            <input
                                v-model="name"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="inserisci il tuo name"
                                required
                                maxlength="64"
                            />
                        </div>

                        <div class="d-flex flex-column">
                            <label for="email">
                                Email <span class="text-danger">*</span>
                            </label>
                            <input
                                v-model="email"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="inserisci la tua email"
                                maxlength="255"
                                required
                            />
                        </div>

                        <div class="d-flex flex-column">
                            <label for="message">
                                Messaggio <span class="text-danger">*</span>
                            </label>
                            <textarea
                                v-model="message"
                                name="message"
                                id="message"
                                cols="5"
                                rows="10"
                                placeholder="Inserisci il tuo messaggio"
                                required
                                maxlength="2024"
                            ></textarea>
                        </div>

                        <div class="mt-3">
                            <button type="submit" class="btn btn-primary px-3">
                                Invia
                            </button>
                        </div>

                        <div
                            class="form-check"
                            type=" checkbox"
                            value=""
                            id="accept"
                            name="accept"
                            required
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="accept"
                            />
                            <label class="form-check-label" for="accept">
                                <span class="text-danger">*</span>
                                Ho letto ed accetto i
                                <a href="#" target="_blank"
                                    >termini di utilizzo</a
                                >
                                e la <a href="#" target="_blank">privacy</a>
                            </label>
                        </div>
                        <div class="p-4">
                            <p>
                                Tutti i campi segnati con
                                <span class="text-danger">*</span> sono
                                obbligatori
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>
