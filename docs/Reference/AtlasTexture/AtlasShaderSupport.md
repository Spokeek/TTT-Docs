---
sidebar_position: 2
---

# AtlasShaderSupport

:::warning
AtlasShaderSupport は実験的な機能です！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[AtlasTexture](/docs/Reference/AtlasTexture) に、メインテクスチャー以外の、アトラス化可能なテクスチャーを明示するためのスクリプタブルオブジェクト。

任意のシェーダーで、足りない機能などがあれば Issues などにご連絡ください。

## 生成方法

`Assets/Create/TexTransTool/AtlasShaderSupportScriptableObject` から生成できます。

## 設定項目

### SupportedShaderComparer

- ContainsName : シェーダ名の部分一致
- ShaderReference : シェーダー参照一致
- NotComparer : 一つ指定し一致判定の反転
- AndComparer : 複数の Comparer を指定し AND 演算
- OrComparer : 複数の Comparer を指定し OR 演算

### Priority

サポーターの優先度

lilToon の AtlasShaderSupport を何かしらの都合で上書きしたい場合などに値を小さくしてください。

### AtlasTargetDefine

アトラス化可能なテクスチャーを定義するリスト

#### TargetPropertyName

この定義が差すテクスチャーのプロパティ名

#### AtlasDefineConstraints

定義がマテリアル設定に応じて、存在するかどうかを判定する設定

- AndConstraints : 複数の Constraints を And演算 で判定
- OrConstraints : 複数の Constraints を Or演算 で判定
- FloatPropertyValueGreater : Float のプロパティの値が指定値以上(以下)かで判定
- FloatPropertyValueEqual : Float のプロパティの値が指定値(以外)かで判定
- IntPropertyValueGreater : Int のプロパティの値が指定値以上(以下)かで判定
- IntPropertyValueEqual : Int のプロパティの値が指定値(以外)かで判定
- ShaderNameContains : シェーダー名の部分一致かで判定
- Anything : 常に有効な判定

#### BakePropertyNames

そのテクスチャーにベイク可能なプロパティ名の配列

ここで指定した物は [BakeShader](#bakeshader) に特定の規約で渡されます。

### BakeShader

プロパティをベイクするために必要なシェーダーを割り当てる項目

シェーダーには、[AtlasTargetDefine](#atlastargetdefine) で列挙されたすべてのプロパティを持つ必要があります。

ベイクが行われるとき、`_MainTex` であれば、 `Bake_MainTex` のように、 プロパティ名の前に `Bake` とついた シェーダーキーワードが設定され、その時

- その定義のテクスチャー 例えば `_MainTex` と、[BakePropertyNames](#bakepropertynames) に指定したプロパティが設定されます。
- そのテクスチャーが [Comparar](#comparar) により無効だった場合 シェーダーキーワード `Constraint_Invalid` が設定されます。

詳しい実装は [lilToonAtlasBaker.shader](https://github.com/ReinaS-64892/TexTransTool/blob/724edfa6a8f5df5b6be99c535e001de884f108b2/Runtime/TextureAtlas/AtlasShaderSupport/liltoon/lilToonAtlasBaker.shader) を参考にしてください。

### AtlasMaterialPostProses

アトラス化した後のテクスチャーをマテリアルに割り建てた後に、調整しなければならないシェーダー固有の問題を解決するための物

現在 lilToon の `_BaseMap` と `_BaseColorMap` に  `_MainTex` をコピーするためだけに使用されていて、あまり整備されていません。
