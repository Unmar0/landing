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
                <Select
                    :id="field.id"
                    :modelValue="modelValue"
                    :options="options"
                    :optionLabel="optionLabel"
                    :optionValue="optionValue"
                    :filter="searchable"
                    :showClear="clearable"
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

            <Select
                v-else
                :id="field.id"
                :modelValue="modelValue"
                :options="options"
                :optionLabel="optionLabel"
                :optionValue="optionValue"
                :filter="searchable"
                :showClear="clearable"
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
import Select from 'primevue/select';
import AppField from './AppField.vue';

defineProps({
    id: {
        type: String,
        required: true,
    },
    modelValue: {
        type: [String, Number, Boolean, Object, null],
        default: null,
    },
    options: {
        type: Array,
        default: () => [],
    },
    optionLabel: {
        type: String,
        default: 'label',
    },
    optionValue: {
        type: String,
        default: 'value',
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
    searchable: {
        type: Boolean,
        default: true,
    },
    clearable: {
        type: Boolean,
        default: true,
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