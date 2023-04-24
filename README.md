# Commerce Repository

# Notes

* mobile style은 아직 고려되지 않았습니다. pc 버전으로만 확인을 부탁드립니다.
* 미완성인 부분이 많고, 아래 기술된 pc 버전에서의 최소한의 부분만 개발되었습니다.
  * 메인 화면 (`/`)
  * 상품 상세 화면 (`/product/detail/0`)
  * 상품 카테고리 화면 (`/category/123123`)

# Project Title

더미 커머스 사이트 개발

## Introduction

해당 프로젝트는 미완성이며, 개발자 본인이 어떤 스타일로 개발하는지, 사용할 수 있는 기술을 어떻게 활용할 수 있는지 등을 보여주기 위한 프로젝트입니다.

# Project Information

## Getting Started

### Installing

아래 명령어를 실행하여 프로젝트를 설치합니다.

- `git clone https://github.com/moi0523/commerce.git`

### Usage

```
dev 빌드
  - yarn run dev
  
prod 빌드
  - yarn run build && yarn run start
```

## License

MIT

## Additional Information

프로젝트에 대한 추가 정보를 제공합니다.

예를 들어, 프로젝트 개발에 사용된 기술 스택이나 관련 문서 등을 제공할 수 있습니다.

## Skills

- Next.js
- React
- React Query
- TypeScript
- Embla Carousel
- ky
- Lodash
- Styletron
- Polished
- react-lazyload
- react-use
- Recoil
- webpack-spritesmith

## Yarn Script

- `postinstall`
  - install 명령이 끝난 직후 동작합니다.
  - 타입스크립트로 개발되지 않은 모듈의 `@types/*` 모듈을 찾아서 devDependencies 에 추가합니다.
- `predev`
  - dev 서버를 띄우기 직전 동작합니다.
  - clean:cache 스크립트를 실행하여 이전에 빌드된 파일을 제거합니다.
  - generate:typeHelper 스크립트를 실행하여 assetTypeHelper.ts 파일을 만듭니다. 만들어진 파일은 개발하는 동안 오토컴플리션을 지원하게 됩니다.
- `dev`
  - dev 서버를 띄웁니다.
- `build`
  - production 모드로 빌드합니다.
- `start`
  - production 모드로 빌드된 파일을 실행합니다.
  - vercel에서는 이 명령어를 실행하지 않지만, 로컬에서 production 빌드를 기반으로 테스트를 하거나 성능 측정이 필요할 때 사용합니다.
- `lint`
  - 코드 내 ESLint의 warnings 또는 errors 를 잡아줍니다.
- `analyze`
  - @next/bundle-analyzer 모듈을 사용해서 빌드합니다.
  - bundle-analyzer 를 통해 코드별 dependency 를 확인할 수 있다.
- `check:optimizedModules`
  - 프로젝트 내 종속성을 최적화해줍니다.
  - 설치하지 않았는데 사용 중인 모듈은 설치할 수 있도록 안내합니다.
  - 설치되어 있는데 사용하지 않는 모듈은 제거할 수 있게 안내합니다.
- `check:outdatedModules`
  - 설치되어있는 모듈 중 업데이트 할 수있는 모듈을 나열합니다.
- `generate:typeHelper`
  - 스프라이트 이미지와 SVG 파일들의 이름을 타입화 하여 작업하는 동안 오토컴플리션을 지원하게 합니다.
- `postgenerate:typeHelper`
  - 생성된 타입 파일의 가시성을 높이기 위해 prettier 를 적용합니다.
- `clean:cache`
  - 빌드 파일을 제거합니다.
- `clean`
  - clean:cache 스크립트를 실행하여 이전에 빌드된 파일을 제거합니다.
  - 기존에 설치한 모듈을 전부 제거합니다.
- `postclean`
  - yarn install 명령어를 실행합니다.
- `storybook`
  - storybook 서버를 띄웁니다.
  - build-storybook 스크립트를 실행하지 않아도 빌드를 하기 때문에 서버를 띄울 수 있습니다.
- `build-storybook`
  - storybook을 빌드합니다.

# process.env.*

- `ANALYZE`
  - ANALYZE 값을 통해 @next/bundle-analyzer 모듈 사용 여부를 처리합니다.
- `NODE_ENV`
  - NODE_ENV 값을 통해 nextConfig의 reactRemoveProperties, removeConsole 옵션의 사용 여부를 처리합니다.
