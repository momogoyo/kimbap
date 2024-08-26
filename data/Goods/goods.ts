import type { GoodsType, ButtonType } from './type'

export const goods: GoodsType[] = [
  {
    id: 0,
    type: 'stationery',
    name: 'pencil',
    description: 'descriptiondescriptiondescriptiondescription',
    price: 3500
  },
  {
    id: 1,
    type: 'stationery',
    name: 'sketchbook',
    description: 'descriptiondescriptiondescriptiondescription',
    price: 5500
  },
  {
    id: 2,
    type: 'fancy',
    name: 'calendar',
    description: 'descriptiondescriptiondescriptiondescription',
    price: 6500
  },
  {
    id: 3,
    type: 'fancy',
    name: 'sticker',
    description: '엉뚱한 미더덕의 일상 이모티콘을 스티커로 제작했습니다. 잘 찢어지지 않는 코팅 형 스티커로, 제거할 때에도 지저분하게 제거되지 않아요!',
    price: 8000
  },
  {
    id: 4,
    type: 'digital',
    name: 'Mac safe iOS Phone Case',
    description: 'descriptiondescriptiondescriptiondescription',
    price: 12000
  }
]

export const buttons: ButtonType[] = [
  {
    name: 'All',
    type: 'all'
  },
  {
    name: 'Stationery',
    type: 'stationery'
  },
  {
    name: 'Fancy',
    type: 'fancy'
  },
  {
    name: 'Digital',
    type: 'digital'
  }
]