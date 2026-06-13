---
reader_type: specialist_ai
role_scope:
  - Studio
status: draft
summary: >
  Iwamycraft公式サイト用のWebデザイン基準。03_WORKの全体デザインシステムをHP実装向けに落としたもの。
---

# 06_HP design

作成日: 2026/06/13

## 役割

`06_HP` 内の公式サイト実装で使うWeb専用デザイン基準。

全体基準は `03_WORK/イワミクラフト_デザインシステム.md` を参照し、このファイルではWeb実装に必要なCSS変数、余白、文字、レイアウト、コンポーネントの扱いに絞る。

## Source

- `03_WORK/イワミクラフト_デザインシステム.md`
- `03_WORK/イワミクラフト_ブランドガイド.md`
- `03_WORK/イワミクラフト_Web_ホームページ案_260508.md`
- `06_HP/README.md`

## Web Tokens

### Color

| Token | Value |
| --- | --- |
| `--color-bg` | `#fff7e4` |
| `--color-paper` | `#f0dca9` |
| `--color-text` | `#34342e` |
| `--color-main` | `#f7d765` |
| `--color-accent-red` | `#a04432` |
| `--color-accent-green` | `#4e6b61` |

### Spacing

4px刻みを基本にする。

| Token | Value | Use |
| --- | ---: | --- |
| `--space-1` | `0.25rem` | 極小の隙間 |
| `--space-2` | `0.5rem` | ラベルと本文 |
| `--space-3` | `0.75rem` | 小さなまとまり |
| `--space-4` | `1rem` | 標準の要素間 |
| `--space-6` | `1.5rem` | ブロック内の区切り |
| `--space-8` | `2rem` | 大きめのまとまり |
| `--space-10` | `2.5rem` | セクション内の間 |
| `--space-12` | `3rem` | セクション間 |
| `--space-16` | `4rem` | 大きな導入余白 |
| `--space-24` | `6rem` | 特別な大余白 |

## Typography

本文は可読性優先。見出しはやわらかさを出してよいが、ロゴ画像より強くしない。

| Use | Size | Line height |
| --- | ---: | ---: |
| Label | `0.75rem` | `1rem` |
| Caption | `0.8125rem` | `1.25rem` |
| Body small | `0.875rem` | `1.375rem` |
| Body | `1rem` | `1.75rem` |
| Lead | `1.125rem` | `2rem` |
| Heading small | `1.25rem` | `1.75rem` |
| Heading | `1.75rem` | `2.25rem` |
| Heading large | `2.5rem` | `3rem` |
| Hero | `3.5rem` | `4rem` |

## Layout

| Token | Value |
| --- | ---: |
| `--layout-content` | `1080px` |
| `--layout-wide` | `1200px` |
| `--layout-text` | `720px` |
| `--layout-narrow` | `560px` |

## Component Rules

- Header height: 72px desktop, 64px mobile.
- Section vertical padding: `--space-12` to `--space-16`.
- Card padding: `--space-4` to `--space-6`.
- Card radius: `--radius-large`, maximum 8px.
- Button radius: `--radius-medium`, not pill unless a text link chip needs it.
- Body text max width: `--layout-text`.
- Feature/image grids must use `minmax(0, 1fr)`.
- Mobile widths 320/375/414/768px must not create horizontal scroll.

## Do / Don't

- Do use yellow for CTA and important labels.
- Do use paper color and grid texture for tactile structure.
- Do keep SNS/external links as exits, not the primary header focus.
- Don't use `IwamyCraft`.
- Don't put IWC code on the public site.
- Don't overuse large rounded cards or generic gradient decorations.
