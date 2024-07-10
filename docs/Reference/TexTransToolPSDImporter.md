---
sidebar_position: 7
---

# TexTransToolPSDImporter

:::warning
TexTransToolPSDImporter は実験的な機能です！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[PSD](https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/) を ScriptedImproter を使用し、[MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) とそれに連なるレイヤーとしてインポートする機能。

## 使い方

.psd のファイルを Unity にインポートし、インスペクターの上部のほうにある Importer の選択で、 `net.rs64.TexTransTool.MultiLayerImage.Importer.TexTransToolPSDImporter` を選択することで使用できます。

## インポート可能なレイヤー

現在これらのレイヤーがインポート可能です。

- [ラスターレイヤー](/docs/Reference/MultiLayerImageCanvas/RasterImportedLayer)
- [レイヤーフォルダー](/docs/Reference/MultiLayerImageCanvas/LayerFolder)
- [べたぬりレイヤー](/docs/Reference/MultiLayerImageCanvas/SolidColorLayer)
- [色調・彩度・明度 調整レイヤー](/docs/Reference/MultiLayerImageCanvas/HSLAdjustmentLayer)
- [レベル調整レイヤー](/docs/Reference/MultiLayerImageCanvas/LevelAdjustmentLayer)
- [選択的色域調整レイヤー](/docs/Reference/MultiLayerImageCanvas/SelectiveColoringAdjustmentLayer)

エクスポートするアプリケーションで互換性を保持する設定などが有効な場合、これら以外のレイヤーがラスターレイヤーとしてインポートできることがあります。
