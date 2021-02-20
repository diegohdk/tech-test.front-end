<template>
    <transition name="fade">
        <b-container v-if="total || error" class="m-auto px-5 h-50 text-center text-white d-flex flex-column" tag="article">
            <h1>Query Active Businesses</h1>
            <p v-if="total > 0" class="mt-3">There are {{ total }} unique businesses available</p>
            <div class="mt-auto">
                <transition name="fade" mode="out-in" :duration="200">
                    <div v-if="error" key="error">
                        <b-icon-exclamation-square class="mb-3" font-scale="2" />
                        <p class="lead">{{ error }}</p>
                    </div>
                    <div v-else-if="result" key="back">
                        <p v-html="result" class="mb-4"></p>
                        <b-button variant="light" @click="result = null">Go back</b-button>
                    </div>
                    <div v-else-if="total > 0" key="buttons">
                        <p class="lead mb-4"><strong>What do you want to see?</strong></p>
                        <b-button variant="light" @click="getOldest">The oldest</b-button>
                        <b-button variant="light" class="ml-4" @click="getMostLocations">The most locations</b-button>
                    </div>
                </transition>
            </div>
        </b-container>
    </transition>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = `${location.protocol}//${location.hostname}:3000`;

export default {
    data(){
        return {
            total : 0,
            result : null,
            error : null
        }
    },
    methods : {
        load(urn) {
            return new Promise((resolve, reject) => {
                axios.get(urn)
                    .then(response => resolve(response.data))
                    .catch(error => {
                        console.log('Error', error);
                        this.error = 'Error loading data. Please reload the page.';
                        resolve(null);
                    });
            });
        },
        async getTotal() {
            const result = await this.load('/total');

            if (result) {
                this.total = result.total;
            }

            this.$emit('load');
        },
        async getOldest() {
            const oldest = await this.load('/oldest');

            if (oldest) {
                const date = new Date(oldest.location_start_date);
                this.result = `The oldest is <strong>${oldest.business_name}</strong>, active since ${date.toLocaleDateString()}. Pretty old huh?`
            }
        },
        async getMostLocations() {
            const business = await this.load('/most-locations');

            if (business) {
                this.result = `The business with most locations 'till now is <strong>${business.business_name}</strong>, with ${business.locations_count}. To infinity and beyond!`
            }
        }
    },
    created() {
        this.getTotal();
    }
}
</script>