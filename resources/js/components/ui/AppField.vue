<template>
    <div class="space-y-1.5">
        <label v-if="label" :for="id" class="block text-sm font-medium text-slate-700">
            {{ label }}
            <span v-if="required" class="text-rose-600">*</span>
        </label>

        <slot
            :id="id"
            :describedBy="describedBy"
            :invalid="Boolean(error)"
        />

        <p v-if="helpText && !error" :id="helpId" class="text-xs text-slate-500">
            {{ helpText }}
        </p>

        <p v-if="error" :id="errorId" class="text-xs font-medium text-rose-600">
            {{ error }}
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
    },
    helpText: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
});

const helpId = computed(() => `${props.id}-help`);
const errorId = computed(() => `${props.id}-error`);

const describedBy = computed(() => {
    if (props.error) {
        return errorId.value;
    }

    if (props.helpText) {
        return helpId.value;
    }

    return undefined;
});
</script>