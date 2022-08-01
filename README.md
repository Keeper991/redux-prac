# 인수인계 문서

## 친애하는 후임자에게...

안녕하세요, OO님.  
회사를 그만두기 앞서, 도망치라고 말하고 싶지만... 당신마저 없으면 이 회사는 굴러가지 않습니다.  
저는 도저히 redux를 이해하지 못했지만, 당신은 할 수 있습니다..  
부디, 저의 못다 한 꿈을 이뤄주십시오... 🙏  
필요한 정보는 아래에 기재해뒀습니다..  
궁금한 사항은.. 스스로 해겨ㄹ...

## 폴더 구조

```
src
├── App.js
├── common
│   ├── Header.jsx              // 헤더 component
│   └── Layout.jsx              // 레이아웃 component
├── components
│   ├── Form.jsx                // 상품 추가 component
│   ├── ProductItem.jsx         // 상품 아이템 component
│   ├── ProductList.jsx         // 상품 리스트 component
│   └── TotalPrice.jsx          // 총 가격 component
├── index.js
├── pages
│   ├── ProductDetailPage.jsx   // 상품 상세 page
│   └── ProductListPage.jsx     // 상품 리스트 page
├── reportWebVitals.js
└── setupTests.js
```

## 구현 기능

- '상품 추가' form에 data를 입력하고 '추가'버튼을 누르면, **'상품 리스트에 추가'** 되어야 합니다.
- 상품 아이템을 누르면 **'상품 상세페이지로 이동'** 해야 합니다.
- 상품 아이템에 있는 '❌' 버튼을 누르면, 해당 아이템이 **'삭제'** 되어야 합니다.
- 총 가격의 금액은 '상품 리스트'에 있는 **'모든 상품의 가격을 합한 금액'** 이어야 합니다.
- 상단 우측에 있는 '로그인 버튼'을 누르면, '로그아웃 버튼'으로 변하고, 상품 상세페이지로 갔을 때 그 **상태가 유지** 되어야 합니다.
