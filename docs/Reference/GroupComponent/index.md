---
sidebar_position: 4
---

# GroupComponent

## 概要

TexTransTool のコンポーネントの[実行順序](/docs/Reference/General/ExecutionOrder)を保証したりするための存在です。

## 保証する範囲

GroupComponent　の子のオブジェクトの1段目までを保証します。

### 保証範囲の拡張

上記の保証範囲に GroupComponent を置いた場合、その子のオブジェクトの1段目まで、追加で保証できます。

## 実行順

基本的にヒエラルキーの上から順に実行します。
