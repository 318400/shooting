/**
 * 飛機x2
 */
input.onButtonPressed(Button.A, function () {
    主角.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    子彈 = game.createSprite(主角.get(LedSpriteProperty.X), 主角.get(LedSpriteProperty.Y))
    子彈.set(LedSpriteProperty.Brightness, 190)
    for (let index = 0; index < 4; index++) {
        子彈.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    子彈.delete()
})
input.onButtonPressed(Button.B, function () {
    主角.change(LedSpriteProperty.X, 1)
})
let 子彈: game.LedSprite = null
let 主角: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
game.setScore(0)
主角 = game.createSprite(2, 4)
let 飛機 = game.createSprite(0, 0)
飛機.set(LedSpriteProperty.Brightness, 170)
let 飛機1 = game.createSprite(1, 0)
飛機1.set(LedSpriteProperty.Brightness, 150)
basic.forever(function () {
    basic.pause(200)
    飛機1.change(LedSpriteProperty.X, 1)
    if (飛機1.get(LedSpriteProperty.X) == 4) {
        basic.pause(200)
        飛機1.set(LedSpriteProperty.X, 0)
        飛機1.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    basic.pause(500)
    飛機.change(LedSpriteProperty.X, 1)
    if (飛機.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        飛機.set(LedSpriteProperty.X, 0)
        飛機.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (飛機1.isTouching(主角)) {
        music.stopAllSounds()
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
        game.gameOver()
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (飛機.isTouching(主角)) {
        music.stopAllSounds()
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
        game.gameOver()
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (子彈) {
        if (子彈.isTouching(飛機1)) {
            soundExpression.happy.playUntilDone()
            game.addScore(2)
            飛機1.set(LedSpriteProperty.X, 0)
            飛機1.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
    if (子彈) {
        if (子彈.isTouching(飛機)) {
            soundExpression.happy.playUntilDone()
            game.addScore(1)
            飛機.set(LedSpriteProperty.X, 0)
            飛機.set(LedSpriteProperty.Y, 0)
        }
    }
})
