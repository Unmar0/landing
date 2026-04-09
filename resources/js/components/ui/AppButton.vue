<template>
    <Button
        :label="label"
        :icon="icon"
        :loading="loading"
        :disabled="disabled || loading"
        :severity="severity"
        :variant="variant"
        :type="type"
        v-bind="$attrs"
    />
</template>

<script setup>
import Button from 'primevue/button';

defineProps({
    label: {
        type: String,
        default: '',
    },
    icon: {
        type: String,
        default: '',
    },
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    severity: {
        type: String,
        default: 'primary',
    },
    variant: {
        type: String,
        default: 'filled',
    },
    type: {
        type: String,
        default: 'button',
    },
});
</script>