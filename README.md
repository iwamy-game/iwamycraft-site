# 06_HP

GitHub Pages で公開するホームページ用フォルダ。

## 役割

- `index.html`: 公開ページ本体
- `styles.css`: 見た目
- `assets/`: 公開ページで使う素材
  - `iwamycraft_logo_*.png`: ロゴ一式
  - `nene-flower-quest-title.png`: 作品タイトル画面
  - `nene-flower-quest-gameplay.png`: 作品プレイ画面
  - `iwamy-sho-walk-sprite.png`: 作者紹介の歩行スプライト

## 素材ファイル名のルール

`assets/` 内の画像をページで利用する場合は、HTML/CSS から参照する前に用途が分かる名前へリネームする。

- 英小文字、数字、ハイフンを基本にする。
- `export`, `screenshot`, `IMG_0001`, `image` だけのような作業名は使わない。
- 日本語名や空白を含むファイル名は、公開ページで使う前に英語の説明名へ変える。
- 作品素材は `作品名-用途.png` の形に寄せる。例: `nene-flower-quest-title.png`
- キャラクターやUI素材は `対象-用途-種類.png` の形に寄せる。例: `iwamy-sho-walk-sprite.png`

## 公開方法

このフォルダ自体を GitHub Pages 用リポジトリとして扱う。

Vault 全体は Git 管理しない。Git 操作はこの `06_HP` フォルダ内だけで行う。

GitHub 側では、リポジトリの `Settings` → `Pages` → `Build and deployment` を `GitHub Actions` にする。

## 注意

- 個人情報や制作途中の非公開メモは `06_HP` に入れない。
- 画像を使う場合は、このフォルダ内に置いてから公開対象にする。
- 公開したいリンクが決まったら、`index.html` の Contact と Projects に追加する。
