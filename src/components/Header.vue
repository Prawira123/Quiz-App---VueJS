<script setup>
    defineProps({
        searchInput: {
            type: String,
            default: ''
        }
    })

    const emit = defineEmits(['update:searchInput'])
</script>

<template>
    <div class="bg-blue-500 text-white p-4">
        <h1 class="text-2xl font-bold">LIST CARD</h1>
        <div class="flex gap-2">
            <input type="text" placeholder="searching..." class="px-3 py-1 rounded-md text-black" :value="searchInput" @input="emit('update:searchInput', $event.target.value.trim())">

        </div>
    </div>
</template>