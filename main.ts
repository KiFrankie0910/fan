OLED.init(128, 64)
smarthome.crashSensorSetup(DigitalPin.P1)
basic.forever(function () {
    if (smarthome.crashSensor()) {
        OLED.writeStringNewLine("your house is safe")
    } else {
        OLED.writeStringNewLine("Intruder Detected")
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
