# 06_HP

GitHub Pages で公開するホームページ用フォルダ。

## 役割

- `index.html`: 公開ページ本体
- `styles.css`: 見た目
- `assets/`: 公開ページで使う素材
  - `iwm_logo_bk@4x.png`: 明るい背景用ロゴ
  - `iwm_logo_wt@4x.png`: 暗い背景用ロゴ

## 公開方法

このフォルダ自体を GitHub Pages 用リポジトリとして扱う。

Vault 全体は Git 管理しない。Git 操作はこの `06_HP` フォルダ内だけで行う。

GitHub 側では、リポジトリの `Settings` → `Pages` → `Build and deployment` を `GitHub Actions` にする。

## 注意

- 個人情報や制作途中の非公開メモは `06_HP` に入れない。
- 画像を使う場合は、このフォルダ内に置いてから公開対象にする。
- 公開したいリンクが決まったら、`index.html` の Contact と Projects に追加する。
