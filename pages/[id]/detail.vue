<template>
  <h2>{{ title }}</h2>
  <div>ID: {{ id }}</div>
  {{ detail }}
</template>
<script lang="ts" setup>
import { DetailResponse } from '~~/types/app';

definePageMeta({ middleware: 'id-check' })

const title = '詳細'
const id = useRoute().params.id
// useFetchDetailはuseStateのcallbakなので、serversideでのみ実行される
const detailResponse: DetailResponse | undefined = await useFetchDetail(Number(id))
const detail = useState(STATE_KEYS.KEY_DETAIL)

</script>
