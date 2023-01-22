<template>
  <h2>{{ title }}</h2>
  <div>ID: {{ id }}</div>
  {{ detail }}
</template>
<script lang="ts" setup>
definePageMeta({ middleware: 'id-check' })

const title = '詳細'
const id = useRoute().params.id
// 画面ロジックはcomposablesから全て取得する
const detail = await useFetchDetail(Number(id))
console.log('ssでは存在するのに、clientで存在しない = Hydration text mismatch', detail)
// ss onlyな情報はuseStateで「サーバサイドで組み立てた情報をクライアント側にも共有する」としないとHydration mismatchが発生する

</script>
