---
sidebar_position: 3
---

# FAQ

## Uploaded avatars do not animate the effects or are corrupted

The main issue is that the avatar works well in the preview, but doesn't match when uploaded on VRChat.

In this case, please check for the presence of Material replacement animations !
TexTransTool does not take into account any animation systems such as material replacement !

- Decals and texture editors such as SimpleDecal will be reverted back to their original material by Material Replacement, and all textures will be reverted back to their original texture.

- AtlasTexture will leave UV changes and mesh replacements in place, but revert back to the original material, resulting in broken textures, etc. due to differences in UV reference positions.

The solution to these problems is to remove the material animation, which can be done by avoiding animating the material !
