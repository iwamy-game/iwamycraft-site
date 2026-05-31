# 06_HP

GitHub Pages で公開するホームページ用フォルダ。

## 役割

- `index.html`: 公開ページ本体
- `works/nene-flower-quest.html`: 「ネネは花を咲かせたい！」固有ページ
- `styles.css`: 見た目
- `pixel-home.html`: ピクセル背景案
- `pixel-home.css`: ピクセル背景案の見た目
- `index3.html`: 注釈付きワイヤーフレーム準拠案
- `index3.css`: 注釈付きワイヤーフレーム準拠案の見た目
- `portal.html`: 3つのページ案を比較する統合入口
- `portal.css`: 統合入口の見た目
- `assets/`: 公開ページで使う素材
  - `iwamycraft_logo_*.png`: ロゴ一式
  - `nene-flower-quest-title.png`: 作品タイトル画面
  - `nene-flower-quest-gameplay.png`: 作品プレイ画面
  - `nene-flower-quest-main-visual.jpg`: 作品メインビジュアル
  - `iwamy-sho-walk-sprite.png`: 作者紹介の歩行スプライト

## 素材ファイル名のルール

`assets/` 内の画像をページで利用する場合は、HTML/CSS から参照する前に用途が分かる名前へリネームする。

- 英小文字、数字、ハイフンを基本にする。
- `export`, `screenshot`, `IMG_0001`, `image` だけのような作業名は使わない。
- 日本語名や空白を含むファイル名は、公開ページで使う前に英語の説明名へ変える。
- 作品素材は `作品名-用途.png` の形に寄せる。例: `nene-flower-quest-title.png`
- キャラクターやUI素材は `対象-用途-種類.png` の形に寄せる。例: `iwamy-sho-walk-sprite.png`

## 作品ページの方針メモ

Iwamycraft のトップページはブランド入口として扱い、作品ごとの詳しい紹介は固有ページで扱う。

- 作品が公開段階に近づいたら、`works/nene-flower-quest.html` のような固有ページを追加する。
- 固有ページには、概要、スクリーンショット、ジャンル、プレイ時間、対応環境、あらすじ、キャラクター、公開先、クレジットを置く。
- ファミコンの説明書のような冊子イメージの画像を作る予定があるため、固有ページはその冊子ビジュアルを見せる場所としても設計する。
- トップページの作品一覧は、最新作から順に並べる入口に留める。

## 公開方法

このフォルダ自体を GitHub Pages 用リポジトリとして扱う。

Vault 全体は Git 管理しない。Git 操作はこの `06_HP` フォルダ内だけで行う。

GitHub 側では、リポジトリの `Settings` → `Pages` → `Build and deployment` を `GitHub Actions` にする。

## 注意

- 個人情報や制作途中の非公開メモは `06_HP` に入れない。
- 画像を使う場合は、このフォルダ内に置いてから公開対象にする。
- 公開したいリンクが決まったら、`index.html` の Contact と Projects に追加する。
