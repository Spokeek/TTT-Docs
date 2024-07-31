---
sidebar_position: 6
---

# LevelAdjustmentLayer

:::warning
LevelAdjustmentLayer は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

一般的な画像編集ソフトの レベル補正 と対応するレイヤーです。

## 設定項目

[GeneralCommonLayerSetting](./GeneralCommonLayerSetting.md)の設定を持ちます。

それぞれ

- Input Floor : 入力の下限
- Input Ceiling : 入力の上限
- Gamma : 値のガンマ補正
- Output Floor : 出力の下限
- Output Ceiling : 出力の上限

の情報を持ち、

- RGB
- R
- G
- B

の4つがあります。
