import { Chart, registerables, ChartItem, ChartConfiguration } from 'chart.js'
import { createDayStudentDetailsConfig } from '@/charts/dayStudentDetails/config'

const createChart = (target: ChartItem, config: ChartConfiguration): Chart => {
  return new Chart(target, config)
}

export default {
  createDayStudentDetailsChart: (target: ChartItem) => createChart(target, createDayStudentDetailsConfig())
}

Chart.register(...registerables)
