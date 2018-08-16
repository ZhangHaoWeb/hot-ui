<!-- input -->
<template>
    <div>
        <input type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" class="hot-default-input">
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'hotInput',
    props:['value'],
    data () {
       return {

       };
   }
};
</script>