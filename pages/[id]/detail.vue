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
// 画面ロジックはcomposablesから全て取得する
// composablesはss/cs両方から評価されるが、runtimeConfigのkeyはprivateとしているため、ssのみで評価させたい
// これがないとcsでもAPIコールが実行されるが、環境変数apihost keyがundefinedとなる
if (process.server) {
  const detailResponse: DetailResponse | undefined = await useFetchDetail(Number(id))
}
const detail = useState(STATE_KEYS.KEY_DETAIL)

</script>
