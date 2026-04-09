<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import { AppButton, AppInputText, AppSelect } from '../components/ui';

const countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'Germany', value: 'de' },
    { label: 'Japan', value: 'jp' },
    { label: 'United Arab Emirates', value: 'ae' },
];

const form = useForm({
    fullName: '',
    country: null,
});

const submit = () => {
    form.clearErrors();

    if (!form.fullName) {
        form.setError('fullName', 'Please enter your full name.');
    }

    if (!form.country) {
        form.setError('country', 'Please select a country.');
    }

    if (Object.keys(form.errors).length > 0) {
        return;
    }

    form.reset();
};
</script>

<template>
    <Head title="Component Playground" />

    <main class="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
        <section class="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <header class="mb-6">
                <h1 class="text-2xl font-semibold tracking-tight">Reusable PrimeVue Form Components</h1>
                <p class="mt-1 text-sm text-slate-600">
                    Structure: components/ui for wrapped, app-level building blocks.
                </p>
            </header>

            <form class="space-y-5" @submit.prevent="submit">
                <AppInputText
                    id="fullName"
                    v-model="form.fullName"
                    label="Full Name"
                    helpText="Use your legal full name."
                    :error="form.errors.fullName"
                    required
                />

                <AppSelect
                    id="country"
                    v-model="form.country"
                    :options="countryOptions"
                    label="Country"
                    helpText="Type to filter options."
                    :error="form.errors.country"
                    :searchable="true"
                    required
                />

                <div class="pt-2">
                    <AppButton
                        type="submit"
                        label="Save"
                        icon="pi pi-check"
                        :loading="form.processing"
                    />
                </div>
            </form>
        </section>
    </main>
</template>