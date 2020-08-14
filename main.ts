namespace SpriteKind {
    export const Effect = SpriteKind.create()
    export const TeleportEffect = SpriteKind.create()
}
let teleportEffectSprite: Sprite = null
function teleportEffect (sprite: Sprite) {
    teleportEffectSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . 9 . . . . . . . . 9 . . . . 
        . . 9 . . . . . . . . 9 . . . . 
        . . . . . . . 9 . . . 9 . . . . 
        . . . . . . . 9 . . . 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 9 . . 
        . . . . . 9 . . . . . . . 9 . . 
        . . . . . 9 . . . . . . . 9 . . 
        . . . . . 9 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.TeleportEffect)
}
