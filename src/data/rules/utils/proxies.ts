import { AllOptions } from '@/types/client'
import { DirectSymbol } from '@/utils/builtin'

const proxy = DirectSymbol

const items: AllOptions[] = [{
    type: 'PROCESS_NAME',
    processName: 'ClashX',
    proxy,
}, {
    type: 'PROCESS_NAME',
    processName: 'shadowsocksr.exe',
    proxy,
}, {
    // 迅游加速器
    type: 'PROCESS_NAME',
    processName: 'xunyou.exe',
    proxy,
}]

export default items
