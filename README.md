# ブログの公開コピー

<https://tokumaru.work/>の公開記事を保存するリポジトリです。編集元は[EmDash管理画面](https://tokumaru.work/admin/)。[本体のGitHub Actions](https://github.com/soumame/portfolio-2025/actions/workflows/emdash-sync.yml)が約15分ごとに公開版をコピーします。GitHubのスケジュールには遅延があります。

## 保存内容

| 配置 | 内容 |
| --- | --- |
| `ja/`・`en/` | 公開Markdownとfrontmatter |
| `media/` | 記事から参照する画像等の原本。ファイル名はSHA-256 |
| `.emdash/entries/` | 公開版のPortable Text、Slug、日付、SEO、翻訳グループ |
| `.emdash/media.json` | メディアの対応と原本ハッシュ |
| `.emdash/taxonomies.json` | カテゴリ・タグ |
| `.emdash/sync.json` | コピーの同期台帳 |

Markdownの画像は`../../media/...`等の相対パスです。Markdownと`media/`を一緒に持ち出せば、CMSに依存せず閲覧・移行できます。完全な本文構造は`.emdash/entries/`に保存します。

## 編集・Obsidian

CMSで記事を保存し、公開してください。日本語記事の翻訳はCMS側で英語の下書きを生成し、英語記事の公開後にここへコピーします。旧GitHub翻訳・タグ検査Workflowは撤去しました。

GitからCMSへの逆同期はありません。`ja/`・`en/`・`media/`・`.emdash/`の管理対象を手編集すると、コピー処理は上書きせず競合で停止します。手編集を残したい場合は別ブランチや別の作業コピーを使い、公開する変更はCMSへ反映してください。

このリポジトリはsubmoduleではありません。Macの独立したコピーは`~/Projects/blogs`です。通常の`git pull --ff-only`で更新して、ObsidianのVaultとして閲覧できます。個人のObsidian設定、下書き用テンプレートと会話からMarkdownを作るスキルは保持しています。それらの下書きは自動でCMSへ取り込まれません。

`scripts/list-tags.js`は既存Markdownのタグを読み取る補助です。npm/pnpmのインストールは不要です。

```sh
node scripts/list-tags.js
node scripts/list-tags.js astro
```

## バックアップの範囲

ここには未公開下書きと全編集履歴は入りません。CMS全体の復元にはSite transferバックアップを使います。[本体のバックアップ・復旧手順](https://github.com/soumame/portfolio-2025/blob/main/docs/backups.md)を参照してください。

README・個人設定・補助ファイルは同期処理の管理対象外です。記事のコピー更新で公開サイトの再ビルドは発生しません。
