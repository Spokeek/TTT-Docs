---
sidebar_position: 1
---

# AtlasTextureのチュートリアル

VRAMの使用量を削減したい！！

なら、Blenderに持って行ってUVを再配置して、それに合ったテクスチャをベイクを使って生成して、それらをUnityに再度インポートして...

なんてめんどくさいじゃん！！！

AtlasTextureを使えば、めんどくさいVRAM使用量削減を __非破壊で簡単__ にすることができます！

## チュートリアル

このチュートリアルでは別の衣装を使っているけど、
デフォルトの衣装が一部使われていて、デフォルト衣装のテクスチャに無駄が生じているケースでアトラス化を使ってみましょう！  
![MilkRe](img/at-MilkRe.png)

新しくゲームオブジェクトを生成して AddComponent から TexTransTool/TTT AtlasTexture で追加することで使用することができます。  
![AddComponent](img/at-AddComponent.png)

まず最初に、アトラス化をしたいテクスチャを持ったレンダラー(メッシュ)の範囲を指定しましょう  
![SetTargetRoot](img/at-SetTargetRoot.png)

これに設定したオブジェクト配下にあるものすべてがアトラス化の対象の候補に入ります  
このケースの時はアバタールートを指定するのが手っ取り早いですね！  
![MaterialList](img/at-MaterialList.png)

設定したらマテリアル一覧が表示されます。この場合は、テクスチャーの無駄が出ているデフォルト衣装と追加した衣装のテクスチャをアトラス化をしたいので  
Milk-Re_Costume と Milk RE174 N のチェックボックスを有効化します。  
![SelectMaterial](img/at-SelectMaterial.png)

設定できたら プレビューしてみましょう！  
![PreviewButton](img/at-PreviewButton.png)

プレビューしたら、見た目には大きな変化がなく、コンソールにエラーが出てなく、マテリアル選択のUIが非表示になっていら正常にできています！
![Preview](img/at-Preview.png)

...さすがにどんな感じにアトラス化されてるかみたいですよね！  
そんな時はアトラス化した衣装の適当なレンダラーのインスペクターからマテリアルを開きメインテクスチャーを見るとその結果を確認することができます  
![AtlasResult](img/at-AtlasResult.png)

しっかりとアトラス化されていますね！いい感じです✨

最後に、プレビューを終了して、アバターの配下にAtlasTextureを追加したゲームオブジェクトを入れておけば、  
アバターアップロード時に自動でアトラス化が適用されます！

## Quest対応のためのアトラス化とマテリアルの結合のチュートリアル

これは 無駄を削るというよりもクエスト対応のための、見た目を維持できない最適化になりますが、  
Quest対応をするときに必要になるマテリアル数の削減やVRAMの削減をするための方法です！

まず前提として上記のチュートリアルは完全に理解している前提で始めます。

クエスト対応の時ケースで、できるだけ数を減らすなら...すべてのマテリアルとテクスチャをアトラス化対象に入れましょう！  
![QestAllMaterialSelect](img/at-QestAllMaterialSelect.png)

つぎに

- アトラス化設定のマテリアルの結合にチェックを入れる
- プロパティベイク設定をBakeに変更する
- そしてクエスト用のマテリアルを結合時マテリアルの参照に入れる
- テクスチャーを強制的にセットするにチェックを入れる

をすれば設定は完了です！  
![QestAtlasSettings](img/at-QestAtlasSettings.png)  
プレビューをしてみるとクエスト用のマテリアルに置き換えられ、テクスチャとマテリアルも一つになっていることを確認できます！

最後に注意点！  AtlasTexture のマテリアルの結合は __マテリアルをまとめるだけ__ で、__マテリアルスロットの結合はできません__。  
メッシュをマージしながらマテリアルスロットも削減できる[Anatawa12/AvatarOptimaizer](https://github.com/anatawa12/AvatarOptimizer)の[MergeSkinnedMesh](https://vpm.anatawa12.com/avatar-optimizer/ja/docs/reference/merge-skinned-mesh/)との併用を強く推奨します。

## クレジット

- あまとうさぎ/Milk Re : https://booth.pm/ja/items/2953391
- るるくショップ/RE174 : https://ruruku14.booth.pm/items/4053389
