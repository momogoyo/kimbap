import { goods, type GoodsType } from '@/data'

export function getGoods (): GoodsType[] {
  const goodsList = goods
  return goodsList
}

export function filterGoods (goodsType: string): GoodsType[] {
  return getGoods().filter(good => good.type === goodsType)

}
