<template>
    <AppField
        :id="id"
        :label="floatLabel ? '' : label"
        :required="required"
        :helpText="helpText"
        :error="error"
    >
        <template #default="field">
            <FloatLabel v-if="floatLabel && label" :variant="floatVariant" class="w-full">
                <InputText
                    :id="field.id"
                    :modelValue="modelValue"
                    :disabled="disabled"
                    :invalid="field.invalid"
                    :aria-invalid="field.invalid"
                    :aria-describedby="field.describedBy"
                    class="w-full"
                    v-bind="$attrs"
                    @update:modelValue="$emit('update:modelValue', $event)"
                />
                <label :for="field.id">
                    {{ label }}
                    <span v-if="required">*</span>
                </label>
            </FloatLabel>

            <InputText
                v-else
                :id="field.id"
                :modelValue="modelValue"
                :disabled="disabled"
                :invalid="field.invalid"
                :aria-invalid="field.invalid"
                :aria-describedby="field.describedBy"
                class="w-full"
                v-bind="$attrs"
                @update:modelValue="$emit('update:modelValue', $event)"
            />
        </template>
    </AppField>
</template>

<script setup>
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import AppField from './AppField.vue';

defineProps({
    id: {
        type: String,
        required: true,
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    floatLabel: {
        type: Boolean,
        default: true,
    },
    floatVariant: {
        type: String,
        default: 'on',
    },
    required: {
        type: Boolean,
        default: false,
    },
    disabled: {
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

defineEmits(['update:modelValue']);
</script>