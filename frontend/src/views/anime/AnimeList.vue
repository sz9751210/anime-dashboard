<template>
  <n-data-table :columns="columns" :data="animeList" :pagination="pagination" @update:sorter="handleUpdateSorter" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { animeData } from './animeData.js'
import { NDataTable } from 'naive-ui'
// 原始動漫數據
const originalAnimeList = animeData

// 排序狀態
const sortStatesRef = ref([])

// 生成排序鍵映射
const sortKeyMapOrderRef = computed(() =>
  sortStatesRef.value.reduce((result, { columnKey, order }) => {
    result[columnKey] = order
    return result
  }, {})
)

// 分頁設定
const paginationRef = ref({ pageSize: 5 })

// 表格列定義
const columns = computed(() => [
  {
    title: '上映年份',
    key: 'year',
    sorter: {
      compare: (a, b) => a.year - b.year,
      multiple: 2,
    },
    sortOrder: sortKeyMapOrderRef.value.year || false,
  },
  {
    title: '播放日期',
    key: 'date',
  },
  {
    title: '作品名',
    key: 'title',
  },
  {
    title: '製作',
    key: 'studio',
  },
  {
    title: '集數',
    key: 'episodes',
    render(row) {
      return `${row.episodes}集`
    },
  },
  // 其他列定義...
])

// 計算後的動漫列表，基於排序狀態
const animeList = computed(() => {
  const sortState = sortStatesRef.value[0]
  if (sortState) {
    return [...originalAnimeList].sort((a, b) => {
      const { columnKey, order } = sortState
      const valA = a[columnKey]
      const valB = b[columnKey]
      let compareResult = valA < valB ? -1 : valA > valB ? 1 : 0
      if (order === 'descend') compareResult *= -1
      return compareResult
    })
  }
  return originalAnimeList
})

// 處理排序更新
function handleUpdateSorter(sorters) {
  sortStatesRef.value = [].concat(sorters)
}
</script>
